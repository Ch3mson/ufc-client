"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    href: "https://github.com/Ch3mson/ufc-predictor",
    label: "Codebase",
  },
]

export default function Navbar() {

  const pathName = usePathname();

  return (
    <nav>
      <ul className='hidden gap-2 md:flex'>
        {navLinks.map((link) => {
          const isActive = link.href === pathName

          return (
            <li key={link.label} className='relative flex h-[60px] items-center justify-center'>
              <Link
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
              {isActive ? (
              <>
                <div className='bg-nav-link-indicator dark:bg-nav-link-indicator-dark absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2' />
                <div className='absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur dark:bg-[rgb(223_29_72)]' />
              </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}