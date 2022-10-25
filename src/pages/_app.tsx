import {useRef} from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import '../../styles/globals.css'
import {generateQueryClient} from "../config/query";
import {COLORS} from "../config/styles";
import {RecoilRoot} from "recoil";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Hydrate} from "@tanstack/react-query";
import Header from "../components/header/headerWrap/header";
import {SessionProvider} from "next-auth/react";
import TableLayout from "../components/TableLayout";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(generateQueryClient());
  const router = useRouter();

  const layout = () => {
    if (router.pathname === '/writing') {
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
                        <meta property="og:image" content="/images/og_image.png" />
                        <meta property="og:image:alt" content="Merge" />
                    </Head>
                    <Header />
                    {layout()}
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </RecoilRoot>
      </SessionProvider>
  )
}

export default MyApp
