"use client"

import { useState, useRef } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/placeholder-music.mp3")
      audioRef.current.volume = volume

      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false)
        setProgress(0)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      })
    }

    if (isPlaying) {
      audioRef.current.pause()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    } else {
      audioRef.current.play()
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100
          setProgress(currentProgress)
        }
      }, 100)
    }

    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * audioRef.current.duration
      audioRef.current.currentTime = newTime
      setProgress(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (audioRef.current) {
      audioRef.current.volume = value[0]
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const currentTime = audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"
  const duration = audioRef.current ? formatTime(audioRef.current.duration || 0) : "3:45"

  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/5">
      <div className="flex items-center gap-2 mb-3">
        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-white hover:bg-white/10">
          <SkipBack className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="default"
          onClick={togglePlay}
          className={cn(
            "h-10 w-10 rounded-full",
            isPlaying ? "bg-white text-black hover:bg-white/90" : "bg-white text-black hover:bg-white/90",
          )}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>

        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-white hover:bg-white/10">
          <SkipForward className="h-4 w-4" />
        </Button>

        <div className="text-xs text-zinc-400 ml-2">
          {currentTime} / {duration}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Volume2 className="h-4 w-4 text-zinc-400" />
          <Slider
            defaultValue={[volume]}
            max={1}
            step={0.01}
            value={[volume]}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>
      </div>

      <Slider
        defaultValue={[0]}
        max={100}
        step={0.1}
        value={[progress]}
        onValueChange={handleProgressChange}
        className="w-full"
      />
    </div>
  )
}
