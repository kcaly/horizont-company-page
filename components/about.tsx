import Image from 'next/image'

export function About() {
  return (
    <section id="o-nas" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg md:order-1">
          <Image
            src="/images/green-care.png"
            alt="Pielęgnacja terenów zielonych – przycinanie żywopłotu"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="order-1 flex flex-col gap-5 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">O nas</p>
          <h2 className="font-serif text-3xl font-semibold uppercase text-balance md:text-4xl">
            Profesjonalna obsługa terenów i obiektów
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Oferujemy kompleksowe usługi w zakresie utrzymania czystości oraz pielęgnacji terenów
            zewnętrznych i obiektów. Nasza firma to połączenie doświadczenia, rzetelności oraz
            nowoczesnego podejścia do obsługi klienta &ndash; dzięki czemu jesteśmy w stanie
            sprostać zarówno standardowym, jak i najbardziej wymagającym zleceniom.
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Posiadamy wieloletnie doświadczenie w branży, zdobywane podczas obsługi różnorodnych
            obiektów &ndash; od dużych kompleksów, sklepów i firm, po mniejsze przestrzenie oraz
            domy prywatne. Dzięki temu doskonale rozumiemy potrzeby zarówno klientów biznesowych,
            jak i indywidualnych, zapewniając najwyższą jakość usług oraz pełne dopasowanie do
            oczekiwań.
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Stawiamy na dokładność i terminowość, dzięki czemu masz pewność, że każde zlecenie
            zostanie wykonane solidnie i na czas. Pracujemy na nowoczesnym sprzęcie, co pozwala nam
            działać sprawnie i skutecznie.
          </p>
        </div>
      </div>
    </section>
  )
}
