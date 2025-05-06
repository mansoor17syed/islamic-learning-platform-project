'use client'

import { useState } from 'react'

interface Recitation {
  arabic: string
  transliteration: string
  translation: string
}

interface PrayerDetail {
  id: string
  name: string
  time: string
  rakahs: string
  description: string
  steps: string[]
  recitations: { [position: string]: Recitation[] }
  notes?: string
  mistakes?: string[]
  sunnah?: string
}

const prayers: PrayerDetail[] = [
  {
    id: 'fajr',
    name: 'Fajr',
    time: 'Dawn to sunrise',
    rakahs: '2 (obligatory)',
    description: 'The first prayer of the day, performed at dawn.',
    steps: [
      "Make intention (niyyah) for Fajr prayer.",
      "Pray 2 rak'ahs (units) as described in the general guide below."
    ],
    recitations: {
      standing: [
        {
          arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
          transliteration: "Subhanaka Allahumma wa bihamdika wa tabaarakasmuka wa ta'ala jadduka wa la ilaha ghayruk",
          translation: 'Glory is to You, O Allah, and praise; blessed is Your Name, and exalted is Your Majesty; there is no god but You.'
        },
        {
          arabic: 'الفاتحة',
          transliteration: 'Al-Fatiha',
          translation: 'The Opening (recite Surah Al-Fatiha)'
        },
        {
          arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
          transliteration: 'Qul huwa Allahu ahad',
          translation: 'Say: He is Allah, the One (recite a short surah or verses)'
        }
      ],
      bowing: [
        {
          arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
          transliteration: 'Subhana Rabbiyal Adheem',
          translation: 'Glory is to my Lord, the Most Great.'
        }
      ],
      prostration: [
        {
          arabic: 'سُبْحَانَ رَبِّيَ الأَعْلَى',
          transliteration: "Subhana Rabbiyal A'la",
          translation: 'Glory is to my Lord, the Most High.'
        }
      ],
      sitting: [
        {
          arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ...',
          transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat...',
          translation: 'All greetings, prayers, and good things are for Allah... (recite Tashahhud)'
        }
      ]
    },
    notes: "Fajr is recited aloud. Sunnah before Fajr is highly recommended (2 rak'ahs).",
    mistakes: [
      "Missing the prayer time window.",
      "Not reciting Al-Fatiha in each rak'ah."
    ],
    sunnah: "2 rak'ahs Sunnah before Fajr."
  },
  // Add Dhuhr, Asr, Maghrib, Isha in similar detail...
]

const generalGuide = [
  {
    position: 'Standing (Qiyam)',
    details: [
      'Make intention (niyyah) for the specific prayer.',
      'Raise hands and say Takbir: "Allahu Akbar".',
      'Recite opening supplication, Surah Al-Fatiha, and another surah or verses.'
    ]
  },
  {
    position: "Bowing (Ruku')",
    details: [
      'Bend at the waist, keeping back and head level.',
      'Say: "Subhana Rabbiyal Adheem" (Glory is to my Lord, the Most Great).' 
    ]
  },
  {
    position: "Standing after Ruku'",
    details: [
      "Stand up straight and say: 'Sami'a Allahu liman hamidah, Rabbana lakal hamd'."
    ]
  },
  {
    position: 'Prostration (Sujud)',
    details: [
      "Go to the ground, touching forehead, nose, palms, knees, and toes.",
      "Say: 'Subhana Rabbiyal A'la' (Glory is to my Lord, the Most High)."
    ]
  },
  {
    position: 'Sitting (Jalsa)',
    details: [
      'Sit between the two prostrations and recite: "Rabbighfir li, warhamni..." (O my Lord, forgive me, have mercy on me...)'
    ]
  },
  {
    position: 'Final Sitting (Tashahhud)',
    details: [
      'After the last prostration, sit and recite the Tashahhud and Salat Alan-Nabi (salutations upon the Prophet).',
      'End the prayer with Tasleem: "Assalamu alaikum wa rahmatullah" to the right and left.'
    ]
  }
]

const invalidators = [
  'Talking or unnecessary movement.',
  'Eating or drinking.',
  'Losing wudu (ablution).',
  'Turning away from the Qiblah.',
  'Missing a pillar of prayer intentionally.'
]

const extras = [
  {
    title: 'Sunnah and Nafl Prayers',
    content: 'Voluntary prayers before/after obligatory ones, and at other times, bring extra reward and help make up for deficiencies.'
  },
  {
    title: "Friday (Jumu'ah) Prayer",
    content: 'A special congregational prayer held every Friday, replacing Dhuhr. Includes a sermon (khutbah) and is highly emphasized.'
  },
  {
    title: 'Missed Prayers (Qada)',
    content: 'Missed obligatory prayers should be made up as soon as possible.'
  },
  {
    title: 'Tips for Khushu\' (Focus)',
    content: 'Pray on time, understand what you recite, minimize distractions, and remember you are standing before Allah.'
  }
]

const fullSalahGuide = [
  {
    position: '1. Intention (Niyyah)',
    details: [
      'Formulate the intention in your heart for the specific prayer you are about to perform.'
    ]
  },
  {
    position: '2. Takbir al-Ihram (Opening Takbir)',
    details: [
      'Raise both hands and say:',
      {
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest.'
      }
    ]
  },
  {
    position: '3. Standing (Qiyam)',
    details: [
      'Recite the opening supplication (optional):',
      {
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ...',
        transliteration: 'Subhanaka Allahumma wa bihamdika...',
        translation: 'Glory is to You, O Allah, and praise; blessed is Your Name...'
      },
      'Recite Surah Al-Fatiha:',
      {
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ...',
        transliteration: 'Alhamdu lillahi rabbil alameen ...',
        translation: 'All praise is due to Allah, Lord of the worlds ...'
      },
      'Recite another surah or verses (e.g., Al-Ikhlas):',
      {
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        transliteration: 'Qul huwa Allahu ahad',
        translation: 'Say: He is Allah, the One.'
      }
    ]
  },
  {
    position: '4. Bowing (Ruku)',
    details: [
      'Bend at the waist, keeping back and head level.',
      'Say three times:',
      {
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        transliteration: 'Subhana Rabbiyal Adheem',
        translation: 'Glory is to my Lord, the Most Great.'
      }
    ]
  },
  {
    position: '5. Standing after Ruku',
    details: [
      'Stand up straight and say:',
      {
        arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
        transliteration: 'Samia Allahu liman hamidah',
        translation: 'Allah hears the one who praises Him.'
      },
      'Then say:',
      {
        arabic: 'رَبَّنَا لَكَ الْحَمْدُ',
        transliteration: 'Rabbana lakal hamd',
        translation: 'Our Lord, to You is due all praise.'
      }
    ]
  },
  {
    position: '6. Prostration (Sujud)',
    details: [
      'Go to the ground, touching forehead, nose, palms, knees, and toes.',
      'Say three times:',
      {
        arabic: 'سُبْحَانَ رَبِّيَ الأَعْلَى',
        transliteration: "Subhana Rabbiyal A'la",
        translation: 'Glory is to my Lord, the Most High.'
      }
    ]
  },
  {
    position: '7. Sitting between the two prostrations (Jalsa)',
    details: [
      'Sit and say:',
      {
        arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي',
        transliteration: 'Rabbighfir li warhamni',
        translation: 'My Lord, forgive me and have mercy on me.'
      }
    ]
  },
  {
    position: '8. Second Prostration (Sujud)',
    details: [
      'Repeat the prostration as before.'
    ]
  },
  {
    position: '9. Final Sitting (Tashahhud)',
    details: [
      'After the last prostration, sit and recite the Tashahhud:',
      {
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ...',
        transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat...',
        translation: 'All greetings, prayers, and good things are for Allah...'
      },
      'Recite Salat Alan-Nabi (salutations upon the Prophet):',
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ...',
        transliteration: 'Allahumma salli ala Muhammad...',
        translation: 'O Allah, send prayers upon Muhammad...'
      }
    ]
  },
  {
    position: '10. Ending the Prayer (Tasleem)',
    details: [
      'Turn your head to the right and say:',
      {
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
        transliteration: 'Assalamu alaikum wa rahmatullah',
        translation: 'Peace and mercy of Allah be upon you.'
      },
      'Repeat to the left.'
    ]
  }
]

export default function PrayersPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [showGuide, setShowGuide] = useState(false)
  const [showInvalidators, setShowInvalidators] = useState(false)
  const [showExtras, setShowExtras] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-green-800">Prayers (Salah)</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Learn how to perform the five daily prayers, what to recite, common mistakes, and tips for a focused and accepted Salah.</p>
      <div className="mb-8">
        <button className="mr-4 px-4 py-2 bg-green-100 rounded hover:bg-green-200" onClick={() => setShowGuide(!showGuide)}>
          {showGuide ? 'Hide' : 'Show'} General Salah Guide
        </button>
        <button className="px-4 py-2 bg-green-100 rounded hover:bg-green-200" onClick={() => setShowInvalidators(!showInvalidators)}>
          {showInvalidators ? 'Hide' : 'Show'} What Invalidates Prayer
        </button>
      </div>
      {showGuide && (
        <div className="mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">General Salah Guide</h2>
          {generalGuide.map((step, idx) => (
            <div key={step.position} className="mb-4">
              <h3 className="text-lg font-semibold text-green-800">{idx + 1}. {step.position}</h3>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                {step.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      {showInvalidators && (
        <div className="mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-700">What Invalidates the Prayer</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            {invalidators.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4 text-green-700">How to Perform a Full Prayer (Salah)</h2>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {fullSalahGuide.map((step, idx) => (
          <div key={step.position} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">{step.position}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {step.details.map((d, i) =>
                typeof d === 'string' ? (
                  <li key={i}>{d}</li>
                ) : (
                  <li key={i} className="mb-2">
                    <span className="block text-lg font-[var(--font-amiri)] text-gray-900">{d.arabic}</span>
                    <span className="block text-sm text-gray-600 italic">{d.transliteration}</span>
                    <span className="block text-sm text-gray-700">{d.translation}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">The Five Daily Prayers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {prayers.map(prayer => (
          <div
            key={prayer.id}
            className={`rounded-xl border border-gray-200 shadow-sm bg-white transition-all cursor-pointer hover:shadow-lg ${selected === prayer.id ? 'ring-2 ring-green-400' : ''}`}
            onClick={() => setSelected(selected === prayer.id ? null : prayer.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-green-700">{prayer.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 border border-green-100">{prayer.time}</span>
              </div>
              <p className="mt-2 text-gray-700">{prayer.description}</p>
              <p className="mt-2 text-sm text-gray-500 italic">Rakahs: {prayer.rakahs}</p>
              {selected === prayer.id && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-1">How to Perform:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 mb-2">
                    {prayer.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                  </ol>
                  <h4 className="font-semibold text-gray-800 mb-1">What to Recite:</h4>
                  {Object.entries(prayer.recitations).map(([pos, recs]) => (
                    <div key={pos} className="mb-2">
                      <span className="font-semibold text-green-700">{pos.charAt(0).toUpperCase() + pos.slice(1)}:</span>
                      <ul className="ml-4 mt-1">
                        {recs.map((rec, i) => (
                          <li key={i} className="mb-1">
                            <span className="block text-lg font-[var(--font-amiri)] text-gray-900">{rec.arabic}</span>
                            <span className="block text-sm text-gray-600 italic">{rec.transliteration}</span>
                            <span className="block text-sm text-gray-700">{rec.translation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {prayer.notes && <div className="mt-2 text-green-700">{prayer.notes}</div>}
                  {prayer.mistakes && (
                    <div className="mt-2">
                      <h4 className="font-semibold text-red-700 mb-1">Common Mistakes:</h4>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        {prayer.mistakes.map((m, idx) => <li key={idx}>{m}</li>)}
                      </ul>
                    </div>
                  )}
                  {prayer.sunnah && <div className="mt-2 text-green-700">Sunnah: {prayer.sunnah}</div>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">More About Salah</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {extras.map(extra => (
          <div key={extra.title} className="rounded-xl border border-gray-200 shadow-sm bg-white p-6">
            <h3 className="text-lg font-semibold text-green-700 mb-2">{extra.title}</h3>
            <p className="text-gray-700">{extra.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 