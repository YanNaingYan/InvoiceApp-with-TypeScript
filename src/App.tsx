import React, { useState } from 'react'
import Title from './Components/Title'
import SelectForm from './Components/SelectForm'
import ProductsTable from './Components/ProductsTable'

type Product = {
  id: number;
  name: string;
  price: number;
};

type NewSelectedProducts = {
  id: number;
  productId: number | null;
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  cost: number | undefined;
};



const App : React.FC= () => {
  const [products,setProducts] = useState([
    {id:1,name:"Apple",price:1.5},
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 1.2 },
    { id: 4, name: "Grapes", price: 2.0 }
  ])
  const [selectedProducts,setSelectedProducts]=useState<NewSelectedProducts[]>([])
  const addSelectedProducts=(newSelectedProducts:NewSelectedProducts)=>setSelectedProducts([...selectedProducts,newSelectedProducts]) 

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Title/>
      <SelectForm products={products} addSelectedProducts={addSelectedProducts}/>
      <ProductsTable selectedProducts={selectedProducts}/>
    </div>
  )
}

export default App