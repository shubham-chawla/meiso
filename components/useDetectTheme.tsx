import { useEffect, useState } from 'react'

const useDetectTheme = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkThemeMq) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return { theme, setTheme }
}

export default useDetectTheme
