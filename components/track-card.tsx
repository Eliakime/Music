"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AudioPlayer from "@/components/audio-player"
import { motion } from "framer-motion"

interface TrackCardProps {
  title: string
  description: string
  imageUrl: string
  audioUrl: string
  year: string
}

export default function TrackCard({ title, description, imageUrl, audioUrl, year }: TrackCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm h-full">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Button
                size="icon"
                className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-black"
                onClick={handlePlay}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </Button>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-1 text-xs bg-black/70 rounded-full backdrop-blur-sm text-zinc-300">{year}</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
            <p className="mb-4 text-sm text-zinc-400 line-clamp-2">{description}</p>
            <AudioPlayer audioUrl={audioUrl} onPlay={() => setIsPlaying(true)} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
