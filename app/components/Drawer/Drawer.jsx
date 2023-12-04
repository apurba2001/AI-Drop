'use client'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Avatar,
    Button
} from '@chakra-ui/react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import styles from './style.module.css'

const DrawerComponent = ({ isOpen, setIsOpen, handleLogout, userData }) => {

    return (
        <Drawer isOpen={isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <div className={styles.drawerHeader}>
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
                        icon={faXmark}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        className='drawer-close-btn'
                        onClick={() => setIsOpen(false)}
                    />
                </DrawerHeader>
                <DrawerBody>
                    <div className={styles.divContainer}>
                        <Avatar
                            size={'lg'}
                        />
                        <p>{userData?.name}</p>
                    </div>

                    <Button
                        className={styles.logout2}
                        colorScheme='whiteAlpha'
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent