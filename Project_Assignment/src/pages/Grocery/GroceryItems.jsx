import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Styles from './GroceryItems.module.css'

const GroceryItems = () => {
    const [Data , setData] = useState([]);

    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const responce=await axios.get(`http://127.0.0.1:8000/api/Grocery/`);
                setData(responce.data);
            }
            catch(err){
                console.log(err)
            }
        };
        fetchdata();
    },[])
  return (
    <div className={Styles.cnt}>
        <h1 className={Styles.h1mens}>All Groceries</h1>
        <div className={Styles.Mcard}>
            <ul>
                {Data.map((items,index)=>(<li key={index}>
                    <img src={items.image} alt= {items.image} />
                    <h1>{items.name} {items.quantity}</h1>
                    <p></p>
                    <h1>{items.cost}</h1>
                    <div className={Styles.btns}>
                        <button>BUY NOW</button>
                        <button>🛒</button>
                        <button>♡</button>
                    </div>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default GroceryItems