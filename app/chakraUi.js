// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}