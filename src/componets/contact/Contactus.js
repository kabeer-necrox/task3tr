import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      console.log(response.data); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contactusform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          className="inputbox"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          className="inputbox"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          className="inputbox"
          value={formData.password}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit" className="submitbtn">
          submit
        </button>
      </form>
    </div>
  );
}

export default Contactus;
