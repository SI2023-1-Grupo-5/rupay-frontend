import { GlobalStyle } from '@/styles/globals'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from '@/contexts/AuthContext';



export default function App({ Component, pageProps:{ session, ...pageProps } }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}
