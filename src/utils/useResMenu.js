import React, {useEffect, useState} from 'react';
import {Swiggy_URL} from './const';

const useResMenu = (resId )=> {
  const [resInfo,setResInfo]= useState(null);
  useEffect (() => {
    fetchData ();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_URL + resId);
    const res = await data.json ();
    console.log (res);
    setResInfo(res);
  };
  return resInfo;
};

export default useResMenu;
