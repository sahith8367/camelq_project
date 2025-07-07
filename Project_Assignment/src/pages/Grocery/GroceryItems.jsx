import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Styles from './GroceryItems.module.css'

const GroceryItems = () => {
    const [Data , setData] = useState([]);
    const [buy , setBuy] =useState({});
    const [isbuy , setIsBuy]=useState(false);
    const handleBuy = (items)=>{
        setBuy(items);
        setIsBuy(true);
    }

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

    const handlecart = async(items)=>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/grocerycart/',
               {name: items.name,
                cost :items.cost,
                quantity :items.quantity,
                image :items.image}
            )
            alert("item Added Successful")
        }catch(err){
            console.log(err);
        }
    }
    const handlelikes = async(items)=>{
        try{
           const response = await axios.post('http://127.0.0.1:8000/api/groceryliked/',{
                name:items.name,
                cost : items.cost,
                quantity : items.quantity,
                img : items.image
            })
            alert('Item Added Successfull !');
        }catch(err){
            console.log(err+"type")
        }
    }
    const handleRender=()=>{
        if(isbuy==true){
            return (
                <div>
                    <img src={buy.image} alt="image" />
                    {buy.name}
                    {buy.cost}
                </div>
            );
            
        }else{
            return (<div className={Styles.cnt}>
        <h1 className={Styles.h1mens}>All Groceries</h1>
        <div className={Styles.Mcard}>
            <ul>
                {Data.map((items,index)=>(<li key={index}>
                    <img src={items.image} alt= {items.image} />
                    <h1>{items.name} {items.quantity}</h1>
                    <p></p>
                    <h1>{items.cost}</h1>
                    <div className={Styles.btns}>
                        <button onClick={()=>handleBuy(items)}>BUY NOW</button>
                        <button onClick={()=>handlecart(items)}>🛒</button>
                        <button onClick={()=>handlelikes(items)}>♡</button>
                    </div>
                </li>))}
            </ul>
        </div>
    </div>);
        }
    }
    
    
  return handleRender()
}

export default GroceryItems