import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Horyzont — usługi dla firm i klientów indywidualnych
          </p>
          <h1 className="font-serif text-4xl font-semibold uppercase leading-tight text-balance md:text-5xl">
            Kompleksowa obsługa porządkowa i pielęgnacja zieleni
          </h1>
          <p className="max-w-prose leading-relaxed text-primary-foreground/80 text-pretty">
            Szukasz rzetelnej firmy do utrzymania czystości i estetyki wokół Twojego obiektu?
            Dobrze trafiłeś! Oferujemy profesjonalne usługi dla klientów indywidualnych oraz firm
            &ndash; zarówno dla małych posesji, jak i dużych obiektów.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              nativeButton={false}
              render={<a href="tel:+48665671464" />}
            >
              <Phone className="size-4" aria-hidden="true" />
              Zadzwoń: +48 601 539 070
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
              render={<a href="#oferta" />}
            >
              Zobacz ofertę
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/hero-window-cleaning.png"
            alt="Profesjonalne mycie przeszkleń nowoczesnego obiektu"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
