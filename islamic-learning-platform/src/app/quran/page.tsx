'use client'

import { useEffect, useState } from 'react'

interface SurahMeta {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: string
}

interface Verse {
  number: number
  arabic: string
  translation: string
  audio: string
}

interface SurahApiResponse {
  number: number
  name: {
    short: string
    transliteration: {
      en: string
    }
    translation: {
      en: string
    }
  }
  numberOfVerses: number
  revelation: {
    en: string
  }
}

interface VerseApiResponse {
  number: {
    inSurah: number
  }
  text: {
    arab: string
  }
  translation: {
    en: string
  }
  audio: {
    primary: string
  }
}

function Spinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default function QuranPage() {
  const [surahs, setSurahs] = useState<SurahMeta[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSurah, setSelectedSurah] = useState<SurahMeta | null>(null)
  const [verses, setVerses] = useState<Verse[]>([])
  const [loadingSurahs, setLoadingSurahs] = useState(true)
  const [loadingVerses, setLoadingVerses] = useState(false)
  const [playingAudio, setPlayingAudio] = useState<number | null>(null)
  const [audioObj, setAudioObj] = useState<HTMLAudioElement | null>(null)

  // Fetch Surah list
  useEffect(() => {
    setLoadingSurahs(true)
    fetch('https://api.quran.gading.dev/surah')
      .then(res => res.json())
      .then(data => {
        setSurahs(data.data.map((s: SurahApiResponse) => ({
          number: s.number,
          name: s.name.short,
          englishName: s.name.transliteration.en,
          englishNameTranslation: s.name.translation.en,
          numberOfAyahs: s.numberOfVerses,
          revelationType: s.revelation.en
        })))
        setLoadingSurahs(false)
      })
  }, [])

  // Fetch verses for selected Surah
  useEffect(() => {
    if (!selectedSurah) return
    setLoadingVerses(true)
    fetch(`https://api.quran.gading.dev/surah/${selectedSurah.number}`)
      .then(res => res.json())
      .then(data => {
        setVerses(data.data.verses.map((v: VerseApiResponse) => ({
          number: v.number.inSurah,
          arabic: v.text.arab,
          translation: v.translation.en,
          audio: v.audio.primary
        })))
        setLoadingVerses(false)
      })
  }, [selectedSurah])

  // Handle audio play/pause
  const handlePlayAudio = (verse: Verse) => {
    if (audioObj) {
      audioObj.pause()
      setAudioObj(null)
      setPlayingAudio(null)
    }
    if (playingAudio !== verse.number) {
      const audio = new Audio(verse.audio)
      setAudioObj(audio)
      setPlayingAudio(verse.number)
      audio.play()
      audio.onended = () => {
        setPlayingAudio(null)
        setAudioObj(null)
      }
    }
  }

  const filteredSurahs = surahs.filter(surah =>
    surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.englishName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-2 md:px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-8 text-green-800">The Holy Quran</h1>
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Surahs..."
          className="w-full p-4 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Surah List */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 text-gray-400">Surahs</h2>
          <div className="space-y-3">
            {loadingSurahs ? (
              <Spinner />
            ) : filteredSurahs.length === 0 ? (
              <div className="text-gray-400">No surahs found.</div>
            ) : filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => setSelectedSurah(surah)}
                className={`w-full p-4 text-left rounded-xl transition-all border flex items-center justify-between group bg-white shadow-sm hover:shadow-md border-gray-200 font-semibold text-lg
                  ${selectedSurah?.number === surah.number
                    ? 'bg-green-700 text-white border-green-700 shadow-lg' : 'hover:bg-green-50 text-green-800'}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base opacity-80">{surah.number}.</span>
                  <span className="font-bold group-hover:text-green-700 transition-colors">{surah.englishName}</span>
                  <span className="ml-2 text-gray-500 font-normal">({surah.name})</span>
                </div>
                <span className="text-base font-medium opacity-80">{surah.numberOfAyahs} verses</span>
              </button>
            ))}
          </div>
        </div>
        {/* Selected Surah */}
        <div className="md:col-span-2">
          {selectedSurah ? (
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold mb-2 text-green-800">
                  {selectedSurah.number}. {selectedSurah.englishName} <span className="text-gray-400 font-normal">({selectedSurah.name})</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">{selectedSurah.englishNameTranslation}</p>
                <div className="flex gap-4 text-base text-gray-500 mb-2">
                  <span className="font-semibold">{selectedSurah.numberOfAyahs} verses</span>
                  <span>•</span>
                  <span className="capitalize">{selectedSurah.revelationType}</span>
                </div>
              </div>
              <div className="space-y-6">
                {loadingVerses ? (
                  <Spinner />
                ) : (
                  verses.map((verse) => (
                    <div
                      key={verse.number}
                      className="bg-white rounded-2xl shadow-lg p-6 flex items-center border border-gray-200 mb-4"
                    >
                      <div className="flex-1">
                        <div className="text-2xl md:text-3xl text-right font-[var(--font-amiri)] text-green-900 mb-1 leading-loose">
                          {verse.arabic}
                        </div>
                        <div className="text-base text-gray-700 mt-1 md:mt-2">
                          {verse.translation}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 ml-6 min-w-[48px]">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow">
                          {verse.number}
                        </span>
                        <button
                          onClick={() => handlePlayAudio(verse)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 hover:bg-green-200 transition-colors border border-green-200 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                          aria-label="Play audio"
                        >
                          {/* Heroicons Play Icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-1.872A1 1 0 0016 13.118v-2.236a1 1 0 00-1.248-.714z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              Select a Surah to view its verses
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 