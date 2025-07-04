import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [data, setdata] = useState({
    name: '',
    cost: '',
    color: '',
    about: '',
    image: null,
  });

  const [message, setMessage] = useState('');
  const [cart, setCart] = useState({});

  const handledata = (e) => {
    const { name, value, type, files } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    if (!data.name || !data.cost || !data.color || !data.about || !data.image) {
      setMessage('Please fill in all fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('cost', data.cost);
    formData.append('color', data.color);
    formData.append('about', data.about);
    formData.append('image', data.image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cartdress/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('Upload successful!');
        setdata({
          name: '',
          cost: '',
          color: '',
          about: '',
          image: null,
        });
        
        // You might need to directly clear the file input element's value if it doesn't reset automatically
      } else {
        setMessage(`Upload failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error during upload:', error);
      setMessage(`An error occurred: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder='name'
          name="name"
          value={data.name}
          onChange={handledata}
          required
        />
        <input
          type="text" 
          placeholder='cost'
          name="cost"
          value={data.cost}
          onChange={handledata}
          required
        />
        <input
          type="text"
          placeholder='color'
          name="color"
          value={data.color}
          onChange={handledata}
          required
        />
        <textarea
          placeholder='about'
          name="about"
          value={data.about}
          onChange={handledata}
          required
        ></textarea>
        <input
          type="file"
          name="image"
          onChange={handledata}
          required
        />
        {data.image && <p>Selected file: {data.image.name}</p>}
        <button type='submit'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;