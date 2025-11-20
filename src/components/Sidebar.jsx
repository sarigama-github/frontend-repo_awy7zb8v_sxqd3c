import React from 'react'

const categories = [
  { id: 'rechner', label: 'Rechner' },
  { id: 'bildschirm', label: 'Bildschirm' },
  { id: 'maus', label: 'Maus' },
  { id: 'tastatur', label: 'Tastatur' },
  { id: 'zubehör', label: 'Zubehör' },
]

function Sidebar({ active, onSelect }) {
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-6rem)]">
      <div className="w-64 pr-6">
        <div className="text-xs tracking-[0.24em] text-zinc-400 mb-4">KATEGORIEN</div>
        <nav className="space-y-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`w-full text-left px-3 py-2 rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a3c]/50 ${
                active === c.id
                  ? 'bg-white/5 text-white shadow-inner ring-1 ring-[#ff6a3c]/30'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${active === c.id ? 'bg-[#ff6a3c]' : 'bg-zinc-600'}`} />
                {c.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
