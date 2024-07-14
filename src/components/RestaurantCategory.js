import React from 'react'
import CategoryItems from './CategoryItems';
import { useState } from 'react';

const RestaurantCategory = ({data,showIndex,setShowIndex}) => {
  const[clk,setClk] = useState(false);
  console.log(data);
  const {title} = data?.card?.card;
  const {itemCards} = data?.card?.card;
  function handleClick(){
    setShowIndex();
    setClk((t)=>{
        return !t;
    })
  }
  return (<div>
    <div className="bg-gray-100 p-5 m-5 w-6/12 mx-auto my-4 flex justify-between cursor-pointer" onClick={()=>{handleClick()}}>
       <span className="font-semibold">{title}{`(${itemCards.length})`}</span>
       <button >{clk && showIndex  ?"🡡":"🡣"}</button>
       </div>
       {clk && showIndex && <CategoryItems data={itemCards} />}
    </div>
  )
}

export default RestaurantCategory;
