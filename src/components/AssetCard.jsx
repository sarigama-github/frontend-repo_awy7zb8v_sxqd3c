import React from 'react'

function AssetCard({ asset, reversed = false, onPreview }) {
  return (
    <div className={`group grid grid-cols-1 md:grid-cols-5 gap-6 items-center rounded-2xl p-4 sm:p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition shadow-sm hover:shadow-xl hover:-translate-y-0.5 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="md:col-span-2">
        <div className="relative aspect-[4/3] w-full max-h-[260px] overflow-hidden rounded-xl bg-zinc-800/60 ring-1 ring-white/10">
          <img
            src={asset.image}
            alt={asset.title}
            className="h-full w-full object-contain"
            onClick={() => onPreview(asset.image, asset.title)}
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <h3 className="text-white text-xl font-semibold">{asset.title}</h3>
        <p className="text-zinc-300 mt-2 leading-relaxed max-w-prose">
          {asset.description}
        </p>
        <div className="mt-3 text-xs text-zinc-500">
          Kategorie: {asset.category} · Status: {asset.status}
        </div>
      </div>
    </div>
  )
}

export default AssetCard
