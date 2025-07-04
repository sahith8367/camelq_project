import React, { useState } from 'react'
import Styles from './Login.module.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [username , setUsername]=useState();
  const [password , setPassword] = useState('');
  const [message , setMessage] = useState('')
  const handleReset = () => {
    setUsername('');
    setPassword('');
    setMessage('')
  };
 
  return (
    <div className={Styles.signcnt}>
            <div className={Styles.main}>
              <h1><NavLink to='/home'>Go to Main</NavLink></h1>
            </div>
        <form  className={Styles.sign}>
          
          <input 
            type="text"   
            placeholder='User Name' 
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input 
            type="password"   
            placeholder='Password' 
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {message && (
            <p className="text-center text-sm font-medium text-gray-700">
              {message}
            </p>
          )}
          <div className={Styles.btn}>
            <button type="submit">
            Login
          </button>
          <button type="reset" onClick={handleReset}>↻</button>
          
          <button><NavLink to='/signin'>Sign in</NavLink></button>
          </div>
        </form>
        
      
    </div>
  )
}

export default Login