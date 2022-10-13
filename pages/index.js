import Head from 'next/head'
import Main from '../Components/Main'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Godwin | Front-end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  )
}
