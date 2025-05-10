'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quran', href: '/quran' },
  { name: 'Prayers', href: '/prayers' },
  { name: 'Duas', href: '/duas' },
  { name: 'Islamic Practices', href: '/practices' },
  { name: 'Learn', href: '/learn' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                  <span className="font-[var(--font-amiri)]">ع</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-800 flex items-center justify-center text-white text-xs">
                  <span className="font-[var(--font-amiri)]">ل</span>
                </div>
              </div>
              <Link href="/" className="flex flex-col">
                <span className="text-2xl font-bold text-green-800">Islamic Learning</span>
                <span className="text-xs text-green-600 -mt-1">Knowledge & Guidance</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-2 py-1 text-sm font-medium rounded transition-colors
                    ${pathname === item.href ? 'text-green-800 bg-green-100' : 'text-slate-700 hover:bg-green-50 hover:text-green-700'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 text-base font-medium rounded transition-colors
                  ${pathname === item.href ? 'text-green-800 bg-green-100' : 'text-slate-700 hover:bg-green-50 hover:text-green-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 