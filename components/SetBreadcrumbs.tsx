"use client";

import { useEffect } from "react";
import { useBreadcrumbs, BreadcrumbItem } from "./BreadcrumbContext";

interface SetBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function SetBreadcrumbs({ items }: SetBreadcrumbsProps) {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems(items);
    return () => setItems([]);
  }, [items, setItems]);

  return null;
}
