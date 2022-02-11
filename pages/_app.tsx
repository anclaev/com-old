import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import { AppProps } from "next/app"
import { useMemo } from "react"
import Head from "next/head"

import English from "../content/compiled-locales/en.json"
import Russian from "../content/compiled-locales/ru.json"
import { Locale } from "content/locales"

import "@styles/globals.sass"

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter() as { locale: Locale }

  const messages = useMemo(() => {
    switch (locale) {
      case "ru":
        return Russian
      case "en":
        return English
      default:
        return English
    }
  }, [locale])

  return (
    <IntlProvider messages={messages} locale={locale} onError={() => null}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App
