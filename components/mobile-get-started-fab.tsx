"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { GetStartedModal } from "./get-started-modal"

export function MobileGetStartedFab() {
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false)
  const [chatBotOpen, setChatBotOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")
  const isHomePage = pathname === "/"

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

  // Handle escape key to close chatbot and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && chatBotOpen) {
        setChatBotOpen(false)
      }
    }

    if (chatBotOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when chatbot is open
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [chatBotOpen])

  // Only show on homepage and not on admin pages
  if (isAdminPage || !isHomePage) return null

  return (
    <>
      {/* Bottom Buttons Container with Background */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ backgroundColor: '#F0F0F0' }}
      >
        <div className="flex justify-between items-center gap-4">
          {/* Get Started Button */}
          <Button
            onClick={() => setGetStartedModalOpen(true)}
            className="rounded-full font-semibold px-10 py-6 text-lg transition-colors shadow-lg text-gray-800 hover:opacity-90"
            style={{ backgroundColor: '#D9FB74', minWidth: '260px' }}
          >
            Get Started
          </Button>

          {/* Chat Button */}
          <Button
            onClick={() => setChatBotOpen(true)}
            className="rounded-full px-8 py-6 transition-colors shadow-lg text-white hover:opacity-90 text-lg font-semibold flex items-center gap-2"
            style={{ backgroundColor: '#16803C', minWidth: '140px' }}
          >
            <MessageCircle className="w-6 h-6" />
            Chat
          </Button>
        </div>
      </div>

      {/* Full Screen Chat Bot Window */}
      {chatBotOpen && (
        <div className="fixed inset-0 z-[100] bg-white">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <h2 className="text-lg font-semibold text-gray-800">Chat Support</h2>
            <Button
              onClick={() => setChatBotOpen(false)}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-800">
                  Hi! I'm here to help you find the perfect care solution. How can I assist you today?
                </p>
              </div>
              
              {/* Chat messages will go here */}
              <div className="text-center text-gray-500 text-sm mt-8">
                Start a conversation to get personalized care recommendations
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="border-t p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2C4F26] focus:border-transparent"
              />
              <Button
                className="rounded-full px-6"
                style={{ backgroundColor: '#2C4F26' }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Get Started Modal */}
      <GetStartedModal 
        isOpen={getStartedModalOpen} 
        onClose={() => setGetStartedModalOpen(false)} 
      />
    </>
  )
} 