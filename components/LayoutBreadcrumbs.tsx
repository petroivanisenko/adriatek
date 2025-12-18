"use client";

import Link from "next/link";
import { useBreadcrumbs } from "./BreadcrumbContext";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function LayoutBreadcrumbs() {
  const { items } = useBreadcrumbs();

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link title={item.title} href={item.href}>
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
