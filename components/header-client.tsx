"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { GetStartedModal } from "./get-started-modal"
import { MobileHeaderExtension } from "./mobile-header-extension"

export function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false)
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b" style={{ backgroundColor: '#F8F8F2' }}>
        {!isAdminPage && pathname === "/" && (
          <div className="text-center py-2 px-4 text-sm font-medium text-white" style={{ backgroundColor: "#2C4F26" }}>
            Currently serving Pennsylvania residents only
          </div>
        )}
      <div className="container mx-auto flex items-center justify-between px-4" style={{ height: '4rem', minHeight: '4rem', maxHeight: '4rem' }}>
        <Link href="/" className="flex items-center" style={{ marginRight: '2rem' }}>
          <Image 
            src="/NestAid.png" 
            alt="NestAid Logo" 
            width={200} 
            height={100} 
            style={{ height: '3rem', width: 'auto' }}
            priority
          />
        </Link>
        
        {/* Desktop Navigation - Hidden on mobile */}
        {!isAdminPage && (
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/find-care" className="relative text-base font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#D9FB74] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Find care
            </Link>
            <Link href="/jobs/senior-care" className="relative text-base font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#D9FB74] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Find jobs
            </Link>
            <Link href="/family-caregivers" className="relative text-base font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#D9FB74] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Family Caregivers
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium !bg-transparent hover:!bg-[#E4F2D8] focus:!bg-[#D9FB74] data-[state=open]:!bg-[#D9FB74]">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/about-us" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#D9FB74] text-sm font-medium">About us</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/cost-of-care" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#D9FB74] text-sm font-medium">Cost of care calculator</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/help-center" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#D9FB74] text-sm font-medium">Help center</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Header Buttons - Hidden on mobile, shown on desktop */}
          {!isAdminPage && (
            <div className="hidden md:flex items-center" style={{ gap: '0.75rem' }}>
              {/* Phone Button */}
              <Button
                variant="outline"
                className="rounded-full bg-white border-2 border-deepgreen/20 text-deepgreen font-semibold hover:bg-greentea transition-colors"
                style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', lineHeight: '1.25' }}
                asChild
              >
                <a href="tel:4129530622" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>4129530622</span>
                </a>
              </Button>
              
              {/* Get Started Button */}
              <Button
                onClick={() => setGetStartedModalOpen(true)}
                className="rounded-full text-white font-semibold hover:opacity-90 transition-all shadow-sm"
                style={{ backgroundColor: '#2C4F26', padding: '0.75rem 1.5rem', fontSize: '1rem', lineHeight: '1.25' }}
              >
                Join Now
              </Button>
            </div>
          )}
          

          
          {/* Mobile Hamburger Menu - Hidden on desktop */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col space-y-2 mt-6">
                  {!isAdminPage && (
                    <>
                      <Link href="/find-care" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#D9FB74]">Find care</Link>
                      <Link href="/jobs/senior-care" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#D9FB74]">Find jobs</Link>
                      <Link href="/family-caregivers" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#D9FB74]">Family Caregivers</Link>
                      <button onClick={() => setMobileResourcesOpen(prev => !prev)} className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#D9FB74]">
                        Resources
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileResourcesOpen && (
                        <div className="pl-3 space-y-1">
                          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-[#D9FB74]">About us</Link>
                          <Link href="/cost-of-care" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-[#D9FB74]">Cost of care calculator</Link>
                          <Link href="/help-center" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-[#D9FB74]">Help center</Link>
                        </div>
                      )}
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
        {/* Get Started Modal - Desktop only, mobile uses FAB */}
        <div className="hidden md:block">
          <GetStartedModal 
            isOpen={getStartedModalOpen} 
            onClose={() => setGetStartedModalOpen(false)} 
          />
        </div>
      </header>
      
      {/* Mobile Header Extension - Shows location and phone on mobile */}
      <MobileHeaderExtension isAdminPage={isAdminPage} />
    </>
  )
}

