'use client'

import { useState, useEffect } from 'react'

interface Lesson {
  id: string
  title: string
  category: string
  summary: string
  content: string
  keyPoints: string[]
  links?: { label: string; url: string }[]
}

const categories = [
  'Beliefs (Aqidah)',
  'Worship (Ibadah)',
  'Prophets & Messengers',
  'Islamic History',
  'Quranic Studies',
  'Hadith Studies',
  'Islamic Manners & Character',
  'Family & Social Life',
  'Contemporary Issues',
  'Glossary of Islamic Terms',
  'Fiqh & Islamic Law',
  'Islamic Ethics',
  'Islamic Economics',
  'Islamic Art & Architecture',
  'Islamic Sciences',
  'Islamic Psychology',
  'Islamic Education',
  'Islamic Leadership',
  'Islamic Social Justice',
  'Islamic Environmental Ethics'
]

const lessons: Lesson[] = [
  // Beliefs
  {
    id: 'tawheed',
    title: 'Tawheed: The Oneness of Allah',
    category: 'Beliefs (Aqidah)',
    summary: 'Understanding the concept of monotheism in Islam and its importance.',
    content: `**Introduction**
Tawheed is the foundation of Islam, meaning to affirm the Oneness of Allah in His Lordship, Worship, and Names & Attributes. It is the first part of the Shahada and the basis of all Islamic belief and practice.

**Main Concepts**
- *Tawheed al-Rububiyyah*: Affirming that Allah alone is the Creator, Sustainer, and Controller of the universe.
- *Tawheed al-Uluhiyyah*: Directing all acts of worship (prayer, supplication, sacrifice, etc.) to Allah alone.
- *Tawheed al-Asma wa Sifat*: Believing in Allah's names and attributes as described in the Quran and Sunnah, without distortion or denial.

**Quranic Evidence**
- "Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent." (Quran 112:1-4)
- "Your God is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful." (Quran 2:163)

**Hadith Reference**
- The Prophet Muhammad (peace be upon him) said: "Whoever dies while knowing that there is no god but Allah will enter Paradise." (Sahih Muslim)

**Practical Tips**
- Begin every act with the intention to please Allah alone.
- Avoid all forms of shirk (associating partners with Allah), whether major or minor.
- Learn and reflect on the meanings of Allah's names and attributes.

**Key Takeaways**
- Tawheed is the essence of Islam and the key to salvation.
- It shapes a Muslim's worldview, worship, and character.
- Every act of worship must be directed to Allah alone.
`,
    keyPoints: [
      'Allah is the only Creator, Sustainer, and Ruler of the universe.',
      'Worship is due to Allah alone.',
      "No one shares in Allah's attributes or divinity."
    ]
  },
  {
    id: 'angels',
    title: 'Belief in Angels',
    category: 'Beliefs (Aqidah)',
    summary: 'The role and nature of angels in Islam.',
    content: `Angels are created from light, do not have free will, and always obey Allah. They have various roles, such as delivering revelation, recording deeds, and taking souls at death. Notable angels include Jibreel (Gabriel), Mikaeel (Michael), Israfeel, and Malak al-Mawt (Angel of Death).`,
    keyPoints: [
      'Angels are honored servants of Allah.',
      'They are invisible to humans but play vital roles in the universe.',
      'Belief in angels is a pillar of faith.'
    ]
  },
  // Worship
  {
    id: 'salah-lesson',
    title: 'The Five Daily Prayers',
    category: 'Worship (Ibadah)',
    summary: 'A guide to the five daily prayers, their times, and significance.',
    content: `Muslims are required to pray five times a day: Fajr, Dhuhr, Asr, Maghrib, and Isha. Each prayer has a specific time window and number of units (rak'ahs). Prayer is a direct link between the worshipper and Allah.`,
    keyPoints: [
      'Prayer is the second pillar of Islam.',
      'It is performed facing the Kaaba in Mecca.',
      'Maintains spiritual discipline and connection with Allah.'
    ]
  },
  {
    id: 'fasting-lesson',
    title: 'Fasting in Ramadan',
    category: 'Worship (Ibadah)',
    summary: 'The rules, purpose, and spiritual benefits of fasting during Ramadan.',
    content: `Fasting in Ramadan is obligatory for all adult Muslims. It involves abstaining from food, drink, and other invalidators from dawn to sunset. Fasting teaches self-control, empathy, and increases spiritual awareness.`,
    keyPoints: [
      'Fasting is the fourth pillar of Islam.',
      'It is a means of spiritual purification.',
      'Special night prayers (Taraweeh) are performed in Ramadan.'
    ]
  },
  // Prophets & Messengers
  {
    id: 'prophets',
    title: 'Prophets and Messengers in Islam',
    category: 'Prophets & Messengers',
    summary: 'Who are the prophets and messengers, and what is their role?',
    content: `Allah sent many prophets and messengers to guide humanity. All prophets called to the worship of Allah alone. The final prophet is Muhammad (peace be upon him). Notable prophets include Adam, Noah, Abraham, Moses, Jesus, and Muhammad.`,
    keyPoints: [
      'Prophets are chosen by Allah to deliver His message.',
      'All prophets preached monotheism.',
      'Muslims believe in all prophets without distinction.'
    ]
  },
  // Islamic History
  {
    id: 'hijrah',
    title: 'The Hijrah: Migration to Medina',
    category: 'Islamic History',
    summary: "The significance of the Prophet's migration from Mecca to Medina.",
    content: `The Hijrah marks the beginning of the Islamic calendar. It was a turning point for the Muslim community, leading to the establishment of the first Islamic state in Medina.`,
    keyPoints: [
      'Hijrah is a symbol of sacrifice and trust in Allah.',
      'It marks the start of the Islamic calendar (622 CE).',
      'Medina became the center of the growing Muslim community.'
    ]
  },
  // Quranic Studies
  {
    id: 'quran-revelation',
    title: 'The Revelation of the Quran',
    category: 'Quranic Studies',
    summary: 'How the Quran was revealed and preserved.',
    content: `The Quran was revealed to Prophet Muhammad (peace be upon him) over 23 years through Angel Jibreel. It is preserved in its original language and memorized by millions.`,
    keyPoints: [
      'The Quran is the literal word of Allah.',
      'It was revealed gradually in response to events.',
      'The Quran is unchanged since its revelation.'
    ]
  },
  // Hadith Studies
  {
    id: 'hadith',
    title: 'What is Hadith?',
    category: 'Hadith Studies',
    summary: 'Understanding the sayings and actions of the Prophet Muhammad.',
    content: `Hadith are records of the sayings, actions, and approvals of Prophet Muhammad (peace be upon him). They are a primary source of Islamic law and guidance, second only to the Quran.`,
    keyPoints: [
      'Hadith explain and complement the Quran.',
      'They are classified by authenticity (Sahih, Hasan, Daif).',
      'Major collections include Sahih Bukhari and Sahih Muslim.'
    ]
  },
  // Manners & Character
  {
    id: 'manners',
    title: 'Islamic Manners and Character',
    category: 'Islamic Manners & Character',
    summary: 'The importance of good character and manners in Islam.',
    content: `Islam places great emphasis on good manners, honesty, patience, humility, and respect for others. The Prophet Muhammad (peace be upon him) said: "The best among you are those who have the best manners and character."`,
    keyPoints: [
      'Good character is a sign of true faith.',
      'Kindness, honesty, and patience are highly valued.',
      'Muslims are encouraged to be role models in society.'
    ]
  },
  // Family & Social Life
  {
    id: 'family',
    title: 'Family in Islam',
    category: 'Family & Social Life',
    summary: 'The role and rights of family members in Islam.',
    content: `Family is the cornerstone of Islamic society. Islam emphasizes the rights of parents, children, and relatives, and encourages strong family bonds.`,
    keyPoints: [
      'Obedience and kindness to parents is highly emphasized.',
      'Marriage is a recommended Sunnah.',
      'Maintaining family ties is a source of blessing.'
    ]
  },
  // Contemporary Issues
  {
    id: 'environment',
    title: 'Islam and the Environment',
    category: 'Contemporary Issues',
    summary: 'Islamic teachings on caring for the environment.',
    content: `Islam teaches stewardship of the earth. Muslims are encouraged to avoid waste, protect resources, and treat animals and nature with respect.`,
    keyPoints: [
      'The earth is a trust from Allah.',
      'Wastefulness is discouraged.',
      'Caring for the environment is a form of worship.'
    ]
  },
  // Glossary
  {
    id: 'glossary-shahada',
    title: 'Shahada',
    category: 'Glossary of Islamic Terms',
    summary: 'The testimony of faith in Islam.',
    content: `The Shahada is the declaration: "There is no god but Allah, and Muhammad is the Messenger of Allah." It is the first pillar of Islam.`,
    keyPoints: [
      'First pillar of Islam.',
      'Affirms monotheism and prophethood.',
      'Recited to enter Islam.'
    ]
  },
  {
    id: 'fiqh-basics',
    title: 'Introduction to Islamic Jurisprudence',
    category: 'Fiqh & Islamic Law',
    summary: 'Understanding the basic principles of Islamic law and its application in daily life.',
    content: `Islamic jurisprudence (Fiqh) is the human understanding of the divine law (Shariah). It covers all aspects of human life, from worship to social interactions.

**Key Concepts**
- Sources of Islamic Law
- Major Schools of Thought
- Principles of Jurisprudence
- Application in Modern Times`,
    keyPoints: [
      'Fiqh is the practical application of Shariah',
      'Four major schools of thought exist',
      'Fiqh adapts to changing times while maintaining core principles'
    ]
  },
  {
    id: 'islamic-ethics',
    title: 'Islamic Ethics and Morality',
    category: 'Islamic Ethics',
    summary: 'The moral framework of Islam and its application in personal and social life.',
    content: `Islamic ethics provides a comprehensive moral framework for human behavior. It emphasizes honesty, justice, compassion, and responsibility.

**Core Values**
- Truthfulness
- Justice
- Compassion
- Responsibility
- Modesty`,
    keyPoints: [
      'Ethics are central to Islamic teachings',
      'Moral behavior is a form of worship',
      'Ethics apply to all aspects of life'
    ]
  },
  {
    id: 'islamic-economics',
    title: 'Principles of Islamic Economics',
    category: 'Islamic Economics',
    summary: 'Understanding the economic system of Islam and its unique features.',
    content: `Islamic economics is based on principles of justice, fairness, and social responsibility. It prohibits interest and promotes ethical business practices.

**Key Principles**
- Prohibition of Riba (Interest)
- Zakat and Charity
- Fair Trade
- Social Responsibility`,
    keyPoints: [
      'Interest-free economic system',
      'Emphasis on social justice',
      'Ethical business practices'
    ]
  },
  {
    id: 'islamic-art',
    title: 'Islamic Art and Architecture',
    category: 'Islamic Art & Architecture',
    summary: 'Exploring the rich tradition of Islamic art and architectural achievements.',
    content: `Islamic art and architecture reflect the spiritual and cultural values of Islam. They include calligraphy, geometric patterns, and magnificent structures.

**Features**
- Calligraphy
- Geometric Patterns
- Arabesque
- Architectural Masterpieces`,
    keyPoints: [
      'Art as a form of worship',
      'Geometric patterns in Islamic design',
      'Architectural innovations'
    ]
  },
  {
    id: 'islamic-sciences',
    title: 'Islamic Contributions to Science',
    category: 'Islamic Sciences',
    summary: 'The significant contributions of Muslim scholars to various scientific fields.',
    content: `Muslim scholars made groundbreaking contributions to mathematics, astronomy, medicine, and other sciences during the Islamic Golden Age.

**Areas of Contribution**
- Mathematics
- Astronomy
- Medicine
- Chemistry
- Physics`,
    keyPoints: [
      'Pioneering scientific methods',
      'Preservation of ancient knowledge',
      'Innovation in various fields'
    ]
  }
]

export default function LearnPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [dynamicLessons, setDynamicLessons] = useState<Lesson[] | null>(null)

  useEffect(() => {
    fetch('/data/lessons.json')
      .then(res => res.json())
      .then(data => setDynamicLessons(data))
      .catch(() => setDynamicLessons(null))
  }, [])

  const filteredLessons = (dynamicLessons || lessons).filter(lesson =>
    (filter === 'All' || lesson.category === filter) &&
    (lesson.title.toLowerCase().includes(search.toLowerCase()) ||
      lesson.summary.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="md:w-1/4 mb-8 md:mb-0">
        <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Categories</h2>
          <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
            <button
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-base mb-1 truncate text-gray-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-100 focus:text-green-800 border border-transparent ${filter === 'All' ? 'bg-green-100 text-green-800 border-green-700' : ''}`}
              onClick={() => setFilter('All')}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-base mb-1 truncate text-gray-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-100 focus:text-green-800 border border-transparent ${filter === cat ? 'bg-green-100 text-green-800 border-green-700' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold mb-8 text-green-900">Islamic Learning Center</h1>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl">Browse comprehensive lessons on Islamic beliefs, worship, history, character, and more. Use the search option to find topics of interest. Click a lesson to expand and learn more.</p>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search lessons..."
            className="w-full md:w-1/2 p-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLessons.map(lesson => (
            <div
              key={lesson.id}
              className={`rounded-2xl border border-gray-200 shadow-lg bg-white transition-all cursor-pointer hover:shadow-xl hover:scale-[1.01] ${selected === lesson.id ? 'ring-2 ring-green-400' : ''}`}
              onClick={() => setSelected(selected === lesson.id ? null : lesson.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-green-700">{lesson.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 border border-green-100">{lesson.category}</span>
                </div>
                <p className="mt-2 text-gray-700">{lesson.summary}</p>
                {selected === lesson.id && (
                  <div className="mt-4">
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 mb-1">Lesson Details</h4>
                      <p className="text-gray-700 whitespace-pre-line">{lesson.content}</p>
                    </div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 mb-1">Key Points</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {lesson.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    {lesson.links && (
                      <div className="mt-2">
                        <h4 className="font-semibold text-gray-800 mb-1">Further Reading</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-700">
                          {lesson.links.map((link, idx) => (
                            <li key={idx}><a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-green-900">{link.label}</a></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 