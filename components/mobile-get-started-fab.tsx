"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GetStartedModal } from "./get-started-modal"

export function MobileGetStartedFab() {
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show button when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Don't show on admin pages
  if (isAdminPage) return null

  return (
    <>
      {/* Floating Get Started Button - Mobile Only */}
      <div 
        className={`md:hidden fixed bottom-4 left-4 right-4 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-[150%]'
        }`}
        style={{ 
          zIndex: 9999,
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          right: '16px'
        }}
        data-fab-mobile
      >
        <Button
          onClick={() => setGetStartedModalOpen(true)}
          className="w-full rounded-full font-semibold py-6 text-xl shadow-2xl transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(45deg, #F2F6EB 0%, #CFFE3E 100%)',
            color: '#365F00',
            border: '2px solid #CFFE3E',
            boxShadow: '0 8px 32px rgba(54, 95, 0, 0.3)'
          }}
        >
          🚀 Get Started
        </Button>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal 
        isOpen={getStartedModalOpen} 
        onClose={() => setGetStartedModalOpen(false)} 
      />
    </>
  )
} 