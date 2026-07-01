'use client'
import { useEffect } from 'react'

export function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only apply strict security rules in production
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    // 1. Block right-click
    const blockContext = (e: MouseEvent) => {
      e.preventDefault()
      console.warn('Right-click disabled for security')
    }
    document.addEventListener('contextmenu', blockContext)

    // 2. Block DevTools (F12, Ctrl+Shift+I, etc)
    const blockDevTools = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault()
        console.warn('DevTools access blocked')
      }
    }
    document.addEventListener('keydown', blockDevTools)

    // 3. Block text selection
    document.body.style.userSelect = 'none'

    // 4. Disable drag
    const blockDrag = (e: DragEvent) => e.preventDefault()
    document.addEventListener('dragstart', blockDrag)

    // 5. Log console access attempts (warn developers)
    if (typeof window !== 'undefined') {
      const originalLog = console.log
      console.log = function(...args: any[]) {
        console.warn('Console access detected')
        originalLog.apply(console, args)
      }
    }

    // 6. Detect DevTools open (clever method)
    const checkDevTools = () => {
      const start = performance.now()
      debugger // Intentional debugger statement
      const end = performance.now()
      if (end - start > 100) {
        console.warn('DevTools detected and likely open')
        // Optional: disable features if DevTools is open
      }
    }
    const interval = setInterval(checkDevTools, 5000)

    return () => {
      document.removeEventListener('contextmenu', blockContext)
      document.removeEventListener('keydown', blockDevTools)
      document.removeEventListener('dragstart', blockDrag)
      clearInterval(interval)
    }
  }, [])

  return <>{children}</>
}
