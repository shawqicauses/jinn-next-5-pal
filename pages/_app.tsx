// Done Reviewing
import type {AppProps} from "next/app"
import {Footer, Navbar} from "../components"
import {AuthProvider} from "../stores/auth"
import "../styles/globals.css"

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}
