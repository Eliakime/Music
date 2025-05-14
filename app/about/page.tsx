import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Music, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              À PROPOS
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Qui est Eliakime?</h1>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-zinc-300">
                <p className="text-xl leading-relaxed">
                  Je suis <span className="text-amber-500 font-semibold">Eliakime</span>, artiste-producteur et
                  développeur, naviguant entre les mondes de la musique et du code depuis plus de 10 ans.
                </p>

                <p className="leading-relaxed">
                  Mon parcours a commencé dans ma chambre, avec un simple ordinateur et une passion dévorante pour les
                  sons. J'ai rapidement découvert que la programmation et la composition musicale partageaient une même
                  essence : la création de structures complexes à partir d'éléments simples.
                </p>

                <p className="leading-relaxed">
                  Chaque morceau que je crée est le fruit d'une double vision : celle de l'artiste qui ressent et celle
                  du développeur qui structure. Cette dualité me permet d'explorer des territoires sonores uniques, où
                  l'émotion rencontre la précision technique.
                </p>

                <p className="leading-relaxed">
                  Mes influences sont aussi diverses que mes compétences : des rythmes traditionnels africains aux
                  sonorités électroniques les plus avant-gardistes, en passant par les ambiances méditatives qui
                  accompagnent mes sessions de programmation.
                </p>

                <p className="leading-relaxed">
                  Aujourd'hui, je consacre mon temps à créer des expériences sonores qui racontent des histoires, tout
                  en développant des outils numériques qui repoussent les limites de la création musicale. Cette
                  synergie entre art et technologie est au cœur de mon identité.
                </p>

                <div className="pt-4">
                  <p className="text-xl italic text-amber-500">
                    "La musique et le code sont deux langages universels qui permettent de créer des mondes. Je suis
                    simplement un traducteur entre ces deux univers."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-4">
                <div className="p-4 text-center bg-black/50 rounded-xl backdrop-blur-sm border border-zinc-800">
                  <Music className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <h3 className="text-lg font-semibold text-white">Producteur</h3>
                </div>
                <div className="p-4 text-center bg-black/50 rounded-xl backdrop-blur-sm border border-zinc-800">
                  <Code className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <h3 className="text-lg font-semibold text-white">Développeur</h3>
                </div>
                <div className="p-4 text-center bg-black/50 rounded-xl backdrop-blur-sm border border-zinc-800">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <h3 className="text-lg font-semibold text-white">Innovateur</h3>
                </div>
                <div className="p-4 text-center bg-black/50 rounded-xl backdrop-blur-sm border border-zinc-800">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <h3 className="text-lg font-semibold text-white">Explorateur</h3>
                </div>
              </div>

              <div className="mt-12">
                <Button asChild size="lg" className="gap-2 rounded-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/contact">
                    Me contacter <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="sticky top-24 space-y-8">
                <div className="overflow-hidden rounded-xl border-2 border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Eliakime in studio"
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Eliakime performing"
                      width={300}
                      height={300}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Eliakime coding"
                      width={300}
                      height={300}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
