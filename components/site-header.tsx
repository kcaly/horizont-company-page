'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#o-nas', label: 'O nas' },
  { href: '#oferta', label: 'Oferta' },
  { href: '#dlaczego-my', label: 'Dlaczego my' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Horyzont – logo"
            width={120}
            height={90}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" nativeButton={false} render={<a href="tel:+48665671464" />}>
            <Phone className="size-4" aria-hidden="true" />
            +48 601 539 070
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Nawigacja mobilna">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full" nativeButton={false} render={<a href="tel:+48601539070" />}>
                <Phone className="size-4" aria-hidden="true" />
                +48 601 539 070
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
