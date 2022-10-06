import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClientProvider} from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <QueryClientProvider>

        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )
}

export default MyApp
