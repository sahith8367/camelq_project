import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Styles from './Mens.module.css'

const Mens = () => {
    const [Data , setData] = useState([]);

    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const responce=await axios.get(`http://127.0.0.1:8000/api/dresses/`);
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
        <h1 className={Styles.h1mens}>Mens Wear's</h1>
        <div className={Styles.Mcard}>
            <ul>
                {Data.map((items,index)=>(<li key={index}>
                    <img src={items.image} alt= {items.image} />
                    <h1>{items.name} {items.color} color</h1>
                    <p>{items.about}</p>
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

export default Mens