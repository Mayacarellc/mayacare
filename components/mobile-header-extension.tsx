"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, ChevronDown } from "lucide-react"

interface MobileHeaderExtensionProps {
  isAdminPage: boolean
}

export function MobileHeaderExtension({ isAdminPage }: MobileHeaderExtensionProps) {
  if (isAdminPage) return null

  return (
    <div className="md:hidden bg-greentea border-b border-deepgreen/10">
      {/* Phone Button */}
      <div className="px-4 py-4 bg-greentea">
        <Button
          variant="outline"
          className="w-full rounded-full bg-white border-2 border-deepgreen text-deepgreen font-semibold py-5 text-lg hover:bg-greentea transition-colors"
          asChild
        >
          <a href="tel:4129530622" className="flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>4129530622</span>
          </a>
        </Button>
      </div>
    </div>
  )
} 