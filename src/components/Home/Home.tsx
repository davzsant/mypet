import React from 'react'
import Carrosel from './Carrosel/Carrosel'
import Banner from './Banner/Banner'
import CategoryPromotion from './CategoryPromotion/CategoryPromotion'
import styles from '@/styles/Home.module.css'
import promotion from '@/database/promotion'

const HomeComponent = () => {
  return (
    <main className={styles.home}>
      <Carrosel/>
      <div className='lg:w-[60%] sm:w-[90%] m-[auto]'>
        <Banner/>
        <CategoryPromotion {...promotion[0]}/>
      </div>
    </main>
  )
}

export default HomeComponent
