'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useUser } from '@clerk/nextjs'

const authorizedEmails = [
  "shaikhmubin572@gmail.com",
  "shaikhmubin5502@gmail.com",
  "thecreativesurat@gmail.com",
];

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { user } = useUser();
  const [navItems, setNavItems] = useState([
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]);

  useEffect(() => {
    const userEmail = user?.emailAddresses[0]?.emailAddress ?? '';
    if (authorizedEmails.includes(userEmail)) {
      setNavItems(prevItems => [
        { href: '/', label: 'Home' },
        { href: '/admin', label: 'Admin' },
        ...prevItems.slice(1),
      ]);
    }
  }, [user]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}