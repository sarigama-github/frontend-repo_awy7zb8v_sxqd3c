import React from 'react'
import { X } from 'lucide-react'

function Lightbox({ src, alt, onClose }) {
  if (!src) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-5xl w-[92vw] max-h-[86vh]">
        <button aria-label="Schließen" onClick={onClose} className="absolute -top-10 right-0 text-zinc-300 hover:text-white transition">
          <X size={24} />
        </button>
        <div className="bg-zinc-900/90 ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <img src={src} alt={alt} className="max-h-[86vh] w-full object-contain bg-black/20" />
        </div>
      </div>
    </div>
  )
}

export default Lightbox
