import Product from "../moduls/product.modul.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
    const product = req.body

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            message: 'Please fill all fields'
        })
    }

    const newProduct = new Product(product)


    try {
        await newProduct.save()
        res.status(201).json({
            message: 'Product created successfully',
            success: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            error: error.message
        })
    }
}

export const deleteProduct = async (req, res)=>{
    const { id } = req.params
    
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({
            message: 'Product deleted successfully',
            success: true
        })
    } catch (error) {
        res.status(404).json({message: "Product Not found", success: false})
         
    }
    
}

export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find()
        res.status(200).json({
            message: 'Products fetched successfully',
            success: true,
            data: products
        
        })
    } catch (error) {

        res.status(404).json({
            message: 'Something went wrong',
            success: false,
            error: error.message
        })
        
    }
}

export const singeleProduct = async (req, res) =>{
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json({
            message: 'Product fetched successfully',
            success: true,
            data: product
        })
    } catch (error) {
        res.status(404).json({
            message: 'Something went wrong',
            success: false,
            error: error.message
        })
    }

}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            message: 'Product not found',
            success: false
        
    })
}

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            error: error.message
        })
    }
}