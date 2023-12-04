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

// import '../auth/styles.css'
import Link from 'next/link'

export default function Home() {

  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const onDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      <h1 className={styles.airdrop_header}>
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
    </>
  )
}
