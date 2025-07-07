import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Styles from './Mens.module.css'

const Cart = () => {
    const [data , setdata]=useState([]);
    const cartitems = async() =>{
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/carts/');
                setdata(response.data);
                console.log(data);
            }catch(err){
            console.log(err)    
            }};
    useEffect(()=>{
        
        cartitems();
    },[])
    const handledelete=async(id)=>{
        try{
            await axios.delete(`http://127.0.0.1:8000/api/carts/${id}`);
        }
        catch(error){
            console.log(err);
        }
        cartitems();
    }
  return (
    <div className={Styles.cart_1}>
        <div className={Styles.carth1}><h1>CART ITEMS</h1></div>
        <ul className={Styles.cart_cnt}>
            {data.map((items,index)=>(<li key={index}>
                <div><img src={items.image} alt="" /></div>
                <div className={Styles.text}>
                    <h1>{items.name+" Wear"}</h1>
                    <p>{items.color + " Color"}</p>
                    <h3>{items.cost} </h3>
                    <p>{items.about}</p>
                    <button onClick={()=>handledelete(items.id)}>REMOVE ITEM</button>
                </div>
                
            </li>))}
        </ul>
        <div>
            <button className={Styles.btn_cart} >BUY NOW</button>
        </div>
    </div>
  )
}

export default Cart