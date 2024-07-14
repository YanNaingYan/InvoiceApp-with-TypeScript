import React from 'react'
import Product from './Product'



type Props = {}

const SelectedProducts = ({selectedProducts}) => {

  return (
  <>
   {selectedProducts.map((selectedProduct,index)=>
    <Product key={selectedProduct.id} index={index}  selectedProduct={selectedProduct}/>
   )}
  </>
  )
}

export default SelectedProducts