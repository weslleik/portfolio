'use client'

import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}

export function useTypewriter({
  words,
  typeSpeed  = 100,
  deleteSpeed = 60,
  pauseMs    = 1800,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex]  = useState(0)
  const [deleting,  setDeleting]   = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1))
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseMs)
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1))
        if (displayed.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
