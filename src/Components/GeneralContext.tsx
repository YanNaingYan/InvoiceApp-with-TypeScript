import React, { createContext, useState } from 'react'

export const GeneralContext = createContext<GeneralContextType|null>(null) 
type GeneralContextProps={
    children:React.ReactNode,
   
}
type GeneralContextType={
    
    products: Product[];
    selectedProducts: NewSelectedProducts[];
    addSelectedProducts: (newSelectedProducts: NewSelectedProducts) => void;
    deleteSelectedProduct: (id: number) => void;
    editSelectedProduct: (id: number, addQuantity: number) => void;
    openDrawer:boolean
    setOpenDrawer:(  openDrawer:boolean)=>void
    toggleDrawer:()=>void
    addProduct:(product:Product)=>void
}
type Product = {
    id: number;
    name: string;
    price: number;
  };
type NewSelectedProducts = {
    id: number;
    productId: number ;
    name: string ;
    price: number ;
    quantity: number ;
    cost: number ;
  };
type NewProduct=Product
type AddSelectedProducts=(newSelectedProducts:NewSelectedProducts)=>void



  
export const GeneralContextProvider:React.FC<GeneralContextProps > = ({children}) => {
    const [products,setProducts] = useState([
        {id:1,name:"Apple",price:1.5},
        { id: 2, name: "Banana", price: 0.75 },
        { id: 3, name: "Orange", price: 1.2 },
        { id: 4, name: "Grapes", price: 2.0 }
      ])
      const [selectedProducts,setSelectedProducts]=useState<NewSelectedProducts[]>([])

      const addProduct=(newProduct:NewProduct)=>{
     setProducts(   [...products,newProduct])
      }

  const addSelectedProducts:AddSelectedProducts=(newSelectedProducts:NewSelectedProducts)=>setSelectedProducts([...selectedProducts,newSelectedProducts]) 
  const deleteSelectedProduct = (id:number)=>{
    setSelectedProducts(selectedProducts.filter((el)=>el.id != id))
  }
  const editSelectedProduct=(id:number,addQuantity:number)=>{
setSelectedProducts(
    selectedProducts.map(
(el)=>{
    if(el.id===id){
const newQuantity= el.quantity + addQuantity
const newCost = el.price * newQuantity
return {...el,quantity:newQuantity,cost:newCost}
    } else return el
}
))
  }
  const [openDrawer,setOpenDrawer]=useState(false)

  const toggleDrawer=()=>{
    setOpenDrawer(!openDrawer)

        }
  return (
    <GeneralContext.Provider value={
        {products,addProduct,addSelectedProducts,selectedProducts,deleteSelectedProduct,editSelectedProduct,openDrawer,setOpenDrawer,toggleDrawer}
    }>{children}</GeneralContext.Provider>
  )
}

