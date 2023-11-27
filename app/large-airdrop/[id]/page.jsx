'use client'

import Image from 'next/image'
import styles from '../styles.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
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

import '../../auth/styles.css'
import './styles.css'

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

            <div className='main-airdrop-container'>
                <h1 className='airdrop-header'>
                    Airdrops XYZ
                </h1>
                <div>
                    <h4>
                        Step 1 do this
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <img src="/images/img1.jpg" alt="1" />
                </div>
            </div>

            <div className='main-airdrop-container'>
                <div>
                    <h4>
                        Step 2 do this
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <img src="/images/img2.jpeg" alt="1" />
                </div>
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
