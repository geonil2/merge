import {useRef} from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import {useRouter} from "next/router";
import {Session} from "next-auth";
import '../../styles/globals.css'
import {generateQueryClient} from "../config/query";
import {COLORS} from "../config/styles";
import {QueryClientProvider, DehydratedState, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RecoilRoot} from "recoil";
import {SessionProvider} from "next-auth/react";
import Header from "../components/header/headerWrap";
import TableLayout from "../components/tableLayout";

function MyApp({ Component, pageProps }: AppProps<{
  session: Session,
  dehydratedState: DehydratedState
}>) {
  const queryClient = useRef(generateQueryClient());
  const router = useRouter();

  const layout = () => {
    if (router.pathname.includes('/writing')) {
      return <Component {...pageProps} />
    }
    return <TableLayout><Component {...pageProps} /></TableLayout>
  }

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
          <QueryClientProvider client={queryClient.current}>
              <Hydrate state={pageProps.dehydratedState}>
                  <Head>
                      <title key="title">Merge</title>
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                      <meta name="description" key="description" content="개발자 소통 커뮤니티" />
                      <meta name="theme-color" content={COLORS.PRIMARY} />
                      <meta property="og:image" content="/images/logo/merge.svg" />
                      <meta property="og:image:alt" content="Merge" />
                  </Head>
                  <Header />
                  {layout()}
                  <div id="modal" />
                  {process.env.NODE_ENV === 'production' ? null : <ReactQueryDevtools initialIsOpen={false} />}
              </Hydrate>
          </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
