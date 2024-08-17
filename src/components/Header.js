import React ,{useState,useEffect,lazy, useContext} from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineSatus from "../utils/useOnlineSatus";

const Header = ()=>{
    const[login,setLogin]=useState(false);
    const data = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)
    const {loggedInUser} = data;
    console.group(data)
    useEffect(()=>{
     console.log("useEff called!");
    },[login])
    console.log("Header rendered");
    const status = useOnlineSatus();
    const style1 ={
       color : "green" 
    }
    const style2 ={
        color : "#f0f0f0"
    }
    return(<div className="flex justify-between bg-gray-100 lg:bg-gray-300  sm:bg-gray-200 shadow-lg h-24">
        <img className="w-32" src={LOGO_URL} alt="Food Order App icon"/>
        <h1 className="items-center p-5 m-5 justify-items-center font-bold">Madras Coffee house</h1>
        <div className="flex p-5 m-5  justify-items-center items-center">
        <ul className="flex p-5 m-5 justify-items-center items-center" >
        <li  className="px-4 justify-items-center ">Online Status:{status?"✅":"🔴"}</li>
        <li className="px-4 justify-items-center"><Link to="/">Home</Link></li>
        <li className="px-4 justify-items-center"><Link to="/about">About</Link></li>
        <li className="px-4 justify-items-center"><Link to="/contact">Contact</Link></li>
        <li className="px-4 justify-items-center"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4 justify-items-center font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
        <button className="p-1  bg-orange-400 rounded-sm" id="lgn-btn" onClick={()=>{
            setLogin((t)=>{
               return !t;
            })
        }}>{login?"Logout":"Login"}</button>
        
        </ul>
        </div>
    </div>)
}


export default Header;