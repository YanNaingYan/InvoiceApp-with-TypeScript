import React from "react";

type productProp={
   product:{
    name:string,
    price:number
   } 
}
const ProductInDrawer:React.FC<productProp> = ({product:{name,price}}) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center mb-3">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </div>
  
    );
  };
  
  export default ProductInDrawer;