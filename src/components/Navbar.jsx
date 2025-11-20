import React from 'react'
import { Menu, X } from 'lucide-react'

function Navbar({ onOpenMenu }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-white/5">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-zinc-300 hover:text-white hover:bg-white/5 transition" onClick={onOpenMenu} aria-label="Menü öffnen">
            <Menu size={22} />
          </button>
          <div className="text-white tracking-[0.18em] text-sm font-semibold">
            PRODUCAVOK
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#overview" className="text-zinc-300 hover:text-white transition">Overview</a>
          <a href="#kontakt" className="text-zinc-300 hover:text-white transition">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
