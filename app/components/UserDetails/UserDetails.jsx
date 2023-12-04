"use client"

import styles from './styles.module.css'

import { Button } from '@chakra-ui/react'
// import './auth/styles.css'

import getUserData from '../../scripts/getUserData'
import { useRouter } from 'next/navigation';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useState, useEffect } from 'react';

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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

const UserDetails = ({ setDrawerOpen, isMenu, userData, handleLogout }) => {

    const router = useRouter();
    const { theme, toggleTheme } = useDarkMode();


    return (
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
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    size={30}
                />

                {
                    isMenu && (<FontAwesomeIcon
                        icon={faBars}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        onClick={() => setDrawerOpen(true)}
                    />)
                }


            </div>

            <section>
                <span style={{ marginRight: '1rem' }}>
                    <DarkModeSwitch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        size={30}
                    />
                </span>
                {
                    isMenu && userData?.name && (
                        <>
                            <span className={styles.profile_text}>{userData?.name?.charAt(0).toUpperCase()}</span>
                            <p > {userData.name}</p>
                            <Button className={styles.logout}
                                colorScheme='whiteAlpha'
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    )
                }
            </section>
        </div>
    )
}

export default UserDetails