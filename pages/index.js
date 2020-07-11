import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
export async function getStaticProps({params}) {
  console.log(`Param is ${params}`)
  const Data = getSortedPostsData()
  
  return {
    props: {
      Data
    }
  }
}
export default function Home({ Data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am student in Engineer of technology - Viet Nam University</p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {Data.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
          ))}
        </ul>
      </section>
      <Link href = 'posts/first-post'><a>← Go to post</a></Link>
    </Layout>
  )
}