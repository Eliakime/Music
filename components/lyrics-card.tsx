"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface LyricsCardProps {
  title: string
  lyrics: string
}

export default function LyricsCard({ title, lyrics }: LyricsCardProps) {
  // Format lyrics with proper line breaks
  const formattedLyrics = lyrics
    .trim()
    .split("\n")
    .map((line, index) => (
      <p key={index} className={line.includes("Refrain:") ? "font-bold mt-4" : ""}>
        {line}
      </p>
    ))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden backdrop-blur-sm h-full">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-6">{title}</h3>
          <div className="prose prose-invert max-w-none space-y-1 text-zinc-300">{formattedLyrics}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
