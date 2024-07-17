import { useContext } from "react"
import SelectedProducts from "./SelectedProducts"
import { GeneralContext } from "./GeneralContext"








const ProductsTable = () => {
  const context=useContext(GeneralContext)
  if(!context){
    return null
  }
  const{selectedProducts}=context

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
        <tr className=" ">
          <th scope="col" className="px-6 py-4">
            #
          </th>
          <th scope="col" className="px-6 py-4">
            Product name
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Price
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Quantity
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Cost
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
    < SelectedProducts/>
      </tbody>
      <tfoot>
        <tr className="border-b">
          <td className="px-6 py-4 text-center" colSpan={4}>
            Total
          </td>
          <td className="px-6 py-4 text-end" id="recordTotal">
           {selectedProducts.reduce((pv:number,cv)=>pv + cv.cost,0).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ProductsTable