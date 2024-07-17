import { useContext } from "react"
import { GeneralContext } from "./GeneralContext"
import ProductInDrawer from "./ProductInDrawer"


const ProductGroup = () => {
    const context = useContext(GeneralContext)
    if(!context){
        return null
    }
    const {products}= context
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <ProductInDrawer key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGroup