"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface GalleryItemProps {
  imageUrl: string
  alt: string
}

export default function GalleryItem({ imageUrl, alt }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-square overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-black/60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-white/30 text-white hover:bg-white/20 hover:text-white"
        >
          Agrandir
        </Button>
      </motion.div>
    </motion.div>
  )
}
