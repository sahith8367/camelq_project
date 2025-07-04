import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [data , setdata]=useState([]);
    useEffect(()=>{
        const cartitems = async() =>{
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/carts/');
                setdata(response.data);
                console.log(data);
            }catch(err){
            console.log(err)    
            }};
        cartitems();
    },[])
  return (
    <div>
        <ul>
            <li>hii</li>
            {data.map((items,index)=>(<li key={index}>
                <img src={items.image} alt="" />
                name :{items.name} ,
                color : {items.color},
                Cost : {items.cost}
                about : {items.about}
            </li>))}
        </ul>
    </div>
  )
}

export default Cart