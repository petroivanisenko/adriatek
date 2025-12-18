"use client";

import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createProduct, updateProduct } from "@/actions/product";
import { getCategories } from "@/actions/category";
import { Category, Product } from "@/generated/prisma";
import { toast } from "sonner";
import {
  Loader2,
  Upload,
  Image as ImageIcon,
  Pencil,
  Plus,
} from "lucide-react";
import { resolvePublicImageUrl } from "@/lib/images";

// Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0, "Price must be positive"),
  categoryId: z.string().min(1, "Category is required"),
  discount: z.coerce.number().min(0).max(100).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  inStock: z.boolean().default(true),
});

interface ProductFormModalProps {
  product?: Product;
  triggerVariant?: "button" | "icon";
}

export function ProductFormModal({
  product,
  triggerVariant,
}: ProductFormModalProps) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFile, setImageFile] = useState<File | string | null>(
    product?.image || null,
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    resolvePublicImageUrl(product?.image) || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || 0,
      categoryId: product?.categoryId.toString() || "",
      discount: product?.discount || 0,
      rating: product?.rating || 0,
      inStock: product?.inStock ?? true,
    },
  });

  useEffect(() => {
    if (product) {
      form.reset({
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId: product.categoryId.toString(),
        discount: product.discount,
        rating: product.rating,
        inStock: product.inStock,
      });
      setImageFile(product.image);
      setImagePreview(resolvePublicImageUrl(product.image));
    }
  }, [product, form]);

  useEffect(() => {
    if (open) {
      getCategories().then((data) => {
        if (data) setCategories(data);
      });
    }
  }, [open]);

  // Handle paste
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!open) return;
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile();
          if (blob) {
            handleFileSelect(blob);
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [open]);

  const handleFileSelect = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    setImageUrlInput(""); // Clear URL input if file is selected
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrlInput(url);
    if (url) {
      setImageFile(url);
      setImagePreview(url);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!imageFile) {
      toast.error("Please provide an image");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price.toString());
      formData.append("categoryId", values.categoryId);
      formData.append("discount", (values.discount || 0).toString());
      formData.append("rating", (values.rating || 0).toString());
      formData.append("inStock", String(values.inStock));

      if (imageFile instanceof File) {
        formData.append("image", imageFile);
      } else {
        formData.append("image", imageFile as string);
      }

      if (product) {
        await updateProduct(product.id, formData);
        toast.success("Product updated successfully");
      } else {
        await createProduct(formData);
        toast.success("Product created successfully");
        form.reset();
        setImageFile(null);
        setImagePreview(null);
        setImageUrlInput("");
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error(
        product ? "Failed to update product" : "Failed to create product",
      );
    } finally {
      setIsLoading(false);
    }
  }

  const resolvedTriggerVariant =
    triggerVariant ?? (product ? "icon" : "button");

  const trigger =
    resolvedTriggerVariant === "icon" ? (
      <Button
        variant="ghost"
        size="icon"
        type="button"
        aria-label={product ? "Edit product" : "Open product form"}
      >
        <Pencil className="w-4 h-4" />
      </Button>
    ) : (
      <Button type="button">
        <Plus /> Add Product
      </Button>
    );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? "Edit Product" : "Create New Product"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload Section */}
            <div className="space-y-4">
              <FormLabel>Product Image</FormLabel>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4 bg-muted/50 hover:bg-muted/70 transition-colors">
                {imagePreview ? (
                  <div className="relative w-full aspect-video rounded-md overflow-hidden bg-background">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="object-contain w-full h-full"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview(null);
                        setImageUrlInput("");
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Drag & drop, paste image, or enter URL
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileSelect(file);
                        }}
                      />
                    </div>
                  </div>
                )}

                {!imagePreview && (
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Or paste image URL..."
                      value={imageUrlInput}
                      onChange={handleUrlChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Product description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount (%)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" max="100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating (0-5)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inStock"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">In Stock</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {product ? "Save Changes" : "Create Product"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
