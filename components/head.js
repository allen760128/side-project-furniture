import Head from 'next/head';

const head = () => {
    return (
        <Head>
            {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self' " /> */}

            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default head;