import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BackgroundAudioPlayer from "@/components/background-audio-player"
import FeaturedTrack from "@/components/featured-track"
import AlbumCard from "@/components/album-card"
import UpcomingProjectCard from "@/components/upcoming-project-card"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent blur-3xl"></div>
            </div>
          </div>

          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 overflow-hidden rounded-full border-4 border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                <Image
                  src="/Eliakim.png?height=200&width=200"
                  alt="Eliakime"
                  width={200}
                  height={200}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  ELIAKIM CLAUVIS
                </span>
              </h1>
              <p className="max-w-2xl mb-8 text-xl text-zinc-300">Artiste • Producteur • Développeur</p>
              <p className="max-w-xl mb-10 text-zinc-400 italic">
                "La musique est mon code, et le code est ma musique. Deux langages pour exprimer une vision unique."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="gap-2 rounded-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/discography">
                    Découvrir ma musique <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-zinc-700 hover:bg-zinc-800"
                >
                  <Link href="/about">
                    À propos de moi <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Background Audio Player */}
          <BackgroundAudioPlayer />
        </section>

        {/* Featured Track */}
        <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                MORCEAU À LA UNE
              </Badge>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Dernière Création</h2>
            </div>

            <FeaturedTrack
              title="L'A.D.O"
              description="Une fusion entre rythmes électroniques et mélodies organiques, créée au carrefour de la programmation et de l'intuition musicale."
              imageUrl="/Ado.png?height=600&width=600"
              audioUrl="/placeholder-music.mp3"
            />
          </div>
        </section>

        {/* Discography Preview */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                DISCOGRAPHIE
              </Badge>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Explorez Ma Musique</h2>
              <p className="max-w-2xl mt-4 text-zinc-400">
                Découvrez mes créations musicales à travers différents univers sonores
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AlbumCard
                title="Afro Rhythms"
                category="Afro"
                imageUrl="/placeholder.svg?height=500&width=500"
                audioUrl="/placeholder-music.mp3"
                href="/discography?category=afro"
              />
              <AlbumCard
                title="Digital Chill"
                category="Chill"
                imageUrl="/placeholder.svg?height=500&width=500"
                audioUrl="/placeholder-music.mp3"
                href="/discography?category=chill"
              />
              <AlbumCard
                title="Code & Sound"
                category="Expérimental"
                imageUrl="/placeholder.svg?height=500&width=500"
                audioUrl="/placeholder-music.mp3"
                href="/discography?category=experimental"
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/discography">Voir toute la discographie</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                PROJETS À VENIR
              </Badge>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Ce Qui Arrive Bientôt</h2>
              <p className="max-w-2xl mt-4 text-zinc-400">
                Un aperçu des projets sur lesquels je travaille actuellement
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <UpcomingProjectCard
                title="Live Session - Studio 54"
                date="15 Juin 2025"
                description="Une session live exclusive où je présenterai mes nouveaux morceaux dans une ambiance intimiste."
                imageUrl="/placeholder.svg?height=400&width=600"
                tags={["Live", "Nouveau Matériel", "Exclusif"]}
              />
              <UpcomingProjectCard
                title="EP Collaboration - Digital Fusion"
                date="Août 2025"
                description="Un EP collaboratif avec des artistes internationaux, fusionnant différents styles et influences."
                imageUrl="/placeholder.svg?height=400&width=600"
                tags={["EP", "Collaboration", "Fusion"]}
              />
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-zinc-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl p-8 mx-auto text-center bg-black/50 rounded-xl backdrop-blur-sm border border-zinc-800">
              <p className="mb-6 text-xl italic text-zinc-300 md:text-2xl">
                "Je crée des mondes sonores comme je développe des applications : avec passion, précision et une vision
                claire de ce que je veux transmettre."
              </p>
              <p className="text-amber-500 font-semibold">— Eliakim Clauvis</p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
