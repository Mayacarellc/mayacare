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

    // Aggressive mobile optimization for actual mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isTouchDevice = 'ontouchstart' in window
    const isSmallScreen = window.innerWidth <= 768

    if (isMobile && isTouchDevice && isSmallScreen) {
      // Add mobile optimization class
      document.body.classList.add('mobile-device', 'mobile-optimized')
      
      // Inject aggressive mobile optimizations
      const style = document.createElement('style')
      style.textContent = `
        .mobile-optimized * {
          animation-duration: 0.01s !important;
          transition-duration: 0.01s !important;
          -webkit-transform: translateZ(0) !important;
          transform: translateZ(0) !important;
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
          will-change: transform !important;
        }
        
        .mobile-optimized [data-framer-motion] {
          animation: none !important;
          transition: none !important;
        }
        
        .mobile-optimized .motion-div {
          animation: none !important;
          transition: none !important;
        }
        
        .mobile-optimized button {
          transition: none !important;
          animation: none !important;
        }
        
        .mobile-optimized [class*="motion"] {
          animation: none !important;
          transition: none !important;
        }
      `
      document.head.appendChild(style)
      
      // Force immediate style application
      document.body.style.transform = 'translateZ(0)'
      document.body.style.backfaceVisibility = 'hidden'
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return null
} 