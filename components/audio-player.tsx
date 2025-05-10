"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function AudioPlayer() {
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

    // Cleanup
    return () => {
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
    <div
      className={cn(
        "bg-zinc-800/90 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg",
        expanded ? "p-4 w-64" : "p-2 w-12",
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={togglePlay}
          className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        {expanded && (
          <>
            <div className="flex items-center gap-2 flex-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
                className="h-6 w-6 rounded-full hover:bg-white/10 text-white"
              >
                {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
              </Button>
              <Slider
                defaultValue={[volume]}
                max={1}
                step={0.01}
                value={[isMuted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                className="w-24"
              />
            </div>
            <span className="text-xs text-white/70">Ambiance</span>
          </>
        )}
      </div>
    </div>
  )
}
