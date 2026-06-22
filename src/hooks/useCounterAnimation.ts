'use client'

import { useState, useEffect, useRef } from 'react'

export function useCounterAnimation(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(startOnMount)
  const ref                   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnMount && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setStarted(true) },
        { threshold: 0.3 }
      )
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [startOnMount])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed  = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}
