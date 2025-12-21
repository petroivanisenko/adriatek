"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronUpIcon, ChevronDownIcon, Redo2Icon } from "lucide-react";
import { Category } from "@/generated/prisma";
import { FilterState } from "@/types";

interface FilterPanelProps {
  filterState: FilterState;
  categories: Category[];
  minPrice: number;
  maxPrice: number;
  onFilterChange: (updates: Partial<FilterState>, resetPage?: boolean) => void;
  onReset: () => void;
  isPending: boolean;
}

export function FilterPanel({
  filterState,
  categories,
  minPrice,
  maxPrice,
  onFilterChange,
  onReset,
  isPending,
}: FilterPanelProps) {
  const { categoryIds, occasionIds, priceRange } = filterState;

  const hasActiveFilters =
    categoryIds.length > 0 ||
    occasionIds.length > 0 ||
    priceRange[0] > minPrice ||
    priceRange[1] < maxPrice;

  const handleCategoryToggle = (categoryId: number, checked: boolean) => {
    const newCategories = checked
      ? [...categoryIds, categoryId]
      : categoryIds.filter((id) => id !== categoryId);

    onFilterChange({ categoryIds: newCategories });
  };

  return (
    <div className="space-y-2">
      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={onReset}
          disabled={isPending}
        >
          <Redo2Icon className="mr-2 h-4 w-4" /> Reset All Filters
        </Button>
      )}

      <div className="space-y-2">
        <FilterSection title="Categories">
          {categories.length > 0 ? (
            categories.map((category) => (
              <FilterCheckbox
                key={category.id}
                id={`category-${category.id}`}
                label={category.name}
                checked={categoryIds.includes(category.id)}
                onChange={(checked) =>
                  handleCategoryToggle(category.id, checked)
                }
                disabled={isPending}
              />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              No categories found.
            </p>
          )}
        </FilterSection>

        <FilterSection title="Price Range">
          <div className="space-y-4.5">
            <Slider
              value={priceRange}
              min={minPrice}
              max={maxPrice}
              step={1}
              onValueChange={(value) =>
                onFilterChange({ priceRange: value as [number, number] })
              }
              className={isPending ? "opacity-70" : ""}
              disabled={isPending}
            />
            <div className="flex items-center justify-between gap-3">
              <PriceInput
                value={priceRange[0]}
                min={minPrice}
                max={priceRange[1]}
                onChange={(value) =>
                  onFilterChange({ priceRange: [value, priceRange[1]] })
                }
                disabled={isPending}
              />
              <span className="text-sm text-muted-foreground">—</span>
              <PriceInput
                value={priceRange[1]}
                min={priceRange[0]}
                max={maxPrice}
                onChange={(value) =>
                  onFilterChange({ priceRange: [priceRange[0], value] })
                }
                disabled={isPending}
              />
            </div>
            {isPending && (
              <p className="text-xs text-muted-foreground animate-pulse">
                Updating results...
              </p>
            )}
          </div>
        </FilterSection>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <Collapsible className="flex flex-col gap-4" open={open}>
      <div className="flex items-center w-full justify-between">
        <h3 className="font-semibold">{title}</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" onClick={() => setOpen(!open)}>
            {open ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="space-y-3">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function FilterCheckbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onChange(value === true)}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={`text-sm font-medium leading-none cursor-pointer ${
          disabled ? "opacity-70" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function PriceInput({
  value,
  min,
  max,
  onChange,
  disabled = false,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  const [localValue, setLocalValue] = useState(value.toString());

  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || /^\d+$/.test(newValue)) setLocalValue(newValue);
  };

  const handleBlur = () => {
    if (localValue === "") {
      setLocalValue(min.toString());
      onChange(min);
    } else {
      const parsedValue = parseInt(localValue, 10);
      if (isNaN(parsedValue)) setLocalValue(value.toString());
      else {
        const clampedValue = Math.max(min, Math.min(max, parsedValue));
        setLocalValue(clampedValue.toString());
        if (clampedValue !== value) onChange(clampedValue);
      }
    }
  };

  return (
    <div className="flex-1 relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        €
      </span>
      <Input
        type="text"
        inputMode="numeric"
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.currentTarget.blur();
        }}
        className="pl-7 text-right"
        disabled={disabled}
        min={min}
        max={max}
        aria-label="Price input in Euro"
      />
    </div>
  );
}
