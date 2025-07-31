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

    // Mobile-specific optimizations - only for actual mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
                    window.innerWidth <= 768 && 'ontouchstart' in window

    if (isMobile) {
      // Add mobile optimization class to body
      document.body.classList.add('mobile-optimized')
      
      // Target only form elements and modals for optimization
      const style = document.createElement('style')
      style.textContent = `
        .mobile-optimized [data-mobile-form] {
          animation-duration: 0.05s !important;
          transition-duration: 0.05s !important;
        }
        
        .mobile-optimized [data-mobile-form] * {
          animation-duration: 0.05s !important;
          transition-duration: 0.05s !important;
        }
        
        .mobile-optimized [data-framer-motion] {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform;
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