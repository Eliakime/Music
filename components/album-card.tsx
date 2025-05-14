"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Pause, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AudioPlayer from "@/components/audio-player"
import { motion } from "framer-motion"

interface AlbumCardProps {
  title: string
  category: string
  imageUrl: string
  audioUrl: string
  href: string
}

export default function AlbumCard({ title, category, imageUrl, audioUrl, href }: AlbumCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handlePlay = () => {
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
      <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm">
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
              className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
              }}
            >
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-600 text-black"
                onClick={handlePlay}
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
              </Button>
            </div>
            <div className="absolute top-3 left-3">
              <Badge variant="outline" className="bg-black/70 backdrop-blur-sm">
                {category}
              </Badge>
            </div>
          </div>
          <div className="p-5">
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <div className="flex items-center justify-between mt-4">
              <AudioPlayer audioUrl={audioUrl} minimal onPlay={() => setIsPlaying(true)} />
              <Button asChild variant="ghost" size="sm" className="rounded-full hover:bg-white/10">
                <Link href={href}>
                  <span className="sr-only">Voir</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
