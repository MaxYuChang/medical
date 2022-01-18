import Layout from '@/components/core/DefaultLayout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React from 'react'
import Calendar from '@/components/core/Calendar'


// const Home: INextPageExtended = () => {
const Home = () => {

  return (
    <div className='h-full '>
      <Calendar />
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home