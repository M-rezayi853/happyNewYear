import { ChakraProvider } from '@chakra-ui/react'

import { RtlProvider } from '../components/rtlProvider'
import theme from '../public/theme'
import Fonts from '../public/fonts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  )
}

export default MyApp
