import  { useContext } from "react";
import { GeneralContext } from "./GeneralContext";

const Footer = () => {
const handlePrintBtn=()=>{
  print()
}
const context=useContext(GeneralContext) 
if(!context)
{  return null;}
const { toggleDrawer } = context;
  return (<footer className="py-3 flex print:hidden gap-2 justify-end mt-auto">
  <button
onClick={toggleDrawer}
    type="button"
    id="manageProductBtn"
    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center"
  >
    Manage Product
  </button>
  <button
    onClick={handlePrintBtn}
    id="printBtn"
    className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
  >
    Print
  </button>
</footer>);
};

export default Footer;
