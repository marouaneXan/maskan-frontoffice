import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Banner from '@/components/banner/Banner'
import Properties from '@/components/properties'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-[1440px] mx-auto bg-white'>
      <Layout>
        <Banner/>
        <Properties/>
      </Layout>
      </div>
    </>
  )
}
