"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"
import { motion } from "framer-motion"

interface FeaturedTrackProps {
  title: string
  description: string
  imageUrl: string
  audioUrl: string
}

export default function FeaturedTrack({ title, description, imageUrl, audioUrl }: FeaturedTrackProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border-2 border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.2)]"
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Button
            size="lg"
            onClick={handlePlay}
            className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-600 text-black"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center"
      >
        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="mb-6 text-zinc-300">{description}</p>
        <AudioPlayer audioUrl={audioUrl} onPlay={() => setIsPlaying(true)} />
      </motion.div>
    </div>
  )
}
