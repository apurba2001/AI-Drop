'use client'

import { UserDetails, AppDrawer } from './components';
import {
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { usePathname } from 'next/navigation'
import './page.module.css'

import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const layout2 = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [userData, setUserData] = useState({ name: '' })
    const router = useRouter()

    const pathname = usePathname()

    const handleLogout = async () => {
        try {
            const response = await axios.get('api/users/logout');
            router.push('/auth')
            if (isDrawerOpen) {
                setIsDrawerOpen(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getUserData = async () => {
        try {
            const response = await axios.get('api/users/getUserData');
            setUserData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(userData)

    useEffect(() => {
        if (pathname !== '/auth') {
            getUserData()
        }
    }, [])


    return (
        <main className={styles.main}>
            <UserDetails
                setDrawerOpen={setIsDrawerOpen}
                isMenu={pathname !== '/auth'}
                userData={userData}
                handleLogout={handleLogout}
            />
            {children}
            {
                pathname !== '/auth' && (
                    <button className={styles.telegram}>
                        <Image
                            width={50}
                            height={50}
                            src='/assets/telegram.svg'
                            alt='telegram'
                        />
                        <p>Contact Us</p>
                    </button>
                )
            }

            <AppDrawer
                isOpen={isDrawerOpen}
                setIsOpen={setIsDrawerOpen}
                handleLogout={handleLogout}
                userData={userData}
            />
        </main>
    )
}

export default layout2