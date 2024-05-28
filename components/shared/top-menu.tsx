'use client'

import * as React from 'react'
import ThemeDropdown from './theme-dropdown'
import { UserButton } from '@clerk/nextjs'

export default function TopMenu() {
  return (
    <header>
      <nav className="mt-8 flex justify-between items-center">
        <h3 className="text-4xl font-bold">trackIT</h3>
        <div className="flex item-center gap-x-4">
          <ThemeDropdown />
          <UserButton />
        </div>
      </nav>
    </header>
  )
}
