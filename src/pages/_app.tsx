import {useRef} from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import '../../styles/globals.css'
import {generateQueryClient} from "../config/query";
import {COLORS} from "../config/styles";
import {QueryClientProvider, DehydratedState, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RecoilRoot} from "recoil";
import Header from "../components/header/headerWrap";
import TableLayout from "../components/tableLayout";

function MyApp({ Component, pageProps }: AppProps<{
  dehydratedState: DehydratedState
}>) {
  const queryClient = useRef(generateQueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title key="title">Merge: 개발자 커뮤니티 플랫폼</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" key="description" content="개발자의, 개발자에 의한, 개발자를 위한 소통 커뮤니티 플랫폼" />
            <meta name="theme-color" content={COLORS.PRIMARY} />
            <meta property="og:image" content="/images/logo/merge.svg" />
            <meta property="og:image:alt" content="Merge" />
          </Head>
          <Header />
          {/*<TableLayout><Component {...pageProps} /></TableLayout>*/}
          <Component {...pageProps} />
          <div id="modal" />
          {process.env.NODE_ENV === 'production' ? null : <ReactQueryDevtools initialIsOpen={false} />}
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
