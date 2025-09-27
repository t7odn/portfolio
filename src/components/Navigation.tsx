'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/portfolio', label: 'Portfolio', icon: '💼' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              My Portfolio
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation