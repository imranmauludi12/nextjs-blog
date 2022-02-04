import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout"

export default function FirstPost() {
    return <div>
        <Layout>
        <Head>
            <title>First Post Page</title>
            <link rel="stylesheet" href="/css/first-post.css" />
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => {
                console.log("succesfully load script fb sdk")
            }}
        />
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}

        <h1>First Post</h1>
        <h2>
        {/* <Link href="/">
          <a>Back to home</a>
        </Link> */}
      </h2>
      </Layout>
    </div>
  }