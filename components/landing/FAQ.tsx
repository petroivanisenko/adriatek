"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship our premium electronics worldwide. Shipping costs and delivery times vary by location, but we generally deliver within 30 business days for most international hubs.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All our products come with a minimum 12-month manufacturer warranty. For high-end workstations and audio equipment, we offer extended support plans up to 5 years.",
  },
  {
    question: "Can I customize my workstation configuration?",
    answer:
      "Absolutely. We specialize in custom configurations for professional needs. Contact our technical team with your requirements, and we'll provide a tailored quote within 24 hours.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept only SEPA transfers",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            <span>Got Questions?</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about our products and services. Can't
            find the answer? Reach out to our technical specialists.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-3xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-primary/20 bg-primary/5 shadow-sm"
                  : "border-primary/10 bg-muted/20 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4"
              >
                <span className="text-xl md:text-2xl font-bold tracking-tight">
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="size-5" />
                  ) : (
                    <Plus className="size-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground text-lg leading-relaxed border-t border-primary/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
