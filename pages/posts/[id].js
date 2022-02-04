import Layout from "../../components/Layout";
import { getAllPostId, getPostData } from "../../lib/posts"
import Link from "next/link";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css"

export async function getStaticPaths() {
    const paths = getAllPostId()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return <Layout>
        <Head>
        <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingX1}>{postData.title}</h1>
            <div className="utilStyles.lightText">
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
        </article>
    </Layout>
}
