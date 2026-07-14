import { Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Kontakt</p>
        <h2 className="font-serif text-3xl font-semibold uppercase text-balance md:text-4xl">
          Skontaktuj się z nami i zadbaj o czystość oraz estetykę swojego otoczenia!
        </h2>
        <p className="max-w-prose leading-relaxed text-primary-foreground/80 text-pretty">
          Zapraszamy do kontaktu w celu przygotowania indywidualnej oferty dopasowanej do Państwa
          potrzeb.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            nativeButton={false}
            render={<a href="tel:+48601539070" />}
          >
            <Phone className="size-4" aria-hidden="true" />
            +48 601 539 070
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            nativeButton={false}
            render={<a href="mailto:kontakt@horyzont.info" />}
          >
            <Mail className="size-4" aria-hidden="true" />
            kontakt@horyzont.info
          </Button>
        </div>
      </div>
    </section>
  )
}
