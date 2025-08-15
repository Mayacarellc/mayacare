"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Bath, Brain, Home, ShoppingBasket, Heart, Users, MessageCircle, Car, Utensils, Clock, Accessibility, Phone, UserCheck, AlertCircle, Stethoscope, FileText, Calendar, UserPlus, Target, Activity, Flower, Dumbbell, Apple, Smile, CalendarCheck, ClipboardList } from "lucide-react"
import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
  const animationRef = useScrollAnimation();
  
  // State to track which service details are shown
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
  
  // Service details data with icons
  const serviceDetails = {
    'in-home': [
      { text: 'Bathing', icon: Bath },
      { text: 'Personal Hygiene', icon: Heart },
      { text: 'Feeding', icon: Utensils },
      { text: 'Mobility Assistance', icon: Accessibility },
      { text: 'Safety supervision', icon: UserCheck }
    ],
    'companion': [
      { text: 'Friendly conversation and social engagement', icon: MessageCircle },
      { text: 'Assistance with hobbies and activities', icon: Activity },
      { text: 'Escorting to appointments and errands', icon: Car },
      { text: 'Meal preparation and companionship during meals', icon: Utensils },
      { text: 'Medication reminders and light supervision', icon: Clock }
    ],
    'special-needs': [
      { text: 'Assistance with daily living activities (dressing, bathing)', icon: Users },
      { text: 'Mobility and transfer support', icon: Accessibility },
      { text: 'Communication assistance and advocacy', icon: Phone },
      { text: 'Behavioral support and crisis intervention', icon: AlertCircle },
      { text: 'Coordination with healthcare providers and therapists', icon: Stethoscope }
    ],
    'live-in': [
      { text: 'Around-the-clock personal care and supervision', icon: Clock },
      { text: 'Medication management and reminders', icon: Heart },
      { text: 'Assistance with toileting and hygiene', icon: Bath },
      { text: 'Overnight monitoring and safety checks', icon: UserCheck },
      { text: 'Meal preparation and feeding assistance', icon: Utensils }
    ],
    'care-plans': [
      { text: 'Comprehensive initial assessment', icon: FileText },
      { text: 'Tailored care schedule and goals', icon: Target },
      { text: 'Regular progress evaluations and adjustments', icon: Calendar },
      { text: 'Coordination with family and medical professionals', icon: UserPlus },
      { text: 'Flexible services adapting to changing needs', icon: Activity }
    ],
    'wellness': [
      { text: 'Guided yoga sessions for flexibility and balance', icon: Flower },
      { text: 'Meditation and mindfulness coaching', icon: Brain },
      { text: 'Light exercise and stretching routines', icon: Dumbbell },
      { text: 'Nutrition and wellness education', icon: Apple },
      { text: 'Stress management and relaxation techniques', icon: Smile }
    ]
  };
  
  const toggleDetails = (serviceKey: string) => {
    setShowDetails(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };


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
    <div ref={animationRef} className="bg-background text-foreground">
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 w-12 h-12">
          <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><path d="M10 22v-7m4 7v-7"/><path d="M2 9a10 10 0 0 0 20 0"/></svg>
          <span className="sr-only">Accessibility Options</span>
        </Button>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen bg-[#eff5f4]">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 h-full items-stretch">
              {/* Left: Content with background image and CTA */}
              <div className="flex flex-col justify-center py-12 md:py-0">
                {/* Speech-bubble style background using border-radius technique */}
                <div className="relative">
                  {/* Bubble body with accurate cut corner + tail using pseudo elements */}
                  <div className="relative max-w-3xl bg-[#E4F2D8] rounded-[3rem] p-8 md:p-12 lg:p-16 
                                  md:before:content-[''] md:before:absolute md:before:-top-12 md:before:-right-12 md:before:w-32 md:before:h-32 md:before:bg-[#eff5f4] md:before:rotate-45 md:before:rounded-[1.25rem]
                                  md:after:content-[''] md:after:absolute md:after:-bottom-16 md:after:right-28 md:after:w-52 md:after:h-36 md:after:bg-[#E4F2D8] md:after:rounded-[2.5rem] md:after:rotate-45">
                    <div className="relative z-[1]">
                      <h1 className="text-4xl md:text-6xl font-bold text-[#1A5463] mb-6">
                      Compassionate Home Care for Your Loved Ones
                      </h1>
                      <p className="text-base md:text-xl text-[#1A5463] max-w-2xl mb-8">
                        Providing personalized non-medical support to help individuals live comfortably and independently at home in Somerville, MA.
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link href="/find-care">
                          <button className="group bg-[#2C4F26] hover:bg-[#234018] text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                            JOIN US
                            <span className="bg-[#D9FB74] text-[#2C4F26] rounded-full p-2 group-hover:scale-110 transition-transform duration-200">
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                          </button>
                        </Link>
                        <Link href="/find-care" className="text-base md:text-lg underline underline-offset-4 text-[#1A5463]">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* extra tail fallback for very small md widths (kept for safety) */}
                  <div className="hidden md:block absolute -bottom-14 right-24 w-40 h-24 bg-[#E4F2D8] rounded-[2rem] rotate-45"></div>
                </div>
              </div>

              {/* Right: Image (40%) */}
              <div className="relative hidden md:block h-full">
            <Image
                  src="/images/group.png"
                  alt="Caregiver assisting a senior at home"
              fill
              priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* Care We Provide Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#EFF5F4' }}>
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-5xl font-serif py-10 font-bold tracking-tight text-center text-[#1A5463] mb-16">Care We Provide</h2>
          

          {/* Service Cards Grid */}
          <div className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: In‑Home Care Services */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('in-home')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['in-home'] ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/adult-care.jpg" alt="In‑Home Care Services" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">In‑Home Care Services</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Essential personal care assistance with daily activities...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['in-home'] ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">In‑Home Care Services</h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mb-4">Essential personal care assistance with daily activities like bathing, dressing, mobility, and companionship in the comfort of home.</p>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {serviceDetails['in-home'].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                              </div>
                              <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Companion & Household Support */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('companion')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails.companion ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/group.png" alt="Companion & Household Support" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">Companion & Household Support</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Friendly conversation, shared activities...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails.companion ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">Companion & Household Support</h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mb-4">Friendly conversation, shared activities, light cleaning, meal prep, laundry, and errands — keeping life comfortable and uplifting.</p>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {serviceDetails.companion.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                              </div>
                              <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Special Needs & Disability Support */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('special-needs')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['special-needs'] ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/senior-care.jpg" alt="Special Needs & Disability Support" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">Special Needs & Disability Support</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Personalized care for individuals with unique needs...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['special-needs'] ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <div>
                      <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">Special Needs & Disability Support</h3>
                      <p className="text-muted-foreground text-xs lg:text-sm mb-4">Personalized care for individuals with unique needs, plus respite support to give family caregivers peace of mind.</p>
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {serviceDetails['special-needs'].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                  <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                                </div>
                                <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                  </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: 24/7 Live‑In Care */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('live-in')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['live-in'] ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/pet-care.jpg" alt="24/7 Live‑In Care" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">24/7 Live‑In Care</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Round-the-clock assistance from a dedicated caregiver...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['live-in'] ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">24/7 Live‑In Care</h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mb-4">Round-the-clock assistance from a dedicated caregiver who stays in the home, offering safety, support, and companionship at any hour.</p>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {serviceDetails['live-in'].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                              </div>
                              <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                  </li>
                          );
                        })}
                </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Personalized Care Plans */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('care-plans')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['care-plans'] ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/group.png" alt="Personalized Care Plans" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">Personalized Care Plans</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Tailored care strategies designed around your needs...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails['care-plans'] ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">Personalized Care Plans</h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mb-4">Tailored care strategies designed around your needs, routines, and preferences — because every person's care journey is unique.</p>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {serviceDetails['care-plans'].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                              </div>
                              <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
              </div>
            </div>
            </div>
          </div>

              {/* Card 6: Wellness & Yoga */}
              <div 
                className="bg-white rounded-[2rem] overflow-hidden fade-in h-[380px] relative cursor-pointer group"
                onClick={() => toggleDetails('wellness')}
              >
                {/* Image that slides up */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails.wellness ? '-translate-y-full' : 'translate-y-0'}`}>
                  <div className="relative h-full">
                    <Image src="/images/senior-care.jpg" alt="Wellness & Yoga" fill className="object-cover" />
                  </div>
                </div>

                {/* Initial content (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-white">
                  <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-2">Wellness & Yoga</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Meal planning, grocery selection, and balanced diet preparation...</p>
                </div>

                {/* Detailed content that slides up from bottom */}
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${showDetails.wellness ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: '#E4F2D8' }}>
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    <h3 className="text-lg lg:text-xl font-serif font-bold text-[#1A5463] mb-3">Wellness & Yoga</h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mb-4">Meal planning, grocery selection, and balanced diet preparation to promote health, strength, and overall well‑being.</p>
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {serviceDetails.wellness.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2C4F26' }}>
                                <IconComponent className="w-3 h-3" style={{ color: '#D9FB74' }} />
                              </div>
                              <span className="text-xs lg:text-sm font-serif" style={{ color: '#2C4F26' }}>{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
                  </div>
      </section>

      {/* Get Paid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-16 items-center">
            {/* Left: Circular percentage graphic (35% width) */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Circular background with gradient */}
                <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                  {/* Background circles */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 via-green-200 to-purple-200 opacity-30"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-purple-100 opacity-50"></div>
                  
                  {/* Main content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl lg:text-8xl font-bold text-gray-900 mb-2">25%</div>
                    <div className="text-base lg:text-lg text-gray-600">utilization</div>
                  </div>
                  
                  {/* Decorative arc */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-40"></div>
                </div>
              </div>
            </div>

            {/* Right: Content with background shape (65% width) */}
            <div className="relative text-center lg:text-left overflow-hidden">
              {/* Background shape with #E4F2D8 */}
              <div className="absolute inset-0 -m-4 lg:-m-8">
                <div className="w-full h-full bg-[#E4F2D8] rounded-l-[25%] rounded-r-[3rem]
                              before:content-[''] before:absolute before:-top-4 before:-right-4 before:w-16 before:h-16 before:bg-white before:rotate-45 before:rounded-xl
                              after:content-[''] after:absolute after:-bottom-4 after:-left-4 after:w-12 after:h-12 after:bg-white after:rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 lg:p-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-[#1A5463]">
                  Get paid taking care of a family member
                </h2>
                <div className="space-y-4 mb-8 text-muted-foreground max-w-2xl">
                  <p>
                    You give so much of yourself—your time, your energy, your heart—because you care.
                  </p>
                  <p>
                    Even if you've never sought anything in return, there's support out there for you, too.
                  </p>
                  <p>
                    When you're caring for a loved one at home, we're here to help you explore every option—with kindness, clarity, and understanding.
                  </p>
                </div>
                <Link href="/family-caregivers">
                  <button className="group bg-[#2C4F26] hover:bg-[#234018] text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                    Check your eligibility
                    <span className="bg-[#D9FB74] text-[#2C4F26] rounded-full p-2 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Time Considering Professional Home Care Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#EFF5F4' }}>
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          {/* Centered heading and description */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-[#1A5463]">
              First Time Considering Professional Home Care?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Starting home care can feel like a big step, but at NestAid, we make it easier. Our caring team works closely with you to create a personalized plan that brings comfort, safety, and peace of mind right to your home.
            </p>
          </div>

          {/* Three step cards with arrows */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
              
              {/* Step 1 */}
              <div className="relative rounded-[2rem] p-8 shadow-lg fade-in" style={{ backgroundColor: '#E4F2D8' }}>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2C4F26] mb-4 block">01</span>
                  <div className="w-12 h-1 bg-[#2C4F26] mb-6"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2C4F26] flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="w-6 h-6 text-[#D9FB74]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#1A5463]">
                    Book Your Free Home Care Consultation
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  We'll start by meeting with you and your family to understand your specific needs, preferences, and goals. In this free consultation, we'll answer your questions, explain how professional caregivers can help, and guide you through the next steps.
                </p>
                
                {/* Arrow positioned on card */}
                <div className="hidden lg:flex absolute top-16 -right-6 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D9FB74] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2C4F26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-[2rem] p-8 shadow-lg fade-in" style={{ backgroundColor: '#E4F2D8' }}>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2C4F26] mb-4 block">02</span>
                  <div className="w-12 h-1 bg-[#2C4F26] mb-6"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2C4F26] flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-6 h-6 text-[#D9FB74]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#1A5463]">
                    Build Your Personalized Care Plan
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Once you choose NestAid, we'll visit your loved one's home to assess safety, comfort, and daily living needs. From identifying fall risks to suggesting ways to make life easier, we'll design a tailored care plan and schedule—built around your approval.
                </p>
                
                {/* Arrow positioned on card */}
                <div className="hidden lg:flex absolute top-16 -right-6 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D9FB74] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2C4F26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-[2rem] p-8 shadow-lg fade-in" style={{ backgroundColor: '#E4F2D8' }}>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2C4F26] mb-4 block">03</span>
                  <div className="w-12 h-1 bg-[#2C4F26] mb-6"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2C4F26] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#D9FB74]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#1A5463]">
                    Meet Your Perfect Caregiver
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  We carefully screen and hand-select caregivers who fit your loved one's needs, personality, and preferences. You'll have peace of mind knowing they're safe, comfortable, and cared for—by someone who feels like family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
