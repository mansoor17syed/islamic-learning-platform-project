'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Dua, duas } from '@/data/duas'

const categories = [
  'Daily Routine',
  'Food & Drink',
  'Entering/Leaving',
  'Protection',
  'Knowledge',
  'Travel',
  'Other'
]

const categoryIcons: Record<string, React.ReactNode> = {
  'Daily Routine': <i className="fa-regular fa-clock" />,
  'Food & Drink': <i className="fa-solid fa-utensils" />,
  'Entering/Leaving': <i className="fa-solid fa-door-open" />,
  'Protection': <i className="fa-solid fa-shield-halved" />,
  'Knowledge': <i className="fa-solid fa-book" />,
  'Travel': <i className="fa-solid fa-plane" />,
  'Other': <i className="fa-solid fa-ellipsis" />,
};

export default function DuasPage() {
  const [search, setSearch] = useState('')
  const [activeDua, setActiveDua] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setActiveDua(hash)
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  const handleDuaClick = (duaId: string) => {
    setActiveDua(duaId)
    document.getElementById(duaId)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.location.hash = '#' + duaId
  }

  const filteredDuas = duas.filter(dua =>
    dua.title.toLowerCase().includes(search.toLowerCase()) ||
    dua.translation.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="md:w-1/4 mb-8 md:mb-0">
        <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
          <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
            {duas.map(dua => (
              <button
                key={dua.id}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-base mb-1 truncate text-gray-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-100 focus:text-green-800 border border-transparent ${activeDua === dua.id ? 'bg-green-100 text-green-800 border-green-700' : ''}`}
                onClick={() => handleDuaClick(dua.id)}
              >
                {dua.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search duas..."
            className="w-full md:w-1/2 p-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto pr-2">
          {filteredDuas.map(dua => (
            <div key={dua.id} id={dua.id} className="rounded-2xl border border-gray-200 shadow-lg bg-white p-6 transition-transform hover:scale-[1.02] hover:shadow-xl flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-green-800">{dua.title}</span>
                <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 border border-green-200">{dua.category}</span>
              </div>
              <span className="block text-2xl font-[var(--font-amiri)] text-green-900 mb-2 leading-relaxed">{dua.arabic}</span>
              <hr className="my-2 border-gray-200" />
              <span className="block text-sm text-gray-600 italic mb-1">{dua.transliteration}</span>
              <span className="block text-base text-gray-700 mb-2">{dua.translation}</span>
              {dua.reference && <span className="block text-xs text-gray-500">Reference: {dua.reference}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 