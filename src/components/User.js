import React from 'react'

const User = (props) => {
    const {name,loc,add} = props;
  return (
    <div id="user-card">
      <h2>Name:{name} </h2>
      <h2>Location :{loc}</h2>
      <h3>contact:{add}</h3>
    </div>
  )
}

export default User;
