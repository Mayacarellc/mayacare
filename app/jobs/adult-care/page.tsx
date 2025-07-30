"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, DollarSign, Calendar, Star, Heart, Share2, ArrowRight, Users, Award, Shield, Filter, ChevronRight } from "lucide-react"
import { JobApplicationModal } from "@/components/job-application-modal"

const mockJobs = [
  {
    id: 1,
    title: "Adult Care Specialist",
    company: "Compassionate Care Services",
    location: "Philadelphia, PA",
    salary: "$18-25/hr",
    type: "Full-time",
    posted: "2 days ago",
    description: "Provide comprehensive care for adults with special needs, including personal care, medication management, and companionship.",
    isUrgent: true,
    rating: 4.8,
    familyImage: "/placeholder-user.jpg"
  },
  {
    id: 2,
    title: "Adult Companion Caregiver",
    company: "Family First Care",
    location: "Pittsburgh, PA",
    salary: "$16-22/hr",
    type: "Part-time",
    posted: "1 week ago",
    description: "Support adults with daily activities, provide companionship, and assist with light household tasks.",
    isUrgent: false,
    rating: 4.6,
    familyImage: "/placeholder-user.jpg"
  },
  {
    id: 3,
    title: "Special Needs Adult Care",
    company: "Inclusive Care Solutions",
    location: "Harrisburg, PA",
    salary: "$20-28/hr",
    type: "Full-time",
    posted: "3 days ago",
    description: "Specialized care for adults with developmental disabilities, focusing on independence and life skills.",
    isUrgent: true,
    rating: 4.9,
    familyImage: "/placeholder-user.jpg"
  },
  {
    id: 4,
    title: "Adult Respite Care Provider",
    company: "Relief Care Network",
    location: "Allentown, PA",
    salary: "$17-24/hr",
    type: "Flexible",
    posted: "5 days ago",
    description: "Provide temporary relief for primary caregivers of adults with special needs or disabilities.",
    isUrgent: false,
    rating: 4.7,
    familyImage: "/placeholder-user.jpg"
  },
  {
    id: 5,
    title: "Adult Personal Care Assistant",
    company: "Personal Touch Care",
    location: "Erie, PA",
    salary: "$19-26/hr",
    type: "Full-time",
    posted: "1 day ago",
    description: "Assist adults with personal care needs, mobility support, and daily living activities.",
    isUrgent: true,
    rating: 4.5,
    familyImage: "/placeholder-user.jpg"
  },
  {
    id: 6,
    title: "Adult Day Program Support",
    company: "Community Care Partners",
    location: "Lancaster, PA",
    salary: "$15-21/hr",
    type: "Part-time",
    posted: "2 weeks ago",
    description: "Support adults in day programs, facilitate activities, and provide supervision and care.",
    isUrgent: false,
    rating: 4.4,
    familyImage: "/placeholder-user.jpg"
  }
]

const jobTypes = ["All Types", "Full-time", "Part-time", "Flexible", "Temporary"]
const locations = ["All Locations", "Philadelphia", "Pittsburgh", "Harrisburg", "Allentown", "Erie", "Lancaster"]

export default function AdultCareJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedJobType, setSelectedJobType] = useState("All Types")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
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
    // Convert the job format to match what the modal expects
    const formattedJob = {
      id: job.id,
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description,
      hourlyRate: job.salary,
      schedule: job.type,
      requirements: ['Background check', 'Experience preferred', 'Reliable transportation']
    }
    setSelectedJob(formattedJob)
    setIsApplicationModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false)
    setSelectedJob(null)
  }

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
                Trusted by 10,000+ families
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">
                Find Your Perfect
                <span className="block text-primary">Adult Care Job</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with families who need compassionate adult caregivers. Make a difference while earning competitive pay.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="h-96 bg-gradient-to-br from-accent/30 to-muted/50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Adult Care Opportunities
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Provide specialized care for adults with diverse needs
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Special Needs
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Companionship
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        Personal Care
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
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Job title or keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-input bg-background focus:ring-ring"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="pl-10 border-input bg-background focus:ring-ring"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Search Jobs
              </Button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              </div>
              
              {/* Job Type Filters */}
              {jobTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedJobType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedJobType(type)}
                  className="text-sm"
                >
                  {type}
                </Button>
              ))}

              {/* Location Filters */}
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation(location)}
                  className="text-sm"
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  Adult Care Jobs ({mockJobs.length})
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Sort by:</span>
                  <select className="border border-input bg-background rounded-md px-2 py-1">
                    <option>Most Recent</option>
                    <option>Highest Pay</option>
                    <option>Best Rating</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 rounded-full ring-2 ring-accent/20 overflow-hidden">
                            <img
                              src={job.familyImage}
                              alt="Family"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                              {job.isUrgent && (
                                <Badge variant="destructive" className="text-xs">
                                  URGENT
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mb-2">{job.company}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {job.posted}
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{job.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">• Excellent family</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(job.id)}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Heart className={`w-4 h-4 ${favorites.includes(job.id) ? 'fill-current text-primary' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => handleApplyClick(job)}
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-2">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Previous
                    </Button>
                    <Button size="sm" className="rounded-full bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      2
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      3
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* How it works */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">How it works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Create your profile</h4>
                      <p className="text-sm text-muted-foreground">Tell families about your experience and skills</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Browse opportunities</h4>
                      <p className="text-sm text-muted-foreground">Find adult care jobs that match your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Connect & start working</h4>
                      <p className="text-sm text-muted-foreground">Get hired and begin making a difference</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* When do you want a job */}
              <Card className="bg-gradient-to-br from-accent/5 to-muted/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-foreground">When do you want a job?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Clock className="w-4 h-4 mr-2" />
                    I need work immediately
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    I can start in 1-2 weeks
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    I'm just exploring options
                  </Button>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card className="bg-gradient-to-br from-muted/5 to-background border-muted/20">
                <CardHeader>
                  <CardTitle className="text-foreground">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground">
                      What qualifications do I need?
                      <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Most adult care positions require compassion, patience, and relevant experience. Specific qualifications vary by role.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground">
                      How much can I earn?
                      <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Adult care jobs typically pay $15-28 per hour, depending on experience, location, and specific care requirements.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground">
                      What training is provided?
                      <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Many families provide on-the-job training. We also offer optional certification courses for specialized care.
                    </p>
                  </details>
                </CardContent>
              </Card>
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
          jobType="adult-care"
        />
      )}
    </div>
  )
} 