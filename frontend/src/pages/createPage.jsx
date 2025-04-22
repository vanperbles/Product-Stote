import { useToast } from '@chakra-ui/react';
import {  Box, Button, Container, Heading, Input, Textarea, useColorModeValue, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import React from 'react'
import { useProductStore } from '../store/product';

const createPage = () => {
    const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const toast = useToast();

  const handeleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    if(!success){
      toast(
        {
          title: "Error",
          description: message,
          status: "error",
          duration: 5000,
          isClosable: true,
        }
      )
    }else{
      toast(
        {
          title: "Success",
          description: message,
          status: "success",
          duration: 5000,
          isClosable: true,
        }
      )
    }
    setNewProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  }

  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input 
                    placeholder='Product Name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                    <Input 
                    placeholder='Price'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <Textarea 
                    placeholder='Description'
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    />
                    <Input 
                    placeholder='Category'
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    />
                    <Input 
                    placeholder='Image URL'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                    <Button colorScheme='blue' onClick={handeleAddProduct}>Add Product</Button>
                    
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default createPage