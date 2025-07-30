import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { InHomeCarePage } from "@/components/in-home-care-page"
import { CompanionCarePage } from "@/components/companion-care-page"
import { SpecialNeedsCarePage } from "@/components/special-needs-care-page"
import { AdultCompanionCarePage } from "@/components/adult-companion-care-page"
import { AdultCareGuidePage } from "@/components/adult-care-guide-page"
import { DisabilitySupportPage } from "@/components/disability-support-page"

function formatServiceTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const serviceTitle = formatServiceTitle(service)

  const caregivers = [
    {
      name: "Jane D.",
      rating: 4.9,
      reviews: 120,
      experience: "8 years",
      rate: "$25/hr",
      bio: "Loving and experienced caregiver with a passion for helping children learn and grow. CPR and First Aid certified.",
      img: "portrait+of+a+friendly+babysitter",
    },
    {
      name: "Maria S.",
      rating: 5.0,
      reviews: 95,
      experience: "10 years",
      rate: "$28/hr",
      bio: "I'm a patient and reliable nanny with extensive experience with infants and toddlers. I love creating fun, educational activities.",
      img: "portrait+of+a+professional+nanny",
    },
    {
      name: "Emily R.",
      rating: 4.8,
      reviews: 78,
      experience: "5 years",
      rate: "$22/hr",
      bio: "Energetic and fun-loving sitter who enjoys outdoor activities and creative play. Available for evenings and weekends.",
      img: "portrait+of+a+young+caregiver",
    },
  ]

  // Conditionally render the in-home care page
  if (service === "in-home-care") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <InHomeCarePage />
        </main>
      </div>
    )
  }

  // Conditionally render the companion care page
  if (service === "companion-care") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <CompanionCarePage />
        </main>
      </div>
    )
  }

  // Conditionally render the special needs care page
  if (service === "special-needs-care") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <SpecialNeedsCarePage />
        </main>
      </div>
    )
  }

  // Conditionally render the adult companion care page
  if (service === "adult-companion-care") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <AdultCompanionCarePage />
        </main>
      </div>
    )
  }

  // Conditionally render the adult care guide page
  if (service === "adult-care-guide") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <AdultCareGuidePage />
        </main>
      </div>
    )
  }

  // Conditionally render the disability support page
  if (service === "disability-support") {
    return (
      <div className="bg-background text-foreground">
        <main>
          <DisabilitySupportPage />
        </main>
      </div>
    )
  }

  // Default view for other services
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Find Local {serviceTitle}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            At Maya Care, your trust and safety are our priority. Compare local caregivers and hire the best fit for
            your family.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-12">
          <div className="flex items-center space-x-2">
            <Input type="text" placeholder="Enter your ZIP code" className="py-6" />
            <Button size="lg" className="py-6">
              Get started
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            All caregivers with this badge are background checked.{" "}
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caregivers.map((caregiver, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={`/placeholder.svg?width=400&height=300&query=${caregiver.img}`}
                  alt={`Portrait of ${caregiver.name}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{caregiver.name}</CardTitle>
                  <div className="text-right">
                    <div className="font-bold text-lg">{caregiver.rate}</div>
                    <div className="text-xs text-muted-foreground">
                      ★ {caregiver.rating} ({caregiver.reviews} reviews)
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{caregiver.experience} experience</p>
                <p className="text-sm mb-6">{caregiver.bio}</p>
                <Button className="w-full">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
