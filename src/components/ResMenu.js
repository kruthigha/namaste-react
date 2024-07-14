import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import { Swiggy_URL } from "../utils/const";
import RestaurantCategory from "./RestaurantCategory";
const ResMenu= ()=>{
  const[showIndex,setShowIndex] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  const res = useResMenu(resId);

    if(res===null) return <Shimmer />
    const{name,id,cuisines,costForTwo,avgRating} = res?.data?.cards[2]?.card?.card?.info;
    const {itemCards : menu} = res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const Categories = res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
     c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(Categories);
    return (
        <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <h2 className="font-serif">{cuisines.join(", ")} - {costForTwo/100+" For Two"}</h2>
        
         <ul className="px-2">{Categories.map((c,id)=>
         <li key={c?.card?.card?.title}>
         <RestaurantCategory data={c} showIndex={id === showIndex ? true :false }
         setShowIndex={()=>setShowIndex(id)}/>
        </li>
        )}
        </ul>
        
        
        
    </div>
    )

}
export default ResMenu;