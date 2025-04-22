import express from 'express';

import { createProduct, getProducts, deleteProduct, singeleProduct, updateProduct } from '../controllers/product.controllers.js';

const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//  Create Product 
router.post('/', createProduct)
//  Delete Product 

router.delete('/:id', deleteProduct)


//  All Product 
router.get('/', getProducts)

//  Single Product
router.get('/:id', singeleProduct)

// Update Product
router.put('/:id', updateProduct)

export default router