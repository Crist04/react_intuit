import React, { useState } from 'react';
import './style.css';


function DynamicForm({jsonData}){
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   alert('Form Data Submitted');

  };

  return (
    <form onSubmit={handleSubmit}>
      {jsonData.map((field) => (
        <div >
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Register</button>
    </form>
  );
}


export default DynamicForm;