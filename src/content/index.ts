import { ar, type Dictionary } from './ar'
import { en } from './en'

export type Language = 'ar' | 'en'
export type { Dictionary }
export type Localized = Record<Language, string>

export const dictionaries: Record<Language, Dictionary> = { ar, en }

export const DEFAULT_LANGUAGE: Language = 'ar'

/** Resolve a `{ ar, en }` value for the active language. */
export function localize(value: Localized, language: Language): string {
  return value[language]
}
