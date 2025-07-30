"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ChevronRight, Menu, ChevronDown, Phone } from "lucide-react"
import { GetStartedModal } from "./get-started-modal"
import { MobileHeaderExtension } from "./mobile-header-extension"

const findCareData = {
  categories: [{ name: "Senior care" }, { name: "Adult care" }, { name: "Pet care" }],
  links: {
    "Senior care": [
      { title: "In-home care", href: "/care/in-home-care" },
      { title: "Companion care", href: "/care/companion-care" },
      { title: "More info", isHeader: true, colSpan: 2 },
      { title: "Senior care guide", href: "#" },
      { title: "Safety center", href: "/safety-center" },
    ],
    "Adult care": [
      { title: "Special needs care", href: "/care/special-needs-care" },
      { title: "Disability support", href: "/care/disability-support" },
      { title: "Adult companion care", href: "/care/adult-companion-care" },
      { title: "More info", isHeader: true, colSpan: 2 },
      { title: "Adult care guide", href: "/care/adult-care-guide" },
      { title: "Resources", href: "#" },
    ],
    "Pet care": [
      { title: "Dog walkers", href: "/care/dog-walkers" },
      { title: "Pet sitters", href: "/care/pet-sitters" },
      { title: "Dog boarding", href: "/care/dog-boarding" },
      { title: "Cat care", href: "/care/cat-care" },
      { title: "Pet grooming", href: "/care/pet-grooming" },
    ],
  },
}

const findJobsData = {
  col1: [
    { title: "Senior Care Jobs", href: "/jobs/senior-care" },
  ],
  col2: [
    { title: "Adult Care Jobs", href: "/jobs/adult-care" },
  ],
  col3: [
    { title: "Pet Care Jobs", href: "/jobs/pet-care" },
  ],
}

const resourcesData = [
  { title: "About us", href: "/about-us" },
  { title: "Articles and guides", href: "#" },
  { title: "Cost of care calculator", href: "/cost-of-care" },
  { title: "Help center", href: "/help-center" },
]

export function HeaderClient() {
  const [activeCareCategory, setActiveCareCategory] = useState(findCareData.categories[0].name)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const [mobileCareCategory, setMobileCareCategory] = useState<string | null>(null)
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false)
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        {!isAdminPage && pathname === "/" && (
          <div className="text-center p-3 text-base font-medium text-white" style={{ backgroundColor: "#2C4F26" }}>
            Currently serving Pennsylvania residents only
          </div>
        )}
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-10 flex items-center">
          <Image src="/logo.png" alt="Maya Care Logo" width={280} height={140} />
        </Link>
        
        {/* Desktop Navigation - Hidden on mobile */}
        {!isAdminPage && (
          <NavigationMenu className="hidden md:flex relative">
            <NavigationMenuList>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-lg font-medium">Find care</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-[160px_1fr] w-[600px] p-4">
                    <div className="flex flex-col space-y-1 pr-4 border-r">
                      {findCareData.categories.map((category) => (
                        <button
                          key={category.name}
                          onMouseEnter={() => setActiveCareCategory(category.name)}
                          className={cn(
                            "w-full text-left p-3 rounded-md text-base font-medium flex justify-between items-center",
                            activeCareCategory === category.name ? "bg-muted text-foreground" : "hover:bg-muted/50",
                          )}
                        >
                          {category.name}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                    <div className="pl-6 grid grid-cols-2 gap-x-8">
                      <div className="flex flex-col space-y-2">
                        {(findCareData.links[activeCareCategory as keyof typeof findCareData.links] || [])
                          .filter((_: any, i: number) => i % 2 === 0)
                          .map((item: any, index: number) =>
                            item.isHeader ? (
                              <h3
                                key={index}
                                className={cn(
                                  "font-bold text-base text-muted-foreground mt-2 first:mt-0",
                                  item.colSpan === 2 && "col-span-2",
                                )}
                              >
                                {item.title}
                              </h3>
                            ) : (
                              <NavigationMenuLink asChild key={index}>
                                <Link
                                  href={item.href || "#"}
                                  className={cn(
                                    "text-base hover:text-primary",
                                    item.isHighlighted && "font-semibold text-primary bg-primary/10 px-2 py-1 rounded",
                                  )}
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            ),
                          )}
                      </div>
                      <div className="flex flex-col space-y-2">
                        {(findCareData.links[activeCareCategory as keyof typeof findCareData.links] || [])
                          .filter((_: any, i: number) => i % 2 !== 0)
                          .map((item: any, index: number) =>
                            item.isHeader ? (
                              <h3
                                key={index}
                                className={cn(
                                  "font-bold text-base text-muted-foreground mt-2 first:mt-0",
                                  item.colSpan === 2 && "col-span-2",
                                )}
                              >
                                {item.title}
                              </h3>
                            ) : (
                              <NavigationMenuLink asChild key={index}>
                                <Link href={item.href} className="text-base hover:text-primary">
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            ),
                          )}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-lg font-medium">Find jobs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] p-4">
                    <div className="flex flex-col space-y-3">
                      {findJobsData.col1.map((item, index) => (
                        <NavigationMenuLink asChild key={index}>
                          <Link href={item.href || "#"} className="text-base hover:text-primary block py-2">
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      {findJobsData.col2.map((item, index) => (
                        <NavigationMenuLink asChild key={`col2-${index}`}>
                          <Link href={item.href || "#"} className="text-base hover:text-primary block py-2">
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      {findJobsData.col3.map((item, index) => (
                        <NavigationMenuLink asChild key={`col3-${index}`}>
                          <Link href={item.href || "#"} className="text-base hover:text-primary block py-2">
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/family-caregivers"
                    className="text-lg font-medium inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    Family Caregivers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-lg font-medium">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-3 p-4">
                    {resourcesData.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Header Buttons - Hidden on mobile, shown on desktop */}
          {!isAdminPage && (
            <div className="hidden md:flex items-center space-x-3">
              {/* Phone Button */}
              <Button
                variant="outline"
                className="rounded-full bg-white border-2 border-deepgreen/20 text-deepgreen font-semibold px-8 py-4 h-auto text-lg hover:bg-greentea transition-colors"
                asChild
              >
                <a href="tel:4129530622" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>4129530622</span>
                </a>
              </Button>
              
              {/* Get Started Button */}
              <Button
                onClick={() => setGetStartedModalOpen(true)}
                className="rounded-full bg-gradient-to-r from-greentea to-lime text-deepgreen font-semibold px-8 py-4 h-auto text-lg hover:from-greentea/80 hover:to-lime/90 transition-all shadow-sm"
              >
                Get Started
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
                <nav className="flex flex-col space-y-4 mt-6">
                  {!isAdminPage && (
                    <>
                      {/* Find Care Section */}
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-base font-medium"
                          onClick={() => setMobileSubmenu(mobileSubmenu === "care" ? null : "care")}
                        >
                          Find care
                          <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "care" && "rotate-180")} />
                        </Button>
                        {mobileSubmenu === "care" && (
                          <div className="pl-4 space-y-2">
                            {findCareData.categories.map((category) => (
                              <div key={category.name}>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-between text-sm"
                                  onClick={() => setMobileCareCategory(mobileCareCategory === category.name ? null : category.name)}
                                >
                                  {category.name}
                                  <ChevronRight className={cn("h-4 w-4 transition-transform", mobileCareCategory === category.name && "rotate-90")} />
                                </Button>
                                {mobileCareCategory === category.name && (
                                  <div className="pl-4 space-y-1">
                                    {(findCareData.links[category.name as keyof typeof findCareData.links] || [])
                                      .filter((item: any) => !item.isHeader)
                                      .map((item: any, index: number) => (
                                        <Link
                                          key={index}
                                          href={item.href}
                                          className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {item.title}
                                        </Link>
                                      ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Find Jobs Section */}
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-base font-medium"
                          onClick={() => setMobileSubmenu(mobileSubmenu === "jobs" ? null : "jobs")}
                        >
                          Find jobs
                          <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "jobs" && "rotate-180")} />
                        </Button>
                        {mobileSubmenu === "jobs" && (
                          <div className="pl-4 space-y-1">
                            {[...findJobsData.col1, ...findJobsData.col2, ...findJobsData.col3]
                              .map((item: any, index: number) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* Family Caregivers Section */}
                      <div className="space-y-2">
                        <Link 
                          href="/family-caregivers" 
                          className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Family Caregivers
                        </Link>
                      </div>

                      {/* Resources Section */}
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-base font-medium"
                          onClick={() => setMobileSubmenu(mobileSubmenu === "resources" ? null : "resources")}
                        >
                          Resources
                          <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "resources" && "rotate-180")} />
                        </Button>
                        {mobileSubmenu === "resources" && (
                          <div className="pl-4 space-y-1">
                            {resourcesData.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
