"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  title?: string;
}

interface BreadcrumbContextType {
  items: BreadcrumbItem[];
  setItems: (items: BreadcrumbItem[]) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null);

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
  const [items, setItemsState] = useState<BreadcrumbItem[]>([]);

  const setItems = useCallback((newItems: BreadcrumbItem[]) => {
    setItemsState(newItems);
  }, []);

  return (
    <BreadcrumbContext.Provider value={{ items, setItems }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbs() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbProvider");
  }
  return context;
}
