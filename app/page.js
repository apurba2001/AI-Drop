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
import { useRouter } from 'next/navigation';
import ToggleButton from './components/ThemeButton/ThemeButton'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const useDarkMode = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setPrefersDarkMode(event.matches);
    };

    darkModeMediaQuery.addListener(handleChange);
    setPrefersDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeListener(handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default function Home() {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      router.push('auth')
    }
    const userData = getUserData()
    setUserData(userData)
  }, [])


  const onDrawerClose = () => {
    setDrawerOpen(false)
  }

  const [isDark, setDark] = useState(true);
  // const theme = isDark ? dark : light;

  // const [prefersDarkMode, setPrefersDarkMode] = useState(
  //   window?.matchMedia('(prefers-color-scheme: dark)').matches
  // );
  // const [theme, setTheme] = useState('dark');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme); // Save theme preference in local storage
  // };

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  const { theme, toggleTheme } = useDarkMode();

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



        <div className={styles.menu}>


          <DarkModeSwitch
            // style={{ marginBottom: '2rem' }}
            checked={theme === 'dark'}
            onChange={toggleTheme}
            size={30}
          />

          <FontAwesomeIcon
            icon={faBars}
            style={{
              width: 30,
              height: 30,
            }}
            // className={styles.menu}
            onClick={() => setDrawerOpen(true)}
          />
        </div>

        <section>
          <span style={{ marginRight: '1rem' }}>
            <DarkModeSwitch
              // style={{ marginBottom: '2rem' }}
              checked={theme === 'dark'}
              onChange={toggleTheme}
              size={30}
            />
          </span>

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
      <button className={styles.telegram}>
        <Image
          width={50}
          height={50}
          src='/assets/telegram.svg' alt='telegram' />
        <p>Contact Us</p>
      </button>

      <Drawer
        isOpen={drawerOpen}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
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
