import React from 'react'

function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-white/5">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-zinc-500">
        <div>© PRODUCAVOK</div>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-300 transition">Impressum</a>
          <a href="#" className="hover:text-zinc-300 transition">Datenschutz</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
