'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  FormHelperText,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { validate } from 'react-email-validator'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthCode from 'react-auth-code-input';


export default function Home() {
  const router = useRouter()

  const [isLogined, setIsLogined] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [loader, setLoader] = useState(false)

  const [isVerify, setIsVerify] = useState(true)
  const [verificationCode, setVerificationCode] = useState(null)
  const [verificationTimer, setVerificationTimer] = useState(45)

  // useEffect()


  const handleInput = (e) => {
    if (Object.keys(errors).length !== 0) {
      setErrors({})
    }
    const { name, value } = e.target
    setFormData(preState => ({ ...preState, [name]: value }))
  }

  const validateData = () => {
    const errors = {};

    if (isLogined) {
      // Validation for login
      if (!formData.email) {
        errors.email = 'Please enter email';
      } else if (!validate(formData.email)) {
        errors.email = 'Provide a valid email';
      }

      if (!formData.password) {
        errors.password = 'Please enter password';
      }
    } else {
      // Validation for registration
      if (!formData.name) {
        errors.name = 'Please enter name';
      }

      if (!formData.email) {
        errors.email = 'Please enter email';
      } else if (!validate(formData.email)) {
        errors.email = 'Provide a valid email';
      }

      if (!formData.password) {
        errors.password = 'Please enter password';
      } else if (formData.password.length < 6) {
        errors.password = 'Password should be more than 6 characters';
      }

      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please enter confirm password';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Password and confirm password should be the same';
      }
    }

    // Set errors state
    setErrors(errors);
    console.log(errors)

    // Return true if there are no errors, indicating that the data is valid
    return Object.keys(errors).length === 0;
  };


  const handleAuthRequest = async () => {

    if (!validateData()) {
      return
    }
    setLoader(true)

    try {
      if (isLogined) {

      } else {
        const res = await axios.post('api/users/signup', formData)
        setFormData({})
        setIsLogined(true)
      }
    } catch (error) {
      console.log(error.response.status)

      if (error.response.status === 409) {
        setErrors({ email: error.response.data.message })
      }

    } finally {
      setLoader(false)
    }
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


      {
        isVerify ? (
          <div className='card'>
            <h1>Verify email</h1>


            <div className='verify-input-container'>
              <AuthCode
                length={5}
                autoFocus={true}
                allowedCharacters='numeric'
              />
            </div>

            <p className='verification-message'>We've sent a verification code to your email address. Please check your inbox and enter the code below to complete the registration process.</p>



            <div className='button-container'>
              <p>Resend code {verificationTimer}</p>
              <Button
                isLoading={loader}
                onClick={handleAuthRequest}
                colorScheme='whiteAlpha'
              >Verify</Button>
            </div>

          </div>
        ) : (
          <div className='card'>
            <h1>{isLogined ? 'Login' : 'SignUp'} to Aidrop</h1>

            {
              !isLogined && (
                <FormControl isInvalid={errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter name'
                    onChange={handleInput}
                    name='name'
                    value={formData.name || ''}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>)
            }

            <FormControl isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter email'
                name='email'
                value={formData.email || ''}
                onChange={handleInput}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type='text'
                placeholder='Enter password'
                name='password'
                onChange={handleInput}
                value={formData.password || ''}

              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            {
              !isLogined && (<FormControl isInvalid={errors.confirmPassword}>
                <FormLabel>Cunfirm password</FormLabel>
                <Input
                  type='password'
                  placeholder='*********'
                  name='confirmPassword'
                  onChange={handleInput}
                  value={formData.confirmPassword || ''}
                />
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>)
            }
            <Button
              isLoading={loader}
              onClick={handleAuthRequest}
              colorScheme='whiteAlpha'>{isLogined ? 'Login' : 'Sign Up'}</Button>
          </div>
        )
      }
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
