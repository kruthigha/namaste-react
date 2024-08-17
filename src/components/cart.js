import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/store/cartSlice";

const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleclearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="items-center m-4 p-4 ">
        <h1 className="text-xl font-bold flex justify-center">Cart</h1>
        <div className="w-6/12 m-auto flex justify-center">
        <button className="bg-black text-white  rounded-sm p-2 m-2" onClick={handleclearCart}>Clear Cart</button>
        </div>
        <CategoryItems data={cartItems}  />
    </div>)

}
export default Cart;