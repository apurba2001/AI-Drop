'use client'

import Image from 'next/image'
import styles from './page.module.css'

import './page.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Carousel from './components/Carousel/Carousel'


import {
  Button
} from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Avatar
} from '@chakra-ui/react'

import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userData, setUserData] = useState({})

  return (
    <>
      <div className={styles.center}>
        <Carousel />
      </div>

      <div className={styles.grid}>
        <Link
          className={styles.card}
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
          rel="noopener noreferrer"
          href="/small-airdrop"
        >
          <h2>
            Small Airdrops  <span>-&gt;</span>
          </h2>
          <p>A small airdrop involves distributing a relatively small number of tokens or coins to a more limited set of recipients. Small airdrops are typically used for promotional purposes, rewarding early users, or as a way to introduce a new cryptocurrency to a specific audience.</p>
        </Link>
      </div>
    </>
  )
}
