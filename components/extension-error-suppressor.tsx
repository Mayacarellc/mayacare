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

    // Mobile-specific optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                    (window.innerWidth <= 768 && 'ontouchstart' in window)

    if (isMobile) {
      // Add mobile optimization class to body
      document.body.classList.add('mobile-optimized')
      
      // Force hardware acceleration on mobile
      const style = document.createElement('style')
      style.textContent = `
        .mobile-optimized * {
          -webkit-transform: translateZ(0) !important;
          transform: translateZ(0) !important;
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
          will-change: transform !important;
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }
        
        .mobile-optimized [data-framer-motion] {
          animation-duration: 0.05s !important;
          transition-duration: 0.05s !important;
        }
        
        .mobile-optimized button, .mobile-optimized [role="button"] {
          touch-action: manipulation !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return null
} 