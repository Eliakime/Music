"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface TrackCardProps {
  title: string
  year: string
  imageUrl: string
}

export default function TrackCard({ title, year, imageUrl }: TrackCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              <Button
                size="icon"
                className="h-12 w-12 rounded-full bg-white text-black hover:bg-white/90 shadow-xl"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-zinc-400">{year}</p>
            <Button
              size="icon"
              variant="ghost"
              className="mt-2 h-8 w-8 rounded-full hover:bg-white/10"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
