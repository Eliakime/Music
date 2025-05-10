"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function BackgroundAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [expanded, setExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/placeholder-music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = volume

    // Auto-play with user interaction (click anywhere)
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        setIsPlaying(true)
        document.removeEventListener("click", handleFirstInteraction)
      }
    }

    document.addEventListener("click", handleFirstInteraction)

    // Cleanup
    return () => {
      document.removeEventListener("click", handleFirstInteraction)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error)
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (value[0] > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={cn(
          "bg-black/80 backdrop-blur-lg rounded-full transition-all duration-300 shadow-lg border border-white/10",
          expanded ? "p-4" : "p-3",
        )}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            onClick={togglePlay}
            className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="flex items-center gap-3 overflow-hidden"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleMute}
                  className="h-8 w-8 rounded-full hover:bg-white/10 text-white flex-shrink-0"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  defaultValue={[volume]}
                  max={1}
                  step={0.01}
                  value={[isMuted ? 0 : volume]}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
                <span className="text-xs text-white/70 whitespace-nowrap">Ambiance Musicale</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
