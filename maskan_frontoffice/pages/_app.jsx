import PropertyContextProvider from '@/context/property'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PropertyContextProvider>
      <Component {...pageProps} />
    </PropertyContextProvider>
  )
}
