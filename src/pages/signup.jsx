import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import WebsiteSignIn from '../assets/images/WebsiteSignIn.svg'
import {
  Box,
  GridItem,
  Button,
  SimpleGrid,
  Input,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react"

export default function Login() {
    return (
        <>
            <Helmet>
                <title>Signup | Reflect</title>
            </Helmet>
            <Box px={8} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    w="full"
                    columns={{ base: 1, lg: 12 }}
                    gap={{ base: 0, lg: 24 }}
                    mx="auto"
                    h="100vh"
                >
                    <GridItem
                        colSpan={{ base: 0, lg: 6 }}
                        display={{base:"none", lg:"block"}}
                    >
                        <Image src={WebsiteSignIn} alt='login image' />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", md: 6 }}>
                        <Box as="form" mb={6}>
                            <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize" pt={2}>create account</Text>
                            <SimpleGrid
                                columns={1}
                                py={2}
                                spacing={4}
                            >
                                 <Stack>
                                    <Text mb='3px' textTransform="capitalize">full name</Text>
                                    <Input
                                        type="text"
                                        placeholder="john snow"
                                        required="true"
                                        color="gray.900"
                                        borderColor="gray.300"
                                        border="2px"
                                        borderStyle="solid"
                                        size="lg"
                                    />
                                </Stack>
                                <Stack>
                                    <Text mb='3px'>Email Address</Text>
                                    <Input
                                        type="email"
                                        placeholder="exampel@gmail.com"
                                        required="true"
                                        color="gray.900"
                                        borderColor="gray.300"
                                        border="2px"
                                        borderStyle="solid"
                                        size="lg"
                                    />
                                </Stack>
                                <Stack>
                                    <Text mb='3px'>Password</Text>
                                    <Input
                                        type="password"
                                        placeholder="password"
                                        required="true"
                                        color="gray.900"
                                        borderColor="gray.300"
                                        border="2px"
                                        borderStyle="solid"
                                        size="lg"
                                    />
                                </Stack>
                                <Button bg="green.500" fontSize="lg" variant="none" color="white" w="full" py={3.5} type="submit">
                                    Sign up for free
                                </Button>
                            </SimpleGrid>
                            <Text 
                                fontSize="md" 
                                textAlign="center" 
                                color="gray.700" 
                                textTransform="capitalize" 
                            >
                                already have account? 
                                <Link to="/login">
                                    <Text display="inline" px="2" fontWeight="semibold" color="green.500">Login</Text>
                                </Link>
                            </Text>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}