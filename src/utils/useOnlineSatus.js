import React ,{useState,useEffect} from 'react'

const useOnlineSatus = () => {
  const[onlineStatus,setOnlineStatus]= useState(true);
  useEffect(()=>{
   window.addEventListener("online",()=>{
    setOnlineStatus(true);
   })
   window.addEventListener("offline",()=>{
    setOnlineStatus(false);
   })
  },[onlineStatus])
  return onlineStatus;
}

export default useOnlineSatus;
