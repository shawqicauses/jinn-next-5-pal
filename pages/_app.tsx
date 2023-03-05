// Done Reviewing
import type {AppProps} from "next/app"
import {Fragment} from "react"
import {Footer, HeaderFilter, Navbar} from "../components"
import "../styles/globals.css"

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <HeaderFilter />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}
