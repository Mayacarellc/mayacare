"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, DollarSign, Calendar, Star, Heart, Share2, ArrowRight, Users, Award, Shield, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { JobApplicationModal } from "@/components/job-application-modal"

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "In-Home Care Needed For My Loved One In Philadelphia",
    location: "Philadelphia, PA",
    type: "Full-time",
    postedDate: "Jul 22",
    description: "Looking for a compassionate caregiver to help with daily activities, medication reminders, and companionship for my elderly mother. Experience with dementia care preferred.",
    hourlyRate: "$18-22",
    schedule: "Monday-Friday, 8am-4pm",
    requirements: ["Background check", "First aid certified", "2+ years experience"],
    familyImage: "/placeholder-user.jpg",
    isUrgent: true,
    rating: 4.8
  },
  {
    id: 2,
    title: "Companion Care For Senior In Pittsburgh",
    location: "Pittsburgh, PA",
    type: "Part-time",
    postedDate: "Jul 20",
    description: "Seeking a friendly companion for my father who enjoys reading, walking, and conversation. Light housekeeping and meal preparation included.",
    hourlyRate: "$16-20",
    schedule: "Tuesday, Thursday, Saturday, 10am-2pm",
    requirements: ["Reliable transportation", "Patience and empathy", "Clean background"],
    familyImage: "/placeholder-user.jpg",
    isUrgent: false,
    rating: 4.5
  },
  {
    id: 3,
    title: "Personal Care Assistant Needed In Harrisburg",
    location: "Harrisburg, PA",
    type: "Full-time",
    postedDate: "Jul 18",
    description: "Need assistance with personal care, mobility support, and daily living activities. Must be comfortable with lifting and transfers.",
    hourlyRate: "$20-25",
    schedule: "Monday-Sunday, rotating shifts",
    requirements: ["CNA certification preferred", "Physical strength", "Compassionate nature"],
    familyImage: "/placeholder-user.jpg",
    isUrgent: true,
    rating: 4.9
  },
  {
    id: 4,
    title: "Respite Care For Family Caregiver In Allentown",
    location: "Allentown, PA",
    type: "Part-time",
    postedDate: "Jul 15",
    description: "Looking for respite care to give our family caregiver a break. Help with medication, meals, and light activities.",
    hourlyRate: "$17-21",
    schedule: "Weekends, flexible hours",
    requirements: ["Experience with elderly care", "Reliable", "Good communication"],
    familyImage: "/placeholder-user.jpg",
    isUrgent: false,
    rating: 4.3
  },
  {
    id: 5,
    title: "Live-In Caregiver For Elderly Couple In Erie",
    location: "Erie, PA",
    type: "Live-in",
    postedDate: "Jul 12",
    description: "Seeking a live-in caregiver for my elderly parents. Private room provided. Help with daily activities and overnight care.",
    hourlyRate: "$15-18",
    schedule: "Live-in position, 5 days on, 2 days off",
    requirements: ["Live-in experience", "Clean background check", "References required"],
    familyImage: "/placeholder-user.jpg",
    isUrgent: true,
    rating: 4.7
  }
]

export default function InHomeCareJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedJobType, setSelectedJobType] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null)

  const toggleFavorite = (jobId: number) => {
    setFavorites(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }

  const handleApplyClick = (job: typeof mockJobs[0]) => {
    setSelectedJob(job)
    setIsApplicationModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false)
    setSelectedJob(null)
  }

  const jobTypes = ["all", "full-time", "part-time", "live-in"]
  const locations = ["all", "Philadelphia", "Pittsburgh", "Harrisburg", "Allentown", "Erie"]

  return (
    <div className="min-h-screen bg-background" style={{
      backgroundImage: 'url(/images/mainbg.png)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Pennsylvania Notice */}
      <div className="text-center p-3 text-base font-medium text-white" style={{ backgroundColor: "#2C4F26" }}>
        Currently serving Pennsylvania residents only
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/30 via-accent/10 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                <Award className="w-4 h-4 mr-2 inline" />
                Trusted by 10,000+ families
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">
                Find Your Perfect
                <span className="block text-primary">Senior Care Job</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with families who need compassionate senior caregivers. Make a difference while earning competitive pay.
              </p>
            </motion.div>
            
            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent/30 to-muted/50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Senior Care Opportunities
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Provide compassionate care for seniors in their homes
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Personal Care
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Companionship
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Medication Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="bg-card rounded-2xl shadow-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <Input
                    type="text"
                    placeholder="Job title or keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-input bg-background focus:bg-background focus:ring-2 focus:ring-ring transition-all duration-200"
                  />
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <Input
                    type="text"
                    placeholder="Location"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="pl-12 h-12 border-input bg-background focus:bg-background focus:ring-2 focus:ring-ring transition-all duration-200"
                  />
                </div>
                <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Search Jobs
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-card rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Filters</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Job Type</label>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                      <Button
                        key={type}
                        variant={selectedJobType === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedJobType(type)}
                        className={`capitalize ${
                          selectedJobType === type 
                            ? "bg-primary text-primary-foreground" 
                            : "border-input hover:bg-accent"
                        }`}
                      >
                        {type === "all" ? "All Types" : type.replace("-", " ")}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Location</label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant={selectedLocation === location ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLocation(location)}
                        className={`capitalize ${
                          selectedLocation === location 
                            ? "bg-primary text-primary-foreground" 
                            : "border-input hover:bg-accent"
                        }`}
                      >
                        {location === "all" ? "All Locations" : location}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {mockJobs.map((job) => (
                  <Card key={job.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-border bg-card">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-accent/30 group-hover:ring-accent/50 transition-all duration-300">
                              <Image
                                src={job.familyImage}
                                alt="Family"
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            {job.isUrgent && (
                              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                                URGENT
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                  {job.title}
                                </h3>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm font-medium text-muted-foreground">{job.rating}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                                  {job.location}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2 text-primary" />
                                  {job.type}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                                  {job.postedDate}
                                </span>
                              </div>
                              
                              <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                              
                              <div className="flex items-center space-x-6 mb-4">
                                <span className="text-2xl font-bold text-primary">{job.hourlyRate}/hr</span>
                                <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">{job.schedule}</span>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-6">
                                {job.requirements.map((req, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs bg-accent/20 text-primary border-accent/30 hover:bg-accent/30 transition-colors">
                                    {req}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end space-y-4">
                              <Button 
                                onClick={() => handleApplyClick(job)}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group-hover:bg-primary/90"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => toggleFavorite(job.id)}
                                  className={`hover:bg-destructive/10 transition-colors ${
                                    favorites.includes(job.id) ? 'text-destructive' : 'text-muted-foreground'
                                  }`}
                                >
                                  <Heart className={`w-4 h-4 ${favorites.includes(job.id) ? 'fill-current' : ''}`} />
                                </Button>
                                <Button variant="ghost" size="sm" className="hover:bg-accent/10 text-muted-foreground hover:text-primary transition-colors">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Enhanced Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2 bg-card rounded-2xl shadow-lg p-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "ghost"}
                      size="sm"
                      className={`rounded-xl transition-all duration-200 ${
                        page === 1 
                          ? "bg-primary text-primary-foreground shadow-lg" 
                          : "hover:bg-accent"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                  <span className="px-3 text-muted-foreground">...</span>
                  <Button variant="ghost" size="sm" className="rounded-xl hover:bg-accent">
                    15
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* How it works */}
                <Card className="border-border shadow-xl bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-foreground">How it works</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 group">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                          1
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">Apply to jobs</span>
                          <p className="text-xs text-muted-foreground mt-1">Browse and apply to positions that match your skills</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                          2
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">Interview with families</span>
                          <p className="text-xs text-muted-foreground mt-1">Connect directly with families to discuss needs</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                          3
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">Get hired and start working</span>
                          <p className="text-xs text-muted-foreground mt-1">Begin your rewarding caregiving journey</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* When do you want a job */}
                <Card className="bg-accent/10 border-border shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-foreground">When do you want a job?</h3>
                    <div className="space-y-3">
                      {["Right now", "In 1-3 months", "In 3-6 months"].map((option, index) => (
                        <Button 
                          key={index}
                          variant="outline" 
                          className="w-full justify-start h-12 rounded-xl border-border hover:border-primary hover:bg-accent/20 transition-all duration-200 group"
                        >
                          <div className="w-3 h-3 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                          {option}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Enhanced FAQs */}
                <Card className="border-border shadow-xl bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-foreground">FAQs for finding caregiver jobs</h3>
                    <div className="space-y-4">
                      <details className="group">
                        <summary className="cursor-pointer text-sm font-semibold hover:text-primary transition-colors flex items-center justify-between">
                          How many caregiver jobs are there?
                          <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </summary>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          There are thousands of caregiver jobs available across Pennsylvania, with new opportunities posted daily.
                        </p>
                      </details>
                      <details className="group">
                        <summary className="cursor-pointer text-sm font-semibold hover:text-primary transition-colors flex items-center justify-between">
                          What qualifications do I need?
                          <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </summary>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          Requirements vary by position, but most families look for reliability, compassion, and relevant experience.
                        </p>
                      </details>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={handleCloseModal}
          job={selectedJob}
          jobType="senior-care"
        />
      )}
    </div>
  )
} 