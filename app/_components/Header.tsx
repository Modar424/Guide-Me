"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from 'next/image';

function Header() {
    const { user } = useUser()
    const [mobileOpen, setMobileOpen] = useState(false)
    const navLinks = [
        { href: '/marketplace', label: "Marketplace" },
        { href: '/solutions', label: "Solutions" },
        { href: '/enterprise', label: "Enterprise" },
        { href: '/resources', label: "Resources" },
    ]
    const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-[#FAF6F1] border-b border-[#D4B896] shadow-sm sticky top-0 z-50 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link href='/'>
                <Image src="/logo.svg" alt="Guide Logo" width={80} height={67} priority />
            </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 group ${
                    pathname === link.href
                        ? "text-[#5C3D1E] bg-[#8B5E3C]/10"
                        : "text-[#7A5230] hover:text-[#3B2107] hover:bg-[#8B5E3C]/10"
                }`}
            >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#8B5E3C] rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`} />
            </Link>
            ))}
        </div>

        {/* Sign In */}
        <div className="flex items-center gap-4">
            {!user ? (
                <SignInButton mode="modal">
                    <button className="relative px-6 py-2 bg-[#8B5E3C] text-[#FAF6F1] text-sm font-semibold rounded-lg overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
                        <span className="relative z-10">Sign In</span>
                        <span className="absolute inset-0 bg-[#5C3D1E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
