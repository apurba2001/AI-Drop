'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper/modules";

// import Carousel from './components/Carousel/Carousel'
import './styles.css'

export default function Home() {

  return (
    <main className={styles.main2}>
      <div className={styles.description}>
        <div>
          <Image
            src="/airdrop_a.svg"
            alt="Vercel Logo2"
            className={styles.vercelLogo}
            width={34}
            height={34}
            priority
          />
          <span>AI<span>.DROP</span></span>
        </div>

        <FontAwesomeIcon
          icon={faBars}
          style={{
            width: 30,
            height: 30,
          }}
          className={styles.menu}
        />

        <section>
          <p className={styles.logout}>
            Logout
          </p>
        </section>


      </div>



        <div className='card'>
            <input className='input'/>
        </div>

    </main>
  )
}
