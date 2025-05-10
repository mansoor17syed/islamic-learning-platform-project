'use client'

import { useState } from 'react'

interface Practice {
  id: string
  name: string
  category: 'Five Pillars' | 'Daily Practice' | 'Other'
  description: string
  significance: string
  steps?: string[]
  extra?: string
}

const practices: Practice[] = [
  {
    id: 'shahada',
    name: 'Shahada (Testimony of Faith)',
    category: 'Five Pillars',
    description: 'The declaration of faith: "There is no god but Allah, and Muhammad is the Messenger of Allah."',
    significance: 'The Shahada is the foundation of Islam. It affirms the oneness of Allah and the prophethood of Muhammad (peace be upon him).',
    steps: [
      'Recite the testimony sincerely: "Ashhadu an la ilaha illallah, wa ashhadu anna Muhammadan rasulullah."',
      'Believe in it with the heart and affirm it with the tongue.'
    ]
  },
  {
    id: 'salah',
    name: 'Salah (Prayer)',
    category: 'Five Pillars',
    description: 'The five daily prayers are obligatory acts of worship performed at prescribed times throughout the day and night.',
    significance: 'Salah is the second pillar of Islam and the most important act of worship after the Shahada. It connects the believer with Allah and serves as a reminder of His greatness.',
    steps: [
      'Perform Wudu (ablution) before prayer.',
      'Face the Qiblah (direction of the Kaaba in Mecca).',
      'Pray at the prescribed times: Fajr, Dhuhr, Asr, Maghrib, Isha.',
      'Follow the specific movements and recitations for each unit (rak\'ah) of prayer.'
    ],
    extra: 'Friday (Jumu\'ah) prayer is a special congregational prayer held weekly.'
  },
  {
    id: 'zakat',
    name: 'Zakat (Charity)',
    category: 'Five Pillars',
    description: 'An obligatory form of charity, typically 2.5% of one\'s savings, given annually to those in need.',
    significance: 'Zakat purifies wealth, helps the poor, and fosters social solidarity. It is a means of spiritual growth and social justice.'
  },
  {
    id: 'sawm',
    name: 'Sawm (Fasting in Ramadan)',
    category: 'Five Pillars',
    description: 'Fasting from dawn to sunset during the month of Ramadan, abstaining from food, drink, and other invalidators.',
    significance: 'Sawm teaches self-discipline, empathy for the less fortunate, and spiritual growth. It is a time for increased worship and reflection.',
    steps: [
      'Make the intention (niyyah) to fast before dawn.',
      'Abstain from food, drink, and invalidators from dawn (Fajr) to sunset (Maghrib).',
      'Break the fast at sunset with dates and water, followed by the Maghrib prayer.'
    ],
    extra: 'Voluntary fasting outside Ramadan is also highly recommended.'
  },
  {
    id: 'hajj',
    name: 'Hajj (Pilgrimage to Mecca)',
    category: 'Five Pillars',
    description: 'A pilgrimage to the holy city of Mecca, required once in a lifetime for those who are physically and financially able.',
    significance: 'Hajj is a profound act of worship, symbolizing unity, humility, and submission to Allah. It commemorates the actions of Prophet Ibrahim (Abraham) and his family.',
    steps: [
      'Make the intention (niyyah) for Hajj.',
      'Enter the state of Ihram and recite the Talbiyah.',
      'Perform Tawaf (circumambulation) around the Kaaba.',
      'Walk between Safa and Marwah (Sa\'i).',
      'Stand at Arafat (Wuquf).',
      'Stay overnight at Muzdalifah and Mina.',
      'Perform the symbolic stoning of the Jamarat.',
      'Offer a sacrifice (Qurbani).',
      'Shave or trim the hair.',
      'Perform the farewell Tawaf.'
    ],
    extra: 'Umrah is a lesser pilgrimage that can be performed at any time of the year.'
  },
  // Daily Practices
  {
    id: 'wudu',
    name: 'Wudu (Ablution)',
    category: 'Daily Practice',
    description: 'A ritual washing performed before prayer and certain acts of worship.',
    significance: 'Wudu purifies the body and mind, preparing the believer for worship.',
    steps: [
      'Make the intention (niyyah) for wudu.',
      'Wash the hands, mouth, nose, face, arms, head, ears, and feet in the prescribed order.',
      'Ensure water reaches all required parts.'
    ]
  },
  {
    id: 'sunnah-prayers',
    name: 'Sunnah Prayers',
    category: 'Daily Practice',
    description: 'Voluntary prayers performed in addition to the five obligatory prayers.',
    significance: 'Sunnah prayers bring extra reward and help make up for deficiencies in obligatory prayers.'
  },
  {
    id: 'dhikr',
    name: 'Dhikr (Remembrance of Allah)',
    category: 'Daily Practice',
    description: 'Reciting phrases and supplications to remember and glorify Allah throughout the day.',
    significance: 'Dhikr brings peace to the heart, increases faith, and draws one closer to Allah.'
  },
  {
    id: 'charity',
    name: 'Charity (Sadaqah)',
    category: 'Daily Practice',
    description: 'Voluntary giving to those in need, beyond the obligatory Zakat.',
    significance: 'Charity purifies wealth, helps the needy, and earns great reward from Allah.'
  },
  {
    id: 'fasting-voluntary',
    name: 'Voluntary Fasting',
    category: 'Daily Practice',
    description: 'Fasting on days outside Ramadan, such as Mondays, Thursdays, and the 13th, 14th, and 15th of each lunar month.',
    significance: 'Voluntary fasting brings extra reward and spiritual benefits.'
  },
  {
    id: 'friday-prayer',
    name: 'Friday (Jumu\'ah) Prayer',
    category: 'Daily Practice',
    description: 'A weekly congregational prayer held every Friday, replacing the Dhuhr prayer.',
    significance: 'Jumu\'ah is a special day of gathering, reflection, and increased blessings.'
  },
  {
    id: 'quran-recitation',
    name: 'Quran Recitation',
    category: 'Daily Practice',
    description: 'Reading and reflecting on the Quran regularly.',
    significance: 'Reciting the Quran brings guidance, peace, and reward.'
  },
  {
    id: 'dua',
    name: 'Dua (Supplication)',
    category: 'Daily Practice',
    description: 'Personal prayers and requests made to Allah at any time.',
    significance: 'Dua is a powerful means of seeking help, forgiveness, and blessings from Allah.'
  },
  {
    id: 'good-manners',
    name: 'Good Manners (Akhlaq)',
    category: 'Daily Practice',
    description: 'Exhibiting kindness, honesty, patience, and respect in daily life.',
    significance: 'Good manners are highly emphasized in Islam and are a sign of true faith.'
  },
  {
    id: 'helping-others',
    name: 'Helping Others',
    category: 'Daily Practice',
    description: 'Assisting family, neighbors, and the community in various ways.',
    significance: 'Helping others strengthens community bonds and earns reward from Allah.'
  }
]

export default function PracticesPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const categories = ['Five Pillars', 'Daily Practice']

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-green-800">Islamic Practices</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Explore the core practices of Islam, including the Five Pillars and important daily acts of worship. Click on each practice to learn more about its meaning, significance, and how to perform it.</p>
      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{cat}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.filter(p => p.category === cat).map(practice => (
              <div
                key={practice.id}
                className={`rounded-xl border border-gray-200 shadow-sm bg-white transition-all cursor-pointer hover:shadow-lg ${selected === practice.id ? 'ring-2 ring-green-400' : ''}`}
                onClick={() => setSelected(selected === practice.id ? null : practice.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-green-700">{practice.name}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 border border-green-100">{practice.category}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{practice.description}</p>
                  <p className="mt-2 text-sm text-gray-500 italic">{practice.significance}</p>
                  {selected === practice.id && (
                    <div className="mt-4">
                      {practice.steps && (
                        <div className="mb-2">
                          <h4 className="font-semibold text-gray-800 mb-1">How to Perform:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            {practice.steps.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {practice.extra && (
                        <div className="mt-2 text-sm text-green-700">{practice.extra}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 