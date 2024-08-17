import React from 'react';
import { CDN_URL } from '../utils/const';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/store/cartSlice';

const CategoryItems = (props) => {
  const dispatch = useDispatch();
  const item = props?.data || [];
  console.log(item);
  function addItemToCart(i){
   dispatch(addItem(i))
  }

  return (
    <div className="bg-gray-100 p-5 m-5 w-6/12 mx-auto my-4  ">
      <ul>
        {item.length > 0 ? (
          item.map((i) => (
            <li key={i.card.info.id} className="border-gray-200 border-b-2">
              <div className='flex'>
              <div className='p-2 w-9/12 text-left'>
              <span className="font-semibold">{i.card.info.name+"   "}- ₹{i.card.info.price/100}</span>
              
              <p className='text-sm p-1'>{i.card.info.description}</p>
              </div>
              <div className=" w-3/12 rounded-lg">
              <img src={CDN_URL + i.card.info.imageId} alt="Food image" className='rounded-lg' />
              <button className='text-green-600 text-sm  bg-gray-200 shadow-sm hover:bg-gray-300 mx-3 px-3 py-2 my-2 rounded-lg border-green-400 relative' onClick={()=>addItemToCart(i)}>ADD</button>
              </div>
              </div>
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryItems;

