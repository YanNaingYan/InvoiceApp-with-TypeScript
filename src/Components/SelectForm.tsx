import React, { useRef } from 'react'

type Product = {
    id: number;
    name: string;
    price: number;
};

type NewSelectedProduct = {
    id: number;
    productId: number | null;
    name: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    cost: number | undefined;
};

type SelectFormProps  = {
    products: Product[]
    addSelectedProducts: (newSelectedProduct: NewSelectedProduct) => void;
 
};

const SelectForm :React.FC<SelectFormProps > = ({products,addSelectedProducts}) => {
    const idRef = useRef<HTMLSelectElement>(null)

    const quantityRef =useRef<HTMLInputElement>(null)
    const handleBuy=()=>{
        const selectedProductId= idRef.current ? parseInt(idRef.current.value) : null
        const selectedProduct= products.find((product)=>product.id===selectedProductId)
 if(!selectedProduct || !quantityRef.current){
    return;
 }
        const cost = selectedProduct?.price * quantityRef.current?.valueAsNumber
        const newSelectedProduct:NewSelectedProduct={
            id:Date.now(),
            productId:selectedProduct?.id,
            name:selectedProduct?.name,
            price:selectedProduct?.price,
            quantity:quantityRef.current?.valueAsNumber,
            cost

        }
        addSelectedProducts(newSelectedProduct)
   
    }
  return (
    <section className="mb-10 block print:hidden">
    <div id="recordForm">
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-2">
          <label
            htmlFor="productSelect"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select Your Product
          </label>
          <select
            id="productSelect"
      ref={idRef}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            required
          >
            {products.map(({id,name})=>(
                   <option key={id} value={id}>
{name}
                   </option>
            ))}
         
         
          
          </select>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="quantityInput"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantityInput"
            ref={quantityRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            required
          />
        </div>
        <div className="col-span-1">
          <button
            type="button"
            onClick={handleBuy}
            className="font-heading w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SelectForm