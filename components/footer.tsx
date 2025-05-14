import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-zinc-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block mb-4 text-2xl font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                ELIAKIME
              </span>
            </Link>
            <p className="text-zinc-400">Artiste • Producteur • Développeur</p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500">
                <Music className="w-5 h-5" />
                <span className="sr-only">Spotify</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/discography" className="text-zinc-400 hover:text-amber-500">
                  Discographie
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-amber-500">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-amber-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@eliakime.com" className="hover:text-amber-500">
                  contact@eliakime.com
                </a>
              </li>
              <li className="text-zinc-400">
                <span className="block">WhatsApp:</span>
                <span>+123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-zinc-800">
          <p className="text-zinc-500">&copy; {new Date().getFullYear()} Eliakime. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
