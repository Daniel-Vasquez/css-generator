import { useEffect, useState } from 'react'

// Persiste el estado en localStorage. Al leer, mezcla lo guardado con el valor
// por defecto para que las claves nuevas no queden undefined.
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored === null) return defaultValue
      const parsed = JSON.parse(stored)
      return typeof defaultValue === 'object' && defaultValue !== null
        ? { ...defaultValue, ...parsed }
        : parsed
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage no disponible (modo privado, cuota llena): seguimos en memoria
    }
  }, [key, value])

  return [value, setValue]
}
