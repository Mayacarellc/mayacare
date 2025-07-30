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

  if (isAdminPage) return null

  return (
    <>
      {/* Floating Get Started Button - Mobile Only */}
      <div 
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-[150%]'
        }`}
      >
        <Button
          onClick={() => setGetStartedModalOpen(true)}
          className="w-full rounded-full bg-gradient-to-r from-greentea to-lime text-deepgreen border-2 border-lime font-semibold py-6 text-xl hover:from-greentea/80 hover:to-lime/90 transition-colors shadow-lg"
        >
          Get Started
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