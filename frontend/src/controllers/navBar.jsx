
import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { CiSquarePlus } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";


const navBar = () => {
    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row",                
            }}
            >
                <Text 
                    as={Link}
                    to="/"
                    fontSize={{base:"22", sm:"28"}}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                >
                    
                       Product Store
                    
                </Text>

                <HStack>
                    <Link to="/create">
                        <Button>
                        <CiSquarePlus fontSize={20}/>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <FaMoon /> : <LuSun size='20'/>}
                    </Button>

                </HStack>

        </Flex>

    </Container>
  )
}

export default navBar