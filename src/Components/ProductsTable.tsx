import SelectedProducts from "./SelectedProducts"








const ProductsTable = () => {


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
           
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ProductsTable