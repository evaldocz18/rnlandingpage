"use client";

import Link from "next/link";
import { Laptop, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Orçamento" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Laptop className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">Repare Notebooks</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" variant="default">
            <Link href="https://wa.me/5541998135875?text=Olá, gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mx-auto mt-8 flex flex-col gap-6">
                <Link href="/" className="mb-4 flex items-center space-x-2" onClick={handleLinkClick}>
                  <Laptop className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">Repare Notebooks</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      handleLinkClick();
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4">
                  <Link href="https://wa.me/5541998135875?text=Olá, gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
