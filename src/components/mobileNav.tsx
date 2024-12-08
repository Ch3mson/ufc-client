'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

const navLinks = [
    {
      href: "/",
      label: "Home",
    }
  ]

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          type='button'
          aria-label='Toggle menu'
          variant='ghost'
        >
          <span className='sr-only'>Toggle menu</span>
          <MenuIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-40'>
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.label} asChild>
            <Link href={link.href} className='flex items-center gap-4'>
              <div>{link.label}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav