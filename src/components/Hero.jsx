import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle gradient and glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111114] via-[#0f0f10] to-[#141418]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-[radial-gradient(circle,rgba(255,106,60,0.14)_0%,rgba(255,77,77,0.08)_35%,rgba(15,15,16,0)_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="py-8">
          <p className="text-xs tracking-[0.28em] text-zinc-400">DAM STYLEGUIDE</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Klare Richtlinien für deine Produktbilder.
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-xl">
            Hier findest du konsistente Vorgaben zur Verwendung von digitalen Assets: Formate, Größen, Freigabestatus und Beispiele für die richtige Platzierung in deinen Medien.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-tr from-[#ff4d4d] to-[#ff6a3c] text-white text-sm font-medium shadow-[0_10px_30px_rgba(255,106,60,0.25)] hover:shadow-[0_16px_40px_rgba(255,106,60,0.35)] transition-transform hover:-translate-y-0.5">
              Jetzt entdecken
            </button>
            <a href="#kontakt" className="px-4 py-2.5 rounded-xl bg-white/5 text-zinc-200 text-sm hover:bg-white/10 transition">
              Kontakt
            </a>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* overlay demo cards */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 sm:p-6 gap-4">
            <div className="hidden sm:flex flex-col gap-4">
              <div className="backdrop-blur-xl bg-white/5 ring-1 ring-white/10 rounded-2xl p-3 shadow-xl">
                <div className="w-40 h-24 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg" />
                <div className="mt-2 h-2 w-24 bg-white/20 rounded" />
              </div>
              <div className="backdrop-blur-xl bg-white/5 ring-1 ring-white/10 rounded-2xl p-3 shadow-xl">
                <div className="w-40 h-24 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg" />
                <div className="mt-2 h-2 w-24 bg-white/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
