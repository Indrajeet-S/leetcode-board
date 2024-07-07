"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )

  let features: Array<string> = [
    "Dedicated WhiteBoard for each problem",
    "Persistence to cloud storage",
    "Access Notes anytime & anywhere",
    "In the spirit of Excalidraw",
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 basis-3/4">
            <div className="p-1 bg-gradient-to-r from-green-400 to-blue-500">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold underline decoration-sky-500 text-purple-400">
                    {features[index]}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
