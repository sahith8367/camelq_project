import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Styles from './Mens.module.css'

const Kids = () => {
    const [Data , setData] = useState([]);
    const [cart , setCart] = useState({});

    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const responce=await axios.get(`http://127.0.0.1:8000/api/kids/`);
                setData(responce.data);
                
            }
            catch(err){
                console.log(err)
            }
        };
        fetchdata();
    },[])
    // adding items when onclick like button
    const handleaddcart= async(items)=>{
        console.log(items);
        try{
            const responce = await axios.post('http://127.0.0.1:8000/api/carts/' ,{
      name: items.name,
      cost: items.cost,
      color: items.color,
      about: items.about,
      image: items.image,
      } , {
        headers:{
          'Content-Type':'application/json',
        },
        
         });
         alert("item added to cart")
        }catch(err){
            console.log(err)
        }
        

    }
    const handleaddliked= async(items)=>{
        console.log(items);
        try{
            const responce = await axios.post('http://127.0.0.1:8000/api/liked/' ,{
      name: items.name,
      cost: items.cost,
      color: items.color,
      about: items.about,
      image: items.image,
      } , {
        headers:{
          'Content-Type':'application/json',
        },
        
         });
         alert("item add to liked List")
        }catch(err){
            console.log(err)
        }

    }
    
  return (
    <div>
        <h1 className={Styles.h1mens}>Kid's Wear</h1>
        <div className={Styles.Mcard}>
            <ul>
                {Data.map((items,index)=>(<li key={index}>
                    <img src={items.image} alt= {items.image} />
                    <h1>{items.name} {items.color} color</h1>
                    <p>{items.about}</p>
                    <h1>{items.cost}</h1>
                    <div className={Styles.btns}>
                        <button>BUY NOW</button>
                        <button onClick={()=>handleaddcart(items)}>🛒</button>
                        <button onClick={()=>handleaddliked(items)}>♡</button>
                    </div>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default Kids