import React from "react";
import { useState,useEffect } from "react"; 
 
import Card from "../cards";
function Featured(){

    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("https://dummyjson.com/products/search?q=phone")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data.products)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  console.log(users)
    return(

        <>
        <h1 className=" text-center p-8 text-4xl font-bold text-[#1A0B5B]">Featured Products</h1>
<div class="flex gap-10 p-8">
 
       { users.map((item , index) => (<>
             <Card name={item.title} img={item.thumbnail} price ={item.price}/>
        </>))
    }
       </div>  </>
    )
}


export default Featured;