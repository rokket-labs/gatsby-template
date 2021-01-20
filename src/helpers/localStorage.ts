export const setLocalStorage = (key: string, value: string): void => {
  if (window && typeof window !== 'undefined') localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string): string | null | undefined => {
  if (window && typeof window !== 'undefined') return localStorage.getItem(key)
}

export const clearLocalStorage = (key: string): void => {
  if (window && typeof window !== 'undefined') localStorage.removeItem(key)
}
