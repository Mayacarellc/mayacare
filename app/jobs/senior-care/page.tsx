"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Clock, DollarSign, Calendar, Star, Heart, Share2, ArrowRight, Users, Award, Shield, Filter } from "lucide-react"
import { motion } from "framer-motion"


// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "CareGiver",
    location: "Melrose, MA and the Surrounding Areas",
    zipCode: "02176",
    type: "Apply for this career",
    description: "Home Instead is looking for caring and compassionate caregivers to become a part of our team and join our mission of enhancing the lives of aging adults throughout our community.",
    fullDescription: `Home Instead is looking for caring and compassionate caregivers to become a part of our team and join our mission of enhancing the lives of aging adults throughout our community. Home Instead provides a variety of service to remain in their home and meet the challenges of aging with dignity, care and compassion.

Primary responsibilities and requirements include, but are not limited to:

• Companionship and conversation
• Light housekeeping tasks and meal preparation
• Medication and appointment reminders
• Providing personal care (incontinence care, bathing, transfers, etc.)
• Ability to treat and care for seniors and their property with dignity and respect
• Ability to communicate with clients in a friendly and congenial manner

Qualifications/Requirements:
• Home Health Aide or CNA certification
• Excellent communication skills
• Smart phone

We value our CAREGivers and offer the following benefits:
• Schedule that works for you
• 24/7 Office support
• Education/promotion
• Mileage reimbursement
• 401K with an employer match
• $$ Referral Bonus $$
• Additional pay for weekend and holiday shifts
• Ava Reward program - earn gift cards
• Tap Check to get paid before payday!`,
    postedDate: "2 days ago",
    icon: "briefcase.svg"
  },
  {
    id: 2,
    title: "Senior Care Assistant",
    location: "Boston, MA and the Surrounding Areas",
    zipCode: "02101",
    type: "Apply for this career",
    description: "Seeking compassionate caregivers to provide in-home care services for elderly clients in the Boston area.",
    fullDescription: `We are seeking compassionate and dedicated caregivers to join our team in providing exceptional in-home care services for elderly clients in the Boston area.

Primary responsibilities include:
• Personal care assistance (bathing, dressing, grooming)
• Medication reminders and management
• Light housekeeping and meal preparation
• Transportation to appointments
• Companionship and emotional support
• Safety monitoring and fall prevention

Requirements:
• Previous caregiving experience preferred
• CPR and First Aid certification
• Reliable transportation
• Background check required
• Excellent communication skills
• Compassionate and patient nature

Benefits:
• Competitive hourly rates
• Flexible scheduling
• Health insurance options
• Paid time off
• Training and development opportunities
• Employee recognition programs`,
    postedDate: "3 days ago",
    icon: "briefcase.svg"
  },
  {
    id: 3,
    title: "Home Health Aide",
    location: "Cambridge, MA and the Surrounding Areas",
    zipCode: "02138",
    type: "Apply for this career",
    description: "Join our team of dedicated home health aides providing quality care to seniors in their homes.",
    fullDescription: `Join our growing team of dedicated home health aides committed to providing quality, compassionate care to seniors in their homes throughout Cambridge and surrounding areas.

Key Responsibilities:
• Assist with activities of daily living
• Monitor vital signs and health status
• Provide mobility assistance and transfers
• Administer medications as directed
• Maintain accurate care records
• Communicate with healthcare team and family members

Qualifications:
• Home Health Aide certification required
• Minimum 1 year experience in senior care
• Knowledge of medical terminology
• Strong interpersonal skills
• Physical ability to assist with transfers
• Valid driver's license and reliable vehicle

What We Offer:
• Starting wage $18-22/hour
• Comprehensive benefits package
• Professional development opportunities
• Supportive work environment
• Recognition and advancement programs
• Referral bonuses`,
    postedDate: "5 days ago",
    icon: "briefcase.svg"
  }
]

export default function InHomeCareJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [zipCodeQuery, setZipCodeQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedJobType, setSelectedJobType] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<typeof mockJobs[0] | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    jobTitle: "",
    jobId: "",
    workEligibility: false,
    englishProficiency: false,
    smsConsent: false
  })

  const toggleFavorite = (jobId: number) => {
    setFavorites(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    )
  }

  const handleApplyClick = (job: typeof mockJobs[0]) => {
    setSelectedJobForDetails(job)
    setFormData(prev => ({
      ...prev,
      jobTitle: job.title,
      jobId: job.id.toString()
    }))
    setShowJobDetails(true)
    setShowApplicationForm(true) // Go directly to form
  }

  const handleDetailsClick = (job: typeof mockJobs[0]) => {
    setSelectedJobForDetails(job)
    setFormData(prev => ({
      ...prev,
      jobTitle: job.title,
      jobId: job.id.toString()
    }))
    setShowJobDetails(true)
    setShowApplicationForm(false)
  }

  const handleApplyFromDetails = () => {
    setShowApplicationForm(true)
  }



  const handleCloseDetails = () => {
    setShowJobDetails(false)
    setSelectedJobForDetails(null)
    setShowApplicationForm(false)
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      jobTitle: "",
      jobId: "",
      workEligibility: false,
      englishProficiency: false,
      smsConsent: false
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
    alert("Application submitted successfully!")
    handleCloseDetails()
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
            
            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/senior-care.jpg"
                  alt="Senior Care Professional"
                  width={600}
                  height={400}
                  className="object-cover w-full h-96"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join Our Care Team</h3>
                  <p className="text-white/90">Making a difference in seniors' lives</p>
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
                    placeholder="Zip Code"
                    value={zipCodeQuery}
                    onChange={(e) => setZipCodeQuery(e.target.value)}
                    className="pl-12 h-12 border-input bg-background focus:bg-background focus:ring-2 focus:ring-ring transition-all duration-200"
                  />
                </div>
                <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Search
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showJobDetails && selectedJobForDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center md:p-4 z-50">
          <div className="bg-white md:rounded-lg max-w-4xl w-full h-full md:h-auto md:max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                {showApplicationForm ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleCloseDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              {/* Desktop Header */}
              <div className="hidden md:flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJobForDetails.title}</h2>
                  <p className="text-lg text-gray-600">{selectedJobForDetails.location}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleCloseDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              {/* Mobile Title (shown when not in form) */}
              {!showApplicationForm && (
                <div className="md:hidden mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedJobForDetails.title}</h2>
                  <p className="text-base text-gray-600">{selectedJobForDetails.location}</p>
                </div>
              )}
              
              {!showApplicationForm ? (
                <>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed text-sm">
                      {selectedJobForDetails.fullDescription}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <Button 
                      onClick={handleApplyFromDetails}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold w-full"
                    >
                      Apply for this career
                    </Button>
                  </div>
                </>
              ) : (
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Apply to be a caregiver</h3>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* First Name */}
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Please Enter your First Name."
                        className="mt-1"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Please Enter your Last Name."
                        className="mt-1"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                        placeholder="Please enter a valid phone number."
                        className="mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Please enter a valid email address."
                        className="mt-1"
                      />
                    </div>

                    {/* Job ID and Title Combined */}
                    <div>
                      <Label htmlFor="jobInfo" className="text-sm font-medium text-gray-700">
                        Job ID : Title
                      </Label>
                      <Input
                        id="jobInfo"
                        type="text"
                        value={`${formData.jobId} - ${formData.jobTitle}`}
                        readOnly
                        className="mt-1 bg-gray-50"
                      />
                    </div>

                    {/* Work Eligibility */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="workEligibility"
                        checked={formData.workEligibility}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, workEligibility: checked as boolean }))}
                        required
                      />
                      <Label htmlFor="workEligibility" className="text-sm text-gray-700 leading-5">
                        I have documents that establish my identity and eligibility to work in the United States. <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    {/* English Proficiency */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="englishProficiency"
                        checked={formData.englishProficiency}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, englishProficiency: checked as boolean }))}
                        required
                      />
                      <Label htmlFor="englishProficiency" className="text-sm text-gray-700 leading-5">
                        I can conduct business in written and spoken English. <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    {/* SMS Consent */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="smsConsent"
                        checked={formData.smsConsent}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, smsConsent: checked as boolean }))}
                        required
                      />
                      <Label htmlFor="smsConsent" className="text-sm text-gray-700 leading-5">
                        By checking this box, I consent to receive automated SMS text messages from Home Instead at the number provided, including job opportunities and employment-related messages. Message frequency may vary. Message & data rates may apply. Reply STOP to opt out. For assistance, text "HELP." For more details, including our SMS terms, see our Privacy Policy. <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      {/* Desktop Back Button */}
                      <div className="hidden md:flex gap-4 mb-4">
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setShowApplicationForm(false)}
                          className="px-8 py-3 rounded-lg font-semibold"
                        >
                          Back to Details
                        </Button>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold w-full"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Job Listings */}
            <div className="space-y-4">
              {mockJobs.map((job) => (
                <Card key={job.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{job.location}</p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{job.description}</p>
                        <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-6">
                        <Button 
                          onClick={() => handleDetailsClick(job)}
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-full font-medium"
                        >
                          Details
                        </Button>
                        <Button 
                          onClick={() => handleApplyClick(job)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 