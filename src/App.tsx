import React from 'react'
import Title from './Components/Title'
import SelectForm from './Components/SelectForm'
import ProductsTable from './Components/ProductsTable'
import Footer from './Components/Footer'
import ProductDrawer from './Components/ProductDrawer'


const App : React.FC= () => {
  
    return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Title/>
      <SelectForm />
      <ProductsTable />
      <Footer/>
      <ProductDrawer/>
    </div>
  )
}

export default App