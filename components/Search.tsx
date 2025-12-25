"use client";

import { Input } from "./ui/input";
import { useDebounceValue } from "usehooks-ts";
import { RefObject, useEffect, useRef, useState } from "react";
import { searchProducts } from "@/actions/product";
import { Product } from "@/generated/prisma";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/images";
import { Search as SearchIcon, Loader2 } from "lucide-react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebounceValue(
    "",
    500,
  );
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useOnClickOutside(searchRef as RefObject<HTMLDivElement>, () =>
    setIsOpen(false),
  );

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    async function fetchResults() {
      setIsLoading(true);
      try {
        const products = await searchProducts(debouncedSearchTerm);
        setResults(products || []);
        setIsOpen(true);
      } catch (error) {
        console.error("Error searching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResults();
  }, [debouncedSearchTerm]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setDebouncedSearchTerm(e.target.value);
    if (e.target.value.trim() === "") setIsOpen(false);
  }

  return (
    <div className="flex-1 w-full relative group" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          type="search"
          placeholder="Lookup premium components..."
          value={searchTerm}
          onChange={handleChange}
          autoFocus={false}
          onFocus={() => debouncedSearchTerm && setIsOpen(true)}
          className="w-full h-12 pl-12 rounded-xl border-primary/5 bg-primary/5 focus:bg-background focus:border-primary/20 transition-all text-sm font-medium"
        />
        {isLoading && (
          <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-primary animate-spin" />
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-3 w-full bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-4 border-b border-primary/5">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Search Results</p>
          </div>
          <ul className="max-h-[60vh] overflow-auto py-2 custom-scrollbar">
            {results.map((product) => {
              const originalPrice = Math.round(product.price * (1 + product.discount / 100));
              const hasDiscount = product.discount > 0;
              
              return (
                <li key={product.id} onClick={() => setIsOpen(false)}>
                  <Link
                    className="p-4 flex items-center hover:bg-primary/5 cursor-pointer transition-all gap-4"
                    href={`/product/${product.id}`}
                    onClick={() => {
                      setSearchTerm("");
                      setDebouncedSearchTerm("");
                      setIsOpen(false);
                    }}
                  >
                    <div className="size-16 relative shrink-0 overflow-hidden rounded-xl bg-white border border-primary/5">
                      <Image
                        src={resolvePublicImageUrl(product.image) ?? ""}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                        unoptimized={(
                          resolvePublicImageUrl(product.image) ?? ""
                        ).includes("localhost")}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate group-hover:text-primary transition-colors mb-1 uppercase tracking-tight">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-foreground">
                          {product.price.toLocaleString()} €
                        </span>
                        {hasDiscount && (
                           <span className="text-[10px] text-muted-foreground line-through opacity-50">
                             {originalPrice.toLocaleString()} €
                           </span>
                        )}
                        {!product.inStock ? (
                           <Badge variant="destructive" className="text-[8px] uppercase font-black py-0 px-1.5 h-4">OUT</Badge>
                        ) : (
                           <Badge variant="secondary" className="text-[8px] uppercase font-black py-0 px-1.5 h-4 bg-primary/5 text-primary border-primary/10">STK</Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="p-3 bg-muted/30 text-center">
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Adriatek Limited | Operational Index</p>
          </div>
        </div>
      )}

      {isOpen && debouncedSearchTerm && results.length === 0 && !isLoading && (
        <div className="absolute z-50 mt-3 w-full bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/5 p-8 text-center animate-in fade-in slide-in-from-top-2">
          <div className="size-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <SearchIcon className="size-6 text-muted-foreground opacity-20" />
          </div>
          <p className="text-sm font-bold text-muted-foreground">
            No technical matching found for: <span className="text-primary">&quot;{debouncedSearchTerm}&quot;</span>
          </p>
        </div>
      )}
    </div>
  );
}
