"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Accessibility, Heart, PawPrint, Home } from "lucide-react"
import { useRef } from "react"

const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 29 29" fill="currentColor" {...props}>
    <path d="M18.33.02a6.93 6.93 0 0 0-4.34 1.73 6.93 6.93 0 0 0-4.34-1.73A7.03 7.03 0 0 0 2.72 7.05a7.03 7.03 0 0 0 5.2 6.83 6.4 6.4 0 0 0-2.03 4.93v.02a6.4 6.4 0 0 0 2.03 4.93 7.03 7.03 0 0 0 6.93 1.75 6.93 6.93 0 0 0 6.92-1.75 6.4 6.4 0 0 0 2.03-4.93v-.02a6.4 6.4 0 0 0-2.03-4.93 7.03 7.03 0 0 0 5.2-6.83A7.03 7.03 0 0 0 18.33.02Zm-9.4 2.82a4.1 4.1 0 0 1 3.4 1.43 4.1 4.1 0 0 1 3.4-1.43 4.2 4.2 0 0 1 4.2 4.23 4.2 4.2 0 0 1-2.7 3.95 6.93 6.93 0 0 0-3.5-3.4 6.93 6.93 0 0 0-3.5 3.4A4.2 4.2 0 0 1 4.73 7.1a4.2 4.2 0 0 1 4.2-4.23v.01Zm9.4 22.7a4.1 4.1 0 0 1-3.4-1.43 4.1 4.1 0 0 1-3.4 1.43 4.2 4.2 0 0 1-4.2-4.23v-.02a4.2 4.2 0 0 1 2.7-3.95 6.93 6.93 0 0 0 3.5 3.4 6.93 6.93 0 0 0 3.5-3.4 4.2 4.2 0 0 1 2.7 3.95v.02a4.2 4.2 0 0 1-4.2 4.23Z"></path>
  </svg>
)

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 29 29" fill="currentColor" {...props}>
    <path d="m2.61 1.83 11.1 11.1-11.1 11.1c-1.2-1.2-1.2-3.14 0-4.24L5.75 17a3 3 0 0 0 0-4.24L2.6 9.64a3 3 0 0 1 0-4.24l.01-3.57Zm12.19 12.19L2.7 2.71a3 3 0 0 1 4.24 0l10.1 10.1a3 3 0 0 1 0 4.24L6.94 27.1a3 3 0 0 1-4.24 0l12.19-11.32.01-1.76Zm10.36-4.74a3 3 0 0 0-1.5-2.62l-4.9-2.83-10.1 10.1 10.1 10.1 4.9-2.83a3 3 0 0 0 1.5-2.62v-9.24Z"></path>
  </svg>
)

export default function Component() {
  const carouselRef = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };



  return (
    <div className="bg-background text-foreground">
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 w-12 h-12">
          <Accessibility className="w-6 h-6 text-primary-foreground" />
          <span className="sr-only">Accessibility Options</span>
        </Button>
      </div>

      <main>
        <section className="relative min-h-[60vh] flex items-center" style={{ background: 'linear-gradient(135deg, #E8F4F8 0%, #D1E7DD 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero-image.png"
              alt="Caregiver sharing a warm drink with an elderly woman in a cozy living room."
              fill
              priority
              className="object-cover opacity-30"
              style={{ objectPosition: '75% center' }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content Area */}
              <div className="text-left">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2C4F26] mb-4">
                  The care they <em className="italic">need</em>.
                  <br />
                  The home they <em className="italic">love</em>.
                </h1>
                <p className="text-base md:text-lg text-[#5A6B4F] mb-8 max-w-xl">
                  Home Instead provides safe and consistent care for your loved one as they age, delivered at home with both comfort and transparency.
                </p>
                

              </div>
              
              {/* Right side for image - handled by background */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?width=400&height=400"
                alt="Abstract shapes"
                width={400}
                height={400}
                className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
              />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold tracking-tight mb-6">Safety is at the heart of our community</h2>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="w-6 h-6 mr-3 text-primary mt-1 flex-shrink-0" /> All caregivers on Maya Care
                    complete a mandatory background check.
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 mr-3 text-primary mt-1 flex-shrink-0" /> We monitor job posts and messages
                    to ensure a safe environment.
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 mr-3 text-primary mt-1 flex-shrink-0" /> Access tips and resources to help
                    you make safer hiring choices.
                  </li>
                </ul>
                <Button size="lg" className="mt-8 rounded-full">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/placeholder.svg?width=300&height=200"
                alt="Caregiver"
                width={300}
                height={200}
                className="rounded-xl absolute top-0 right-0 shadow-lg transform rotate-3"
              />
              <Image
                src="/placeholder.svg?width=250&height=180"
                alt="Family"
                width={250}
                height={180}
                className="rounded-xl absolute bottom-0 left-0 shadow-lg transform -rotate-2"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-10">Explore popular services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Nannies & Sitters", description: "Trusted care for your little ones." },
                { icon: PawPrint, title: "Pet Sitters", description: "Loving care for your furry friends." },
                { icon: Home, title: "Housekeepers", description: "Keep your home sparkling clean." },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-card p-6 rounded-xl border text-left hover:shadow-lg transition-shadow"
                >
                  <service.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Maya Care</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/about-us" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/safety-center" className="hover:text-white">
                    Safety Center
                  </Link>
                </li>
                <li>
                  <Link href="/help-center" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/cost-of-care" className="hover:text-white">
                    Cost of Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">For Business</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/corporate-benefits" className="hover:text-white">
                    Corporate Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/become-a-partner" className="hover:text-white">
                    Become a Partner
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="bg-background text-foreground rounded-lg p-2 flex items-center justify-center font-semibold"
                >
                  <AppStoreIcon className="w-6 h-6 mr-2" />
                  Download on the App Store
                </a>
                <a
                  href="#"
                  className="bg-background text-foreground rounded-lg p-2 flex items-center justify-center font-semibold"
                >
                  <GooglePlayIcon className="w-6 h-6 mr-2" />
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
            <p>© 2025 Maya Care, Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Terms of use
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
