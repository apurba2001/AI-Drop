'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper/modules";
import { IconButton } from '@chakra-ui/react'

import {
  Button
} from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar
} from '@chakra-ui/react'

import '../auth/styles.css'
import Link from 'next/link'

export default function Home() {

  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const onDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <main className={styles.main}>
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
          <span>AI<span>DROP</span></span>
        </div>

        <FontAwesomeIcon
          icon={faBars}
          style={{
            width: 30,
            height: 30,
          }}
          className={styles.menu}
          onClick={() => setDrawerOpen(true)}
        />

        <section>
          <span className={styles.profile_text}>A</span>
          Apurba Ruidas
          <Button className={styles.logout} colorScheme='whiteAlpha'>Logout</Button>
        </section>


      </div>

      <h1 className='airdrop-header'>
        Large Airdrops
      </h1>
      <div className={styles.grid}>

        <Link
          className={styles.card}
          href="/large-airdrop/1234"
          rel="noopener noreferrer"
        >
          <h2>
            Airdrops One <span>-&gt;</span>
          </h2>
          <p>A large airdrop in cryptocurrency involves the distribution of a significant number of tokens or coins to a large number of recipients, often as part of a major marketing or community-building initiative. These airdrops can distribute millions or even billions of tokens to participants.</p>
        </Link>

        <Link
          className={styles.card}
          href="/large-airdrop/1234"
          rel="noopener noreferrer"
        >
          <h2>
            Airdrop Two  <span>-&gt;</span>
          </h2>
          <p>A small airdrop involves distributing a relatively small number of tokens or coins to a more limited set of recipients. Small airdrops are typically used for promotional purposes, rewarding early users, or as a way to introduce a new cryptocurrency to a specific audience.</p>
        </Link>

        <Link
          className={styles.card}
          href="/large-airdrop/1234"
          rel="noopener noreferrer"
        >
          <h2>
            Airdrop Three  <span>-&gt;</span>
          </h2>
          <p>A small airdrop involves distributing a relatively small number of tokens or coins to a more limited set of recipients. Small airdrops are typically used for promotional purposes, rewarding early users, or as a way to introduce a new cryptocurrency to a specific audience.</p>
        </Link>
      </div>
      <button className={styles.telegram}>
        <img src='/assets/telegram.png' />
      </button>

      <Drawer
        isOpen={drawerOpen}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton className='drawer-close-btn' /> */}
          <DrawerHeader>
            <div className='drawer-header'>
              <Image
                src="/airdrop_a.svg"
                alt="Vercel Logo2"
                className={styles.vercelLogo}
                width={34}
                height={34}
                priority
              />
              <span>AI<span>DROP</span></span>
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  width: 30,
                  height: 30,
                }}
                className='drawer-close-btn'
                onClick={() => setDrawerOpen(false)}
              />
            </div>

          </DrawerHeader>
          <DrawerBody>

            <div className='div-container'>
              <Avatar
                size={'lg'}
              />
              <p>Apurba Ruidas</p>
            </div>

            <Button
              className={styles.logout2}
              colorScheme='whiteAlpha'
              onClick={() => {
                setIsLogined(prevState => !prevState)
                setDrawerOpen(false)
              }}
            >
              Logout

            </Button>


          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </main>
  )
}
