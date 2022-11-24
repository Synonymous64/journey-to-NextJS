import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
//! Next JS inbuilt script component 
// import Script from 'next/script'

export default function Home() {
  // console.log(styles);
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        h2{
          font-size:32px;
        }
        h3{
          font-size:28px;
        }
    `}
      </style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="nextjs, Geek Coding blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainNav}>
        <ul>
          <Link href="/" legacyBehavior><a><li>Home</li></a></Link>
          <Link href="/about" legacyBehavior><a><li>About</li></a></Link>
          <Link href="/blog" legacyBehavior><a><li>Blog</li></a></Link>
          <Link href="/contact" legacyBehavior><a><li>Contact</li></a></Link>
        </ul>
      </nav>
      {/* To load a third-party script in a single route, import next/script and include the script directly in your page component: */}
      {/* The script will only be fetched and executed when this specific page is loaded on the browser. */}
      {/* lazy load */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='mySpan dummy'>
            GeCode
          </span>
        </h1>
        <div className={styles.imgWrapper}>
          <Image src="/homeimg.webp" className={styles.myImg} alt="img1" width={400} height={200} />
        </div>
        <div className={styles.description}>
          <p className={styles.fontStyle}>
            A Special blog dedicated to all the coders ensuring
            there prolificacy by providing optimal solutions to plethoric bugs 😊
          </p>
        </div>
        {/* <div className={`${styles2.con} ${styles1.con} ` }> */}
        <div>
          <div className="blogItem">
            <h2>Popular Blogs</h2>
            <h3>How to learn javascript in 2022</h3>
            <p>
              Javascript is a language of the internet. Every browser in the world are fused with Javascript
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              Javascript is a language of the internet. Every browser in the world are fused with Javascript
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              Javascript is a language of the internet. Every browser in the world are fused with Javascript
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
