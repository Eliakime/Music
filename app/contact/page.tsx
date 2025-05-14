"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Send, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Music, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <PageTransition>
      <main className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              CONTACT
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Restons en Contact</h1>
            <p className="max-w-2xl mt-4 text-zinc-400">
              Vous avez une question, une proposition de collaboration ou simplement envie d'échanger ? N'hésitez pas à
              me contacter !
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-white">Envoyez-moi un message</h2>

              {isSubmitted ? (
                <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-amber-500/20">
                      <Send className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">Message envoyé !</h3>
                    <p className="mb-6 text-zinc-400">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                      Envoyer un autre message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
                      Nom
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      required
                      className="bg-zinc-900/50 border-zinc-800 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="bg-zinc-900/50 border-zinc-800 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-400">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      placeholder="Sujet de votre message"
                      required
                      className="bg-zinc-900/50 border-zinc-800 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      rows={6}
                      required
                      className="bg-zinc-900/50 border-zinc-800 focus:border-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 rounded-full bg-amber-500 hover:bg-amber-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold text-white">Retrouvez-moi</h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20">
                        <Phone className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                        <p className="text-zinc-400">+123 456 7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20">
                        <Mail className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <p className="text-zinc-400">contact@eliakime.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="mt-12 mb-6 text-2xl font-semibold text-white">Réseaux sociaux</h2>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Link href="#" className="block transition-transform hover:scale-105">
                  <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm hover:border-amber-500/50">
                    <CardContent className="p-6 text-center">
                      <Instagram className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                      <h3 className="text-sm font-medium text-white">Instagram</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block transition-transform hover:scale-105">
                  <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm hover:border-amber-500/50">
                    <CardContent className="p-6 text-center">
                      <Facebook className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                      <h3 className="text-sm font-medium text-white">Facebook</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block transition-transform hover:scale-105">
                  <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm hover:border-amber-500/50">
                    <CardContent className="p-6 text-center">
                      <Twitter className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                      <h3 className="text-sm font-medium text-white">Twitter</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block transition-transform hover:scale-105">
                  <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm hover:border-amber-500/50">
                    <CardContent className="p-6 text-center">
                      <Youtube className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                      <h3 className="text-sm font-medium text-white">YouTube</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="mt-12">
                <Card className="overflow-hidden border-zinc-800 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20">
                        <Music className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Plateformes de streaming</h3>
                        <p className="text-zinc-400">Retrouvez ma musique sur toutes les plateformes</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="bg-black/50">
                        Spotify
                      </Badge>
                      <Badge variant="outline" className="bg-black/50">
                        Apple Music
                      </Badge>
                      <Badge variant="outline" className="bg-black/50">
                        Deezer
                      </Badge>
                      <Badge variant="outline" className="bg-black/50">
                        SoundCloud
                      </Badge>
                      <Badge variant="outline" className="bg-black/50">
                        Bandcamp
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
