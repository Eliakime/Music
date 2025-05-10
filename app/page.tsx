import Image from "next/image"
import { Play, Instagram, Twitter, Mail, Music, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MusicPlayer from "@/components/music-player"
import BackgroundAudioPlayer from "@/components/background-audio-player"
import AlbumCard from "@/components/album-card"
import TrackCard from "@/components/track-card"
import LyricsCard from "@/components/lyrics-card"
import GalleryItem from "@/components/gallery-item"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      {/* Hero Section with Animated Background */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-zinc-900/90 z-20"></div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center animate-pulse opacity-40"></div>
        </div>

        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-6 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Artist Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">Nom d'Artiste</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-zinc-300 mb-8">Musicien • Compositeur • Artiste</p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Headphones className="mr-2 h-5 w-5" />
              Écouter
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
              <Music className="mr-2 h-5 w-5" />
              Découvrir
            </Button>
          </div>
        </div>
      </section>

      {/* Background Audio Player */}
      <BackgroundAudioPlayer />

      {/* Music Section */}
      <section className="container mx-auto py-24 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              DISCOGRAPHIE
            </Badge>
            <h2 className="text-4xl font-bold">Ma Musique</h2>
          </div>
          <p className="text-zinc-400 max-w-md mt-2 md:mt-0">
            Découvrez mes dernières créations musicales, albums et singles.
          </p>
        </div>

        <Tabs defaultValue="albums" className="w-full">
          <TabsList className="mb-12 bg-zinc-800/50 p-1 rounded-full w-fit">
            <TabsTrigger value="albums" className="rounded-full px-6">
              Albums
            </TabsTrigger>
            <TabsTrigger value="singles" className="rounded-full px-6">
              Singles
            </TabsTrigger>
            <TabsTrigger value="playlists" className="rounded-full px-6">
              Playlists
            </TabsTrigger>
          </TabsList>

          <TabsContent value="albums" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((album) => (
                <AlbumCard
                  key={album}
                  title={`Album ${album}`}
                  year="2023"
                  tracks={8}
                  imageUrl={`/placeholder.svg?height=500&width=500&text=Album ${album}`}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="singles" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((single) => (
                <TrackCard
                  key={single}
                  title={`Single ${single}`}
                  year="2023"
                  imageUrl={`/placeholder.svg?height=300&width=300&text=Single ${single}`}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playlists" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((playlist) => (
                <Card key={playlist} className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 aspect-square">
                        <Image
                          src={`/placeholder.svg?height=400&width=400&text=Playlist ${playlist}`}
                          alt={`Playlist ${playlist}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold mb-2">Playlist {playlist}</h3>
                        <p className="text-zinc-400 mb-4">Une collection de mes morceaux préférés</p>
                        <MusicPlayer />
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                          <li className="flex justify-between">
                            <span>Titre 1</span>
                            <span>3:45</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Titre 2</span>
                            <span>4:12</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Titre 3</span>
                            <span>3:21</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Featured Track with Player */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3] max-w-lg">
              <Image
                src="/placeholder.svg?height=800&width=800&text=Featured Track"
                alt="Featured Track"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <Badge variant="outline">MORCEAU À LA UNE</Badge>
              <h2 className="text-4xl font-bold">Titre du Morceau Principal</h2>
              <p className="text-zinc-300">
                Ce morceau représente parfaitement mon univers musical. Une fusion de styles qui crée une ambiance
                unique et immersive.
              </p>
              <MusicPlayer />
              <div className="pt-4">
                <Button variant="outline" className="rounded-full">
                  Voir les paroles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge variant="outline" className="mb-4">
                PAROLES
              </Badge>
              <h2 className="text-4xl font-bold">Mes Textes</h2>
            </div>
            <p className="text-zinc-400 max-w-md mt-2 md:mt-0">
              Plongez dans l'univers de mes paroles, où chaque mot raconte une histoire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LyricsCard
              title="Titre de la Chanson 1"
              lyrics={`
                Voici le premier couplet de ma chanson
                Avec des paroles qui touchent le cœur
                Une mélodie qui reste dans la tête
                Et un message qui résonne en chacun

                Refrain:
                Voici mon refrain accrocheur
                Qui se répète et qu'on retient
                Des mots simples mais puissants
                Qui font vibrer l'âme et l'esprit
              `}
            />

            <LyricsCard
              title="Titre de la Chanson 2"
              lyrics={`
                Second titre, nouvelles émotions
                Des mots qui racontent une histoire différente
                Un rythme qui fait battre le cœur
                Une ambiance qui transporte ailleurs

                Refrain:
                Les mots s'envolent comme des oiseaux
                La musique nous porte plus haut
                Ensemble dans cette mélodie
                Qui nous unit pour la vie
              `}
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8">
              Voir tous les textes
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge variant="outline" className="mb-4">
                VISUEL
              </Badge>
              <h2 className="text-4xl font-bold">Galerie</h2>
            </div>
            <p className="text-zinc-400 max-w-md mt-2 md:mt-0">Explorez l'univers visuel qui accompagne ma musique.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <GalleryItem
                key={item}
                imageUrl={`/placeholder.svg?height=400&width=400&text=Image ${item}`}
                alt={`Gallery Image ${item}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            CONTACT
          </Badge>
          <h2 className="text-4xl font-bold mb-8">Suivez-moi</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-12">
            Restez connecté pour ne manquer aucune de mes nouvelles sorties, concerts et actualités.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Headphones className="mr-2 h-5 w-5" />
              Spotify
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-zinc-400">© 2023 Nom d'Artiste. Tous droits réservés.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
