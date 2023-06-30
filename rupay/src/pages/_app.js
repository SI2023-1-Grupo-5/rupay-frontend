import { GlobalStyle } from '@/styles/globals'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SessionProvider } from "next-auth/react"



export default function App({ Component, pageProps:{ session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
