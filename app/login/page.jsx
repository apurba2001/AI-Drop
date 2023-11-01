'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper/modules";

// import Carousel from './components/Carousel/Carousel'
import './styles.css'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
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
} from '@chakra-ui/react'

export default function Home() {

  const [isLogined, setIsLogined] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const onDrawerClose = () => {
    setDrawerOpen(false)
  }

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
          <Button
            className={styles.logout}
            colorScheme='whiteAlpha'
            onClick={() => setIsLogined(prevState => !prevState)}
          >
            {
              isLogined ? 'Sign Up' : 'Login'
            }

          </Button>
        </section>


      </div>

      <div className='card'>
        <h1>{isLogined ? 'Login' : 'SignUp'} to Aidrop</h1>

        {
          !isLogined && (<FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='email' placeholder='Jhon Doe' />
            <FormErrorMessage>We'll never share your email.</FormErrorMessage>
          </FormControl>)
        }
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='user@domain.com' />
          <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='email' placeholder='*********' />
          <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        </FormControl>
        {
          !isLogined && (<FormControl>
            <FormLabel>Cunfirm password</FormLabel>
            <Input type='password' placeholder='*********' />
            <FormErrorMessage>We'll never share your email.</FormErrorMessage>
          </FormControl>)
        }
        <Button colorScheme='whiteAlpha'>{isLogined ? 'Login' : 'Sign Up'}</Button>
      </div>




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

            <Button
              className={styles.logout2}
              colorScheme='whiteAlpha'
              onClick={() => {
                setIsLogined(prevState => !prevState)
                setDrawerOpen(false)
              }}
            >
              {
                isLogined ? 'Sign Up' : 'Login'
              }

            </Button>


          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </main>
  )
}
