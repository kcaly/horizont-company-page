import Image from 'next/image'
import { Check } from 'lucide-react'

const reasons = [
  'Indywidualne podejście do każdego klienta',
  'Elastyczne warunki współpracy',
  'Oferty dopasowane do potrzeb i specyfiki obiektu',
  'Przejrzyste zasady',
  'Stała lub jednorazowa obsługa – w zależności od oczekiwań',
]

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Dlaczego warto z nami współpracować?
          </p>
          <h2 className="font-serif text-3xl font-semibold uppercase text-balance md:text-4xl">
            Doświadczenie, które gwarantuje jakość
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Do każdego klienta podchodzimy indywidualnie, dopasowując zakres usług do konkretnych
            potrzeb i oczekiwań. Posiadamy doświadczenie, które gwarantuje wysoką jakość
            świadczonych usług.
          </p>
          <ul className="flex flex-col gap-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-lg border-l-4 border-accent bg-muted p-4 leading-relaxed text-pretty">
            Każdą ofertę przygotowujemy indywidualnie &ndash; dopasowaną do Twoich potrzeb i
            wielkości obiektu.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/pressure-washing.png"
            alt="Prace porządkowe – mycie ciśnieniowe nawierzchni przy obiekcie"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
