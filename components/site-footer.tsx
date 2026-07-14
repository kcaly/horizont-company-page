import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image src="/images/logo.png" alt="Horyzont – logo" width={140} height={105} className="h-14 w-auto" />
          <p className="text-sm text-muted-foreground">Horyzont</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <p>NIP: 5981661978</p>
          <p>REGON: 543191643</p>
          <p>KRS: 0001204191</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <a href="tel:+48601539070" className="transition-colors hover:text-foreground">
            +48 601 539 070
          </a>
          <a href="mailto:kontakt@horyzont.info" className="transition-colors hover:text-foreground">
            kontakt@horyzont.info
          </a>
        </div>
      </div>
    </footer>
  )
}
