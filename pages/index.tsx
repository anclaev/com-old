// import { useIntl } from "react-intl"
import { NextPage } from "next"
import Head from "next/head"

import Background from "@sections/Background"
import Layout from "@components/Layout"

import s from "@styles/pages/Home.module.sass"

const Home: NextPage = () => {
  // const intl = useIntl()
  return (
    <Layout.Container>
      <Head>
        <title>Anclaev</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout.Main>
        1
        <Background videoUrl="/media/city.mp4" posterUrl="/media/city.png" />
      </Layout.Main>
    </Layout.Container>
  )
}

export default Home
