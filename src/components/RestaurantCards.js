import React, { useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Chennai from "../utils/mockdata";
import { CDN_URL } from "../utils/const";
import UserContext from "../utils/UserContext";

const RestaurantCards = (props) => {
  const data =useContext(UserContext);
  const { resData } = props;
  //console.log(resData.info);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div id="card" className=" m-4 w-[250px] bg-gray-200 hover:bg-gray-300 rounded-md p-4 "  >
      <img 
        className="rounded-md"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="food image"
      />
      <div id="card-content">
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime + " minutes"}</h4>
        {/* <h4>{data.loggedInUser}</h4> */}
      </div>
    </div>
  );
};

export const withLabel = (RestaurantCards) => {
  return((props)=>{
    return (<div>
      <label className="bg-gray-950 text-white absolute m-2 p-2 rounded-sm">Arrives Fast</label>
      <RestaurantCards {...props} />
    </div>)
  })
}
export default RestaurantCards;
