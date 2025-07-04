import React, { useState } from 'react'
import Styles from './Signin.module.css'
import { NavLink } from 'react-router-dom';

const Signin = () => {
  const [fullName , setFullName]=useState();
  const [username , setUsername]=useState();
  const [mobileNumber , setMobileNumber]=useState();
  const [email , setEmail]=useState('');
  const [dob , setDob]=useState();
  const [password , setPassword] = useState('');
  const [message , setMessage] = useState('')
  const handleReset = () => {
    setFullName('');
    setUsername('');
    setMobileNumber();
    setDob();
    setEmail('');
    setPassword('');
    setMessage('');
  };
    const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    setMessage('Creating Account'); // Show a loading message

    const userData = {
      full_name: fullName,
      username: username,
      mobile_number: mobileNumber,
      email: email,
      date_of_birth: dob, 
      password: password,
    };

    console.log('User Data:', userData);

    try {
      // Replace with your Django API endpoint URL
      const response = await fetch('http://localhost:8000/api/register/', { // Assuming Django runs on port 8000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setMessage('Registration successful! You can now log in.');
        handleReset(); // Clear the form on successful submission
      } else {
        const errorData = await response.json();
        // Display specific error messages from Django if available
        setMessage(`Registration failed: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('An error occurred during registration. Please try again.');
    }
  }; 
 
  return (
    <div className={Styles.signcnt}>
      <div className={Styles.main}>
        <h1><NavLink to='/home'>Go to Main</NavLink></h1>
      </div>
        <form onSubmit={handleSubmit} className={Styles.sign}>
          {message && (
            <p className="text-center text-sm font-medium text-gray-700">
              {message}
            </p>
          )}
          <input 
          type="text"   
          placeholder='Full Name' 
          required 
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
          />
          <input 
            type="text"   
            placeholder='User Name' 
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input 
            type="number"   
            value={mobileNumber}
            placeholder='Mobile Number' 
            required
            
            onChange={(e)=>setMobileNumber(e.target.value)}
          />
          <input 
            type="mail"   
            placeholder='E-Mail' 
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input 
            type="date"   
            placeholder='Date of Birth' 
            required
            value={dob}
            onChange={(e)=>setDob(e.target.value)}
          />
          <input 
            type="password"   
            placeholder='Password' 
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          
          <div className={Styles.btn}>
            <button type="submit">
            Sign up
          </button>
          <button type="reset" onClick={handleReset}>↻</button>
          
          <button><NavLink to='/login'>Login</NavLink></button>
          </div>
        </form>
        
      
    </div>
  )
}

export default Signin