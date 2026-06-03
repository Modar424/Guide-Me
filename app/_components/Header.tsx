"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function Header() {
    const { user } = useUser()
    const navLinks = [
        { href: '/', label: "Home" },
        { href: '/contact', label: "Contact" },
        { href: '/about', label: "About" }
    ]
    const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div>
            <Link href='/'>
                <span className="text-2xl font-bold text-blue-600">Guide</span>
            </Link>
        </div>
        <div className="flex gap-6">
            {navLinks.map((link) => (
            <Link 
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gray-300 ${
                    pathname === link.href ? "text-primary" :
                    "text-muted-foreground"
                }`}
            >
                {link.label}
            </Link>
            ))}
        </div>
        <div className="flex items-center gap-4">
            {!user ? (
                <SignInButton mode="modal">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Sign In
                    </button>
                </SignInButton>
            ) : (
                <UserButton />
            )}
        </div>
    </nav>
  )
}

export default Header
