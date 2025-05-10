export interface Dua {
  id: string
  category: string
  title: string
  arabic: string
  transliteration: string
  translation: string
  reference?: string
}

export const categories = [
  'Daily Routine',
  'Food & Drink',
  'Entering/Leaving',
  'Protection',
  'Knowledge',
  'Travel',
  'Other'
]

export const duas: Dua[] = [
  // ... copy all duas array from page.tsx ...
] 