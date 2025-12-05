import React from 'react'
import list from '../../public/list.json'
function Freebook() {
    const filterData= list.filter((data)=>  data.category === "free");
    console.log(filterData);
    
  return (
    <div></div>
  )
}

export default Freebook