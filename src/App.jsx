import React, { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import AssetCard from './components/AssetCard'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'

const CATEGORY_LIST = [
  { id: 'rechner', label: 'Rechner' },
  { id: 'bildschirm', label: 'Bildschirm' },
  { id: 'maus', label: 'Maus' },
  { id: 'tastatur', label: 'Tastatur' },
  { id: 'zubehör', label: 'Zubehör' },
]

const SAMPLE_ASSETS = [
  // Bildschirm
  {
    id: 'scr-1',
    category: 'Bildschirm',
    title: 'Acer Hz180',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    description:
      'Neutraler Winkel, leichtes 3/4-Frontprofil. Schatten weich, Hintergrund in dunklem Grau (#121216). Logoplatzierung oben rechts frei lassen.',
  },
  {
    id: 'scr-2',
    category: 'Bildschirm',
    title: 'Dell Ultrasharp 27',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    description:
      'Kontrast moderat, keine Spiegelungen. Produkt mittig ausgerichtet, Mindestabstand zu Rändern: 48px. Keine farbigen Hintergründe.',
  },
  {
    id: 'scr-3',
    category: 'Bildschirm',
    title: 'BenQ ColorPro',
    status: 'In Prüfung',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1400&auto=format&fit=crop',
    description:
      'Bitte Farbwiedergabe beachten: sRGB-Profil, kein künstliches Color Grading. Kabelmanagement optional, aber sauber.',
  },
  // Rechner
  {
    id: 'pc-1',
    category: 'Rechner',
    title: 'Tower Pro X',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    description:
      'Leicht seitliche Ansicht. Betonung auf Lüftungsgitter und Port-Anordnung. Hintergrund dunkel und ruhig, Lichtspot minimal.',
  },
  {
    id: 'pc-2',
    category: 'Rechner',
    title: 'Mini ITX Nova',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop',
    description:
      'Kompaktes Format, skaliere so, dass Kanten nicht angeschnitten sind. Objekt vollständig sichtbar (object-fit: contain).',
  },
  // Maus
  {
    id: 'mouse-1',
    category: 'Maus',
    title: 'Glide MX',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1666066017054-17f7c505c556?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGlkZSUyME1YfGVufDB8MHx8fDE3NjM2MzM0OTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Obere Perspektive oder 3/4-Ansicht. Keine harten Spiegelungen. Schlagschatten weich und subtil, max. 20% Deckkraft.',
  },
  {
    id: 'mouse-2',
    category: 'Maus',
    title: 'Arc Silent',
    status: 'In Produktion',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1400&auto=format&fit=crop',
    description:
      'Satin-Finish betonen, Farbton neutral halten. Markenfläche unverdeckt. Mindestbreite im Layout: 320px.',
  },
  // Tastatur
  {
    id: 'kb-1',
    category: 'Tastatur',
    title: 'Keywave 80',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1400&auto=format&fit=crop',
    description:
      'Leichte Schräglage, Tastenbeschriftung klar lesbar. RGB-Licht deaktivieren oder sehr dezent halten.',
  },
  {
    id: 'kb-2',
    category: 'Tastatur',
    title: 'Mono Board',
    status: 'In Prüfung',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop',
    description:
      'Kompakte Darstellung, großzügiger Negativraum. Keine starken Vignetten oder künstliche Lens Flares.',
  },
  // Zubehör
  {
    id: 'acc-1',
    category: 'Zubehör',
    title: 'USB-C Dock',
    status: 'Freigegeben',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    description:
      'Ports frontal sichtbar. Hintergrund ruhig, leichte Spiegelung am Boden erlaubt. Maßstab konsistent zu anderen Produkten.',
  },
]

function App() {
  const [active, setActive] = useState('bildschirm')
  const [lightbox, setLightbox] = useState({ src: null, alt: '' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const assets = useMemo(() => {
    const label = CATEGORY_LIST.find((c) => c.id === active)?.label || ''
    return SAMPLE_ASSETS.filter((a) => a.category.toLowerCase() === label.toLowerCase())
  }, [active])

  const activeLabel = CATEGORY_LIST.find((c) => c.id === active)?.label

  const handlePreview = (src, alt) => setLightbox({ src, alt })

  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-200">
      <div className="absolute inset-0 bg-[radial-gradient(80rem_50rem_at_80%_-10%,rgba(255,106,60,0.10),transparent_60%)]" />

      <Navbar onOpenMenu={() => setMobileMenuOpen(true)} />
      <Hero />

      {/* Categories scroll (tablet) */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#0f0f10]/80 backdrop-blur border-y border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 overflow-x-auto py-3">
          <div className="flex gap-2">
            {CATEGORY_LIST.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-3 py-2 rounded-xl whitespace-nowrap text-sm transition ${
                  active === c.id
                    ? 'bg-white/10 text-white ring-1 ring-[#ff6a3c]/30'
                    : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-8">
        <Sidebar active={active} onSelect={setActive} />

        <section className="pt-6">
          <div id="overview" className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">{activeLabel}</h2>
            <p className="text-zinc-400 mt-1">Richtlinien zur Verwendung von Assets in der Kategorie „{activeLabel}“.</p>
          </div>

          <div className="space-y-6">
            {assets.map((asset, idx) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                reversed={idx % 2 === 1}
                onPreview={handlePreview}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox({ src: null, alt: '' })} />

      {/* Mobile full-screen categories menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative h-full w-full flex items-center justify-center p-8">
            <div className="w-full max-w-sm rounded-2xl bg-zinc-900/90 ring-1 ring-white/10 p-6 space-y-2">
              <div className="text-xs tracking-[0.24em] text-zinc-400">KATEGORIEN</div>
              {CATEGORY_LIST.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActive(c.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 py-3 rounded-xl transition ${
                    active === c.id
                      ? 'bg-white/5 text-white ring-1 ring-[#ff6a3c]/30'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
