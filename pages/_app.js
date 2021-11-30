import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head"

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>Create Next App</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
