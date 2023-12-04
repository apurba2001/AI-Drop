'use client'

import Image from 'next/image'
import styles from './styles.module.css'
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

export default function Home() {

    const [isLogined, setIsLogined] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    const onDrawerClose = () => {
        setDrawerOpen(false)
    }

    return (
        <div className={styles.main_container}>
            <h1 className={styles.airdrop_header}>
                Binance Airdrop
            </h1>
            <div className={styles.main_airdrop_container}>

                <div>
                    <img src="/images/img1.jpg" alt="1" />
                    <h4>
                        Create account in Binance
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                </div>
            </div>

            <div className={styles.main_airdrop_container}>
                <div>
                    <img src="/images/img2.jpeg" alt="1" />
                    <h4>
                        Link your Metamask account
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                </div>
            </div>
        </div>
    )
}
