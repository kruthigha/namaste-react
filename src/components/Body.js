import React,{useState,useEffect,useContext} from "react";
import ReactDOM from "react-dom/client";
import Chennai from "../utils/mockdata";
import { CDN_URL } from "../utils/const";
import RestaurantCards,{withLabel} from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineSatus from "../utils/useOnlineSatus";
import UserContext from "../utils/UserContext";
//import UserContext from "../utils/UserContext";


const Body = () => {
    //state variable => Super Powerful varaible
    const[res,setRes]= useState([]);
    const[filres,setFilres]=useState([]);
    const[input,setInput] = useState();
    const data = useContext(UserContext);
    const{setUser,loggedInUser} = data;
    useEffect(()=>{

      fetchData();
    },[]);
    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const res = await data.json();
    //  console.log(res?.data);
     // console.log(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRes(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilres(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log("Body rendered");
   // conditional rendering
   const filteredRestaurants = res.filter((item) => 
    item.info.name.includes(input)
  );
  const status = useOnlineSatus();
  if(!status) return <h1>Looks Like you are Offline! Please Check Your Internet Connection..</h1>
  const RestaurantCardsWithLabel = withLabel(RestaurantCards)
  return ((res.length === 0)? <Shimmer/> : (<div className="body" >
        <div className="flex">
        <div id="search-bar">
        <input className="border border-solid border-black m-4"
        placeholder="Search your cravings here..." type="text" value={input} data-testid ="Search" onChange={(e)=>{
         setInput(e.target.value);
        }}/>
        <button id="filter-btn" className="px-4 py-1 bg-orange-400 m-4 rounded-sm" onClick={()=>{
          //filters the restaurant and updates the UI
          setFilres(filteredRestaurants);

        }}>Search</button>
        <button className="px-4 py-1 bg-orange-600 m-4 rounded-sm" data-testid="TRS" onClick={()=>{
                 
                 let data= res.filter((item)=>{ 
                    return item.info.avgRating > 4.3}
                 );
                 console.log(data.length);
                 setFilres(data);
                 console.log(res);
                         

        }
        }>Top Rated Restaurant</button>
        <input placeholder="Enter User name here" onChange={(e)=>setUser(e.target.value)} value ={loggedInUser} className="border border-solid border-black m-4 h-6 px-4 py-1"/>
        </div>
        </div>

        <div id="res-container" className="flex flex-wrap" >
        
           {filres.map((item)=>{
            return <Link to={"/restaurants/"+item.info.id}  key={item.info.id} id ="res-link">
            { item.info.sla.deliveryTime <30
              ? <RestaurantCardsWithLabel resData={item} /> :
                <RestaurantCards  resData={item} />
             } </Link>
          })} 
        </div>
    </div>));
}
// export const RestaurantCardsWithLabel =()=>{

// }


export default Body;
