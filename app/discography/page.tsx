"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"
import TrackCard from "@/components/track-card"

// Mock data for tracks
const tracks = {
  afro: [
    {
      id: "afro-1",
      title: "Rhythmic Patterns",
      description: "Une exploration des rythmes traditionnels africains avec une touche électronique moderne.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2023",
    },
    {
      id: "afro-2",
      title: "Lagos Nights",
      description: "Inspiré par l'énergie vibrante des nuits de Lagos, ce morceau fusionne afrobeat et électro.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "afro-3",
      title: "Tribal Code",
      description: "Une programmation rythmique inspirée des percussions traditionnelles d'Afrique de l'Ouest.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "afro-4",
      title: "Sahel Sunrise",
      description: "Mélodies inspirées du désert du Sahel, avec des influences de musique touareg et électronique.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2021",
    },
  ],
  chill: [
    {
      id: "chill-1",
      title: "Midnight Coding",
      description:
        "Créé lors d'une session nocturne de programmation, ce morceau capture l'ambiance des nuits créatives.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2023",
    },
    {
      id: "chill-2",
      title: "Digital Rain",
      description:
        "Des mélodies apaisantes inspirées par le son de la pluie sur une fenêtre, traduit en langage numérique.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "chill-3",
      title: "Ambient Workspace",
      description: "Une ambiance sonore conçue pour accompagner les sessions de travail et stimuler la créativité.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "chill-4",
      title: "Floating Algorithms",
      description:
        "Une exploration sonore de la beauté des algorithmes, traduite en mélodies flottantes et textures ambiantes.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2021",
    },
  ],
  experimental: [
    {
      id: "exp-1",
      title: "Generative Composition #1",
      description: "Une pièce créée à l'aide d'un algorithme de composition générative que j'ai programmé.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2023",
    },
    {
      id: "exp-2",
      title: "Binary Emotions",
      description: "Une exploration de la traduction d'émotions humaines en séquences binaires puis en musique.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "exp-3",
      title: "Neural Network Symphony",
      description:
        "Composition créée en collaboration avec un réseau de neurones que j'ai entraîné sur mes propres œuvres.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2022",
    },
    {
      id: "exp-4",
      title: "Quantum Frequencies",
      description:
        "Une expérimentation sonore inspirée par les principes de la physique quantique et les ondes de probabilité.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      audioUrl: "/placeholder-music.mp3",
      year: "2021",
    },
  ],
}

export default function DiscographyPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [activeTab, setActiveTab] = useState(categoryParam || "afro")

  useEffect(() => {
    if (categoryParam && ["afro", "chill", "experimental"].includes(categoryParam)) {
      setActiveTab(categoryParam)
    }
  }, [categoryParam])

  return (
    <PageTransition>
      <main className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              DISCOGRAPHIE
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Ma Musique</h1>
            <p className="max-w-2xl mt-4 text-zinc-400">
              Explorez ma collection musicale à travers différents genres et ambiances
            </p>
          </div>

          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-800/50 p-1 rounded-full">
                <TabsTrigger value="afro" className="rounded-full px-6 py-2 text-sm">
                  Afro
                </TabsTrigger>
                <TabsTrigger value="chill" className="rounded-full px-6 py-2 text-sm">
                  Chill
                </TabsTrigger>
                <TabsTrigger value="experimental" className="rounded-full px-6 py-2 text-sm">
                  Expérimental
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="afro" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tracks.afro.map((track) => (
                  <TrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    imageUrl={track.imageUrl}
                    audioUrl={track.audioUrl}
                    year={track.year}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chill" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tracks.chill.map((track) => (
                  <TrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    imageUrl={track.imageUrl}
                    audioUrl={track.audioUrl}
                    year={track.year}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experimental" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tracks.experimental.map((track) => (
                  <TrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    imageUrl={track.imageUrl}
                    audioUrl={track.audioUrl}
                    year={track.year}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </PageTransition>
  )
}
