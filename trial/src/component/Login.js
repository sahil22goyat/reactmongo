import React, { useState } from 'react';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(()=>{
  console.log("done sucessfully");
    }).catch((err)=>{
  console.log("error");
    })
  };

  return (
    <div className="form-container">
      <h1>Login Form react</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Enter Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Enter Password
          <input name="password" type="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Enter Age
          <input name="age" type="text" value={formData.age} onChange={handleChange} required />
        </label>
        <label>
          Enter Number
          <input name="number" type="text" value={formData.number} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
