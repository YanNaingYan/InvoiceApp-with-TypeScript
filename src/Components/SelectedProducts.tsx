
import { useContext } from 'react';
import Product from './Product'
import { GeneralContext } from './GeneralContext';



const SelectedProducts= () => {
const context=useContext(GeneralContext)
if(!context){
  return null
}
const{selectedProducts}=context
  return (
  <>
   {selectedProducts.map((selectedProduct,index)=>
    <Product key={selectedProduct.id} index={index} selectedProduct={selectedProduct} />
   )}
  </>
  )
}

export default SelectedProducts