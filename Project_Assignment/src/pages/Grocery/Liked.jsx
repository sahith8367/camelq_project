import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Styles from './GroceryItems.module.css';
const Liked = () => {
  const [data , setData] = useState([]);
  const handledata=async()=>{
    try{
      const response = await axios.get(`http://127.0.0.1:8000/api/groceryliked`);
      setData(response.data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    handledata();
  },[])
  const handledelete=async(id)=>{
    try{
      await axios.delete(`http://127.0.0.1:8000/api/groceryliked/${id}`);
    }catch(err){
      console.log(err);
    }
    handledata();
    handlebuy();
  }
  const handlebuy=()=>{
    if(data.length>0){
      return (<div className={Styles.btn}>BUY NOW</div>) ;
    }else{
      return null;
    }
  }
  return (
    <div>
            <div className={Styles.groh1}><h1>LIKED ITEMS</h1></div>
            <div>
                <ol className={Styles.listCnt}>
                    {data.map((items,index)=>(<li key={index}>
                                    <div><img src={items.img} alt="" />
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

export default Liked