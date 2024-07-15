import React, { useState } from 'react'
import Title from './Components/Title'
import SelectForm from './Components/SelectForm'
import ProductsTable from './Components/ProductsTable'

const App : React.FC= () => {
  
    return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Title/>
      <SelectForm />
      <ProductsTable />
    </div>
  )
}

export default App