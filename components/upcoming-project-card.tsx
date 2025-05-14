"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface UpcomingProjectCardProps {
  title: string
  date: string
  description: string
  imageUrl: string
  tags: string[]
}

export default function UpcomingProjectCard({ title, date, description, imageUrl, tags }: UpcomingProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <Card
          className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm cursor-pointer h-full"
          onClick={() => setIsOpen(true)}
        >
          <CardContent className="p-0">
            <div className="relative h-48">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center mb-2 text-amber-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{date}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="mb-4 text-sm text-zinc-400 line-clamp-2">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-zinc-900/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">{title}</DialogTitle>
            <DialogDescription className="flex items-center text-amber-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{date}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="relative h-64 mt-4 overflow-hidden rounded-lg">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="mt-4 space-y-4">
            <p className="text-zinc-300">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-zinc-900/50">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="pt-4">
              <Button className="w-full rounded-full bg-amber-500 hover:bg-amber-600">Être notifié</Button>
            </div>
          </div>
          <DialogClose className="absolute top-4 right-4">
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
