"use client"

import { useState } from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ArrowLeft, Briefcase, Heart, Users, User, PawPrint } from "lucide-react"
import Link from "next/link"
import { InHomeCareForm } from "./in-home-care-form"
import { CompanionCareForm } from "./companion-care-form"
import { SpecialNeedsCareForm } from "./special-needs-care-form"
import { AdultCompanionCareForm } from "./adult-companion-care-form"
import { DisabilitySupportForm } from "./disability-support-form"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

type Step = "initial" | "jobs" | "care" | "services" | "form"
type Category = "senior_care" | "adult_care" | "pet_care"
type ServiceType = "jobs" | "care"
type FormType = "in_home_care" | "companion_care" | "special_needs_care" | "adult_companion_care" | "disability_support"

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>("initial")
  const [serviceType, setServiceType] = useState<ServiceType | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedForm, setSelectedForm] = useState<FormType | null>(null)

  const handleClose = () => {
    setCurrentStep("initial")
    setServiceType(null)
    setSelectedCategory(null)
    setSelectedForm(null)
    onClose()
  }

  const handleBack = () => {
    if (currentStep === "form") {
      setCurrentStep("services")
      setSelectedForm(null)
    } else if (currentStep === "services") {
      setCurrentStep(serviceType === "jobs" ? "jobs" : "care")
      setSelectedCategory(null)
    } else if (currentStep === "jobs" || currentStep === "care") {
      setCurrentStep("initial")
      setServiceType(null)
    }
  }

  const handleInitialChoice = (type: ServiceType) => {
    setServiceType(type)
    setCurrentStep(type)
  }

  const handleCategoryChoice = (category: Category) => {
    setSelectedCategory(category)
    setCurrentStep("services")
  }

  const handleServiceChoice = (service: { title: string; href: string; formType?: FormType }) => {
    if (service.formType) {
      setSelectedForm(service.formType)
      setCurrentStep("form")
    } else {
      // Navigate to external page and close modal
      window.location.href = service.href
      handleClose()
    }
  }

  // Job categories
  const jobCategories = [
    { id: "senior_care" as Category, title: "Senior Care Jobs", href: "/jobs/senior-care", icon: Users },
    { id: "adult_care" as Category, title: "Adult Care Jobs", href: "/jobs/adult-care", icon: User },
    { id: "pet_care" as Category, title: "Pet Care Jobs", href: "/jobs/pet-care", icon: PawPrint },
  ]

  // Care categories
  const careCategories = [
    { id: "senior_care" as Category, title: "Senior care", icon: Users },
    { id: "adult_care" as Category, title: "Adult care", icon: User },
    { id: "pet_care" as Category, title: "Pet care", icon: PawPrint },
  ]

  // Services based on category
  const services = {
    senior_care: [
      { title: "In-home care", href: "/care/in-home-care", formType: "in_home_care" as FormType },
      { title: "Companion care", href: "/care/companion-care", formType: "companion_care" as FormType },
      { title: "Alzheimer's Support", href: "/care/alzheimers-support" },
    ],
    adult_care: [
      { title: "Special needs care", href: "/care/special-needs-care", formType: "special_needs_care" as FormType },
      { title: "Adult companion care", href: "/care/adult-companion-care", formType: "adult_companion_care" as FormType },
      { title: "Disability support", href: "/care/disability-support", formType: "disability_support" as FormType },
    ],
    pet_care: [
      { title: "Dog walkers", href: "/care/dog-walkers" },
      { title: "Dog boarding", href: "/care/dog-boarding" },
      { title: "Pet grooming", href: "/care/pet-grooming" },
      { title: "Pet sitters", href: "/care/pet-sitters" },
      { title: "Cat care", href: "/care/cat-care" },
    ],
  }

  // Optimized variants for mobile performance - ultra fast
  const variants = {
    enter: {
      opacity: 0,
      scale: 0.99,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.99,
    },
  }

  // Initial Step - What are you looking for?
  const InitialStep = () => (
    <div className="p-6 space-y-8 min-h-screen md:min-h-[500px]">
      <div className="flex items-center justify-between">
        <div />
        <div />
      </div>

      <div className="text-center space-y-8">
        <motion.h1 
          className="text-2xl md:text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          What are you looking for?
        </motion.h1>
        
        <div className="max-w-md mx-auto space-y-4">
          <motion.button
            onClick={() => handleInitialChoice("jobs")}
            className="w-full p-4 rounded-full text-left flex items-center space-x-4 transition-colors duration-100 hover:shadow-lg bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-deepgreen active:scale-95"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-deepgreen" />
            </div>
            <span className="text-base font-medium text-gray-800">A job</span>
          </motion.button>

          <motion.button
            onClick={() => handleInitialChoice("care")}
            className="w-full p-4 rounded-full text-left flex items-center space-x-4 transition-colors duration-100 hover:shadow-lg bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-deepgreen active:scale-95"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.05 }}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <Heart className="w-5 h-5 text-deepgreen" />
            </div>
            <span className="text-base font-medium text-gray-800">Care for an adult</span>
          </motion.button>
        </div>
      </div>
    </div>
  )

  // Jobs Step - Job Categories
  const JobsStep = () => (
    <div className="p-6 space-y-8 min-h-screen md:min-h-[500px]">
      <div className="flex items-center justify-between">
        <button onClick={handleBack} className="p-2 text-gray-600 hover:text-gray-900 active:scale-95">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div />
      </div>

      <div className="text-center space-y-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">What type of job are you looking for?</h1>
        
        <div className="max-w-md mx-auto space-y-4">
          {jobCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.02 }}
              >
                <Button
                  asChild
                  className="w-full p-4 rounded-full text-left flex items-center space-x-4 transition-colors duration-100 hover:shadow-lg bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-deepgreen h-auto active:scale-95"
                >
                  <Link href={category.href} onClick={handleClose}>
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-deepgreen" />
                    </div>
                    <span className="text-base font-medium text-gray-800">{category.title}</span>
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Care Step - Care Categories
  const CareStep = () => (
    <div className="p-6 space-y-8 min-h-screen md:min-h-[500px]">
      <div className="flex items-center justify-between">
        <button onClick={handleBack} className="p-2 text-gray-600 hover:text-gray-900 active:scale-95">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div />
      </div>

      <div className="text-center space-y-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">What type of care are you looking for?</h1>
        
        <div className="max-w-md mx-auto space-y-4">
          {careCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChoice(category.id)}
                className="w-full p-4 rounded-full text-left flex items-center space-x-4 transition-colors duration-100 hover:shadow-lg bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-deepgreen active:scale-95"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.02 }}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-deepgreen" />
                </div>
                <span className="text-base font-medium text-gray-800">{category.title}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Services Step - Specific Services
  const ServicesStep = () => {
    if (!selectedCategory) return null
    
    const categoryServices = services[selectedCategory]
    const categoryTitle = careCategories.find(c => c.id === selectedCategory)?.title || ""

    return (
      <div className="p-6 space-y-8 min-h-screen md:min-h-[500px]">
        <div className="flex items-center justify-between">
          <button onClick={handleBack} className="p-2 text-gray-600 hover:text-gray-900 active:scale-95">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div />
        </div>

        <div className="text-center space-y-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {categoryTitle} Services
          </h1>
          
          <div className="max-w-md mx-auto space-y-4">
            {categoryServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.02 }}
              >
                <Button
                  onClick={() => handleServiceChoice(service)}
                  className="w-full p-4 rounded-full text-left flex items-center space-x-4 transition-colors duration-100 hover:shadow-lg bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-deepgreen h-auto active:scale-95"
                >
                  <span className="text-base font-medium text-gray-800">{service.title}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Form Step - Show the selected form
  const FormStep = () => {
    if (!selectedForm) return null

    const renderForm = () => {
      switch (selectedForm) {
        case "in_home_care":
          return <InHomeCareForm onClose={handleClose} inModal={true} onBack={handleBack} />
        case "companion_care":
          return <CompanionCareForm onClose={handleClose} inModal={true} onBack={handleBack} />
        case "special_needs_care":
          return <SpecialNeedsCareForm onClose={handleClose} inModal={true} onBack={handleBack} />
        case "adult_companion_care":
          return <AdultCompanionCareForm onClose={handleClose} inModal={true} onBack={handleBack} />
        case "disability_support":
          return <DisabilitySupportForm onClose={handleClose} inModal={true} onBack={handleBack} />
        default:
          return null
      }
    }

    return (
      <div className="min-h-screen md:min-h-[600px] h-full">
        {renderForm()}
      </div>
    )
  }

  const getCurrentStep = () => {
    switch (currentStep) {
      case "initial":
        return <InitialStep />
      case "jobs":
        return <JobsStep />
      case "care":
        return <CareStep />
      case "services":
        return <ServicesStep />
      case "form":
        return <FormStep />
      default:
        return <InitialStep />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent 
          className="w-full h-full max-w-none max-h-none m-0 p-0 bg-white md:max-w-4xl md:max-h-[90vh] md:m-auto md:rounded-lg overflow-y-auto"
          data-modal-mobile
        >
          <DialogTitle className="sr-only">
            Get Started - Find Care or Jobs
          </DialogTitle>
          <motion.div 
            className="w-full min-h-full"
            data-mobile-form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStep}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.15,
                  ease: "easeInOut",
                }}
              >
                {getCurrentStep()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </DialogContent>
      </Dialog>
    </MotionConfig>
  )
} 