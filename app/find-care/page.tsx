import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CareFinderFlow } from "@/components/care-finder-flow"

const services = [
  {
    title: "Personal Care",
    brief: "Bathing, dressing, and grooming assistance.",
    details: [
      "Toileting and incontinence care",
      "Mobility support and transfers",
      "Oral hygiene and skincare",
    ],
  },
  {
    title: "Companion Care",
    brief: "Social interaction and emotional support.",
    details: [
      "Conversation and activities",
      "Safety supervision",
      "Daily routines and engagement",
    ],
  },
  {
    title: "Homemaking",
    brief: "Light housekeeping and laundry.",
    details: [
      "Tidying and organization",
      "Laundry and linens",
      "Kitchen and bath upkeep",
    ],
  },
  {
    title: "Meal Preparation",
    brief: "Nutritious meals and snacks.",
    details: [
      "Meal planning and prep",
      "Hydration reminders",
      "Dietary preferences",
    ],
  },
  {
    title: "Medication Reminders",
    brief: "Timely reminders and tracking.",
    details: [
      "Non-clinical medication prompts",
      "Refill reminders",
      "Record keeping",
    ],
  },
  {
    title: "Errands & Transportation",
    brief: "Appointments, shopping, and more.",
    details: [
      "Grocery shopping",
      "Prescription pick-up",
      "Doctor visits",
    ],
  },
  {
    title: "Respite Care",
    brief: "Short-term relief for family caregivers.",
    details: [
      "Planned breaks for families",
      "Flexible scheduling",
      "Reliable coverage",
    ],
  },
]

export default function FindCarePage() {
  const careServices = [
    { title: "In-home care", description: "Personalized support with daily activities at home.", icon: "/images/senior-care.jpg" },
    { title: "Companion care", description: "Social engagement and day-to-day assistance.", icon: "/images/group.png" },
    { title: "Special needs care", description: "Specialized, compassionate support.", icon: "/images/adult-care.jpg" },
    { title: "Disability support", description: "Independence-focused assistance for individuals with disabilities.", icon: "/images/pet-care.jpg" },
    { title: "Adult companion care", description: "Meaningful companionship and supervision.", icon: "/images/senior-care.jpg" },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full h-[80vh] md:h-screen bg-[#eff5f4]">
        <div className="container mx-auto h-full px-4 grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-stretch">
          <div className="flex flex-col justify-center py-12 md:py-0">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A5463] mb-6">Find Care</h1>
            <p className="text-base md:text-xl text-[#1A5463] max-w-2xl mb-8">
              Explore trusted, in-home and companion care services tailored to your needs.
            </p>
            <div className="flex items-center gap-4">
              <a href="#finder">
                <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg px-6 py-3">
                  Find Care
                </Button>
              </a>
              <Link href="/help-center" className="text-base md:text-lg underline underline-offset-4 text-[#1A5463]">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block h-full">
            <Image src="/images/group.png" alt="Care services" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Services (collapsible sections) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Non-Medical Home Care Services</h2>
          <div className="space-y-4">
            {services.map((s) => (
              <details key={s.title} className="group border rounded-xl bg-card">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.brief}</p>
                  </div>
                  <span className="ml-4 text-sm text-primary underline opacity-0 group-open:opacity-100 transition-opacity">Collapse</span>
                </summary>
                <div className="px-5 pb-5">
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <a href="#finder">
                      <Button size="sm" className="rounded-full">Request a Consultation</Button>
                    </a>
                    <a href="#finder" className="text-sm underline">Get Started</a>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Finder */}
      <section id="finder" className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <CareFinderFlow />
        </div>
      </section>
    </div>
  )
}
