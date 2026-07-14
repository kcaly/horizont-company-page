import { Building2, CalendarCheck, Leaf, Snowflake, Sparkles, SprayCan } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Pielęgnacja terenów zielonych',
    description: 'Koszenie trawy, przycinanie krzewów i żywopłotów, porządkowanie terenów.',
  },
  {
    icon: Building2,
    title: 'Sprzątanie obiektów',
    description: 'Bieżące utrzymanie czystości i estetyki posesji, firm oraz obiektów przemysłowych.',
  },
  {
    icon: SprayCan,
    title: 'Mycie okien i przeszkleń',
    description: 'Również na wysokościach i w obiektach przemysłowych.',
  },
  {
    icon: Sparkles,
    title: 'Prace porządkowe wewnątrz i na zewnątrz',
    description: 'Kompleksowe prace porządkowe na terenach zewnętrznych i wewnętrznych.',
  },
  {
    icon: Snowflake,
    title: 'Odśnieżanie i zimowe utrzymanie terenu',
    description: 'Usuwanie śniegu i oblodzeń, posypywanie nawierzchni.',
  },
  {
    icon: CalendarCheck,
    title: 'Sezonowe przygotowanie terenów',
    description: 'Przygotowanie posesji i obiektów do każdej pory roku.',
  },
]

export function Services() {
  return (
    <section id="oferta" className="scroll-mt-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Zakres usług
          </p>
          <h2 className="font-serif text-3xl font-semibold uppercase text-balance md:text-4xl">
            Nasza oferta
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Dzięki zdobytemu doświadczeniu oraz odpowiedniemu zapleczu technicznemu gwarantujemy
            wysoką jakość usług, terminowość oraz bezpieczeństwo realizowanych prac.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-balance">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
