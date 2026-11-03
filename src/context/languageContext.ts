import { createContext, useContext } from 'react'
import type { Dictionary, Language, Localized } from '../content'

export interface LanguageContextValue {
  language: Language
  dir: 'rtl' | 'ltr'
  t: Dictionary
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  /** Resolve a `{ ar, en }` content value. */
  L: (value: Localized) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}
