export interface Verse {
  number: number
  arabic: string
  translation: string
  tafsir: string
}

export interface Surah {
  number: number
  name: string
  englishName: string
  totalVerses: number
  revelationType: 'Meccan' | 'Medinan'
  description: string
  verses: Verse[]
}

export const surahs: Surah[] = [
  {
    number: 1,
    name: 'Al-Fatiha',
    englishName: 'The Opening',
    totalVerses: 7,
    revelationType: 'Meccan',
    description: 'The opening chapter of the Quran, consisting of seven verses. It is a prayer for guidance and is recited in every unit of prayer.',
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        tafsir: 'This verse is known as the Basmala. It is the opening phrase of the Quran and is used before starting any good deed in Islam.'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'All praise is due to Allah, Lord of the worlds.',
        tafsir: 'This verse establishes that all praise belongs to Allah alone, who is the Creator and Sustainer of everything in existence.'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'The Entirely Merciful, the Especially Merciful.',
        tafsir: 'Allah is described with two attributes of mercy, emphasizing His all-encompassing mercy and special mercy for the believers.'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        translation: 'Sovereign of the Day of Recompense.',
        tafsir: 'Allah is the absolute Master of the Day of Judgment, when all people will be held accountable for their deeds.'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        translation: 'It is You we worship and You we ask for help.',
        tafsir: 'This verse establishes the concept of monotheism and the exclusive worship of Allah, while seeking His help in all matters.'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translation: 'Guide us to the straight path.',
        tafsir: 'A prayer to Allah to guide us to the path of truth and righteousness, which is the path of Islam.'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
        tafsir: 'This verse specifies the straight path as the path of the prophets, the truthful, the martyrs, and the righteous, and distinguishes it from the paths of those who earned Allah\'s anger and those who went astray.'
      }
    ]
  },
  {
    number: 2,
    name: 'Al-Baqarah',
    englishName: 'The Cow',
    totalVerses: 286,
    revelationType: 'Medinan',
    description: 'The longest chapter of the Quran, containing many important laws and stories. It was revealed in Medina and covers various aspects of Islamic life.',
    verses: [
      {
        number: 1,
        arabic: 'الٓمٓ',
        translation: 'Alif, Lam, Meem.',
        tafsir: 'These are the opening letters of the Quran, whose meaning is known only to Allah. They are among the miraculous aspects of the Quran.'
      },
      {
        number: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
        translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
        tafsir: 'The Quran is described as a book of guidance for those who are mindful of Allah and seek to follow His commands.'
      },
      {
        number: 3,
        arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        translation: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them.',
        tafsir: 'This verse describes the characteristics of the righteous: belief in the unseen, establishing prayer, and giving charity.'
      }
    ]
  }
] 