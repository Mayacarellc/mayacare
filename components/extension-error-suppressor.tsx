"use client"

import { useEffect } from "react"

export function ExtensionErrorSuppressor() {
  useEffect(() => {
    // Suppress extension-related console errors
    const originalError = console.error
    console.error = (...args) => {
      if (
        args.some(arg => 
          typeof arg === 'string' && (
            arg.includes('Extension') ||
            arg.includes('chrome-extension') ||
            arg.includes('moz-extension') ||
            arg.includes('safari-extension')
          )
        )
      ) {
        return
      }
      originalError.apply(console, args)
    }

    // Very minimal mobile optimization - only for actual mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile && window.innerWidth <= 768) {
      // Only add a class for mobile detection, no aggressive CSS injection
      document.body.classList.add('mobile-device')
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return null
} 