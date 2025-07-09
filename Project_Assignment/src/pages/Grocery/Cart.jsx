import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Styles from './GroceryItems.module.css';

const Cart = () => {

    const [data ,setData]=useState([]);
    const handleGroceryItems = async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/grocerycart/');
            setData(response.data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        handleGroceryItems();
    },[]);
    const handledelete=async(id)=>{
        try{
            await axios.delete(`http://127.0.0.1:8000/api/grocerycart/${id}`);
        }catch(err){
            console.log(err);
        }
        handleGroceryItems();
        handlebuy();
    }
    const handlebuy=()=>{
        if(data.length>0){
            return (<div className={Styles.btn}>BUY NOW</div>);
        }else{
            return null;
        }
    }
  return (
    <div>
        <div className={Styles.groh1}><h1>CART ITEMS</h1></div>
        <div>
            <ol className={Styles.listCnt}>
                {data.map((items,index)=>(<li key={index}>
                                <div><img src={items.image} alt="" />
                                <div><pre>{items.name}  {items.quantity}</pre>
                                {items.cost}
                                </div>
                                    <button onClick={()=>handledelete(items.id)}>REMOVE ITEM</button>
                                </div>
                                
                                
                            </li>))}
            </ol>
        </div>
        {handlebuy()}
    </div>
  )
}
export default Cart