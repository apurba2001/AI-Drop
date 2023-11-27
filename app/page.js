'use client'

import Image from 'next/image'
import styles from './page.module.css'

import './page.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper/modules";
import { IconButton } from '@chakra-ui/react'
import Carousel from './components/Carousel/Carousel'

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
import './auth/styles.css'
import Link from 'next/link'

import getUserData from './scripts/getUserData'
// import handleLogout from './scripts/handleLogout'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const userData = getUserData()
    setUserData(userData)
  }, [])

  console.log(userData)


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
          {userData.name}
          <Button className={styles.logout} colorScheme='whiteAlpha'
            onClick={() => {
              localStorage.removeItem('token')
              router.push('auth')
            }}
          >Logout</Button>
        </section>


      </div>

      <div className={styles.center}>
        <Carousel />
      </div>

      <div>

      </div>
      <div className={styles.grid}>

        <Link
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
          href="/large-airdrop"
        >
          <h2>
            Large Airdrops <span>-&gt;</span>
          </h2>
          <p>A large airdrop in cryptocurrency involves the distribution of a significant number of tokens or coins to a large number of recipients, often as part of a major marketing or community-building initiative. These airdrops can distribute millions or even billions of tokens to participants.</p>
        </Link>

        <Link
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
          href="/small-airdrop"
        >
          <h2>
            Small Airdrops  <span>-&gt;</span>
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
              <p>{userData.name}</p>
            </div>

            <Button
              className={styles.logout2}
              colorScheme='whiteAlpha'
              onClick={() => {
                setIsLogined(prevState => !prevState)
                setDrawerOpen(false)
                localStorage.removeItem('token')
                router.push('auth')
                // handleLogout()
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
