'use client'

interface VerseProps {
  number: number
  arabic: string
  translation: string
  tafsir?: string
}

export default function VerseDisplay({ number, arabic, translation, tafsir }: VerseProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-right text-2xl font-[var(--font-amiri)] mb-4 leading-loose">
            {arabic}
          </div>
          <div className="text-gray-700 mb-4">
            {translation}
          </div>
          {tafsir && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Tafsir</h4>
              <p className="text-sm text-gray-600">{tafsir}</p>
            </div>
          )}
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            {number}
          </span>
        </div>
      </div>
    </div>
  )
} 