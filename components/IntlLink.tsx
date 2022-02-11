import { useRouter } from "next/router"
import Link from "next/link"

import { Locale } from "content/locales"

type IntlLinkComponent = {
  href: string
  anotherLocale?: boolean
}

const changeLocale = (locale: Locale) => (locale === "ru" ? "en" : "ru")

const IntlLink: React.FC<IntlLinkComponent> = ({
  children,
  href,
  anotherLocale = false,
}) => {
  const { locale } = useRouter() as { locale: Locale }

  return (
    <Link href={href} locale={anotherLocale ? changeLocale(locale) : locale}>
      {children}
    </Link>
  )
}

export default IntlLink
