'use client'


import styles from './styles.modules.css'
import { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'

import { validate } from 'react-email-validator'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthCode from 'react-auth-code-input';
import toast from 'react-hot-toast';
import { faL } from '@fortawesome/free-solid-svg-icons'



export default function Home() {
  const router = useRouter()

  const [isLogined, setIsLogined] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [loader, setLoader] = useState(false)

  const [isVerify, setIsVerify] = useState(false)
  const [verificationCode, setVerificationCode] = useState(null)
  const [verificationTimer, setVerificationTimer] = useState(45)



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

    return Object.keys(errors).length === 0;
  };

  const handleAuthRequest = async () => {
    if (!validateData()) {
      return
    }
    setLoader(true)

    try {
      if (isLogined) {
        const res = await axios.post('api/users/login', formData)
        setFormData({})
        router.push('/');
      } else {
        const res = await axios.post('api/users/signup', formData)
        setFormData({})
        toast.success('Signup successfull');
        setIsLogined(true)
      }
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
      if (error.response.status === 409) {
        setErrors({ email: error.response.data.message })
      }

    } finally {
      setLoader(false)
    }
  }


  return (
    <>
      {
        isVerify ? (
          <div className={styles.card}>
            <h1>Verify email</h1>
            <div className={styles.verify_input_container}>
              <AuthCode
                length={5}
                autoFocus={true}
                allowedCharacters='numeric'
              />
            </div>

            <p className={styles.verification_message}>We've sent a verification code to your email address. Please check your inbox and enter the code below to complete the registration process.</p>



            <div className={styles.button_container}>
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
              colorScheme='whiteAlpha'>{isLogined ? 'Login' : 'Sign Up'}
            </Button>

            {
              isLogined ? (
                <p className={'signup'}>Don't have an account? {"   "}
                  <span onClick={() => {
                    setErrors({})
                    setIsLogined(false)
                  }}>Sign Up</span></p>
              ) : (
                <p className={'signup'}>Already have an account?   {"   "}
                  <span onClick={() => {
                    setErrors({})
                    setIsLogined(true)
                  }}>Login</span></p>
              )
            }
          </div>
        )
      }

    </>
  )
}
