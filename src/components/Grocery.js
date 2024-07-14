import React from 'react'

const Grocery = () => {
  const arr=["Lazy loading","chunking","Dynamic import","On demand Loading","code splitting","Code splitting"]
  return (
    <ul>{arr.map((item,index)=>
     <li key={item.id}>{item}</li>
    )}
        
    </ul>
  )
}

export default Grocery;
