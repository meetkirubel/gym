"use client";
import React, { useState } from 'react'
import bgImg from '@public/images/bmi.jpg'
import Image from 'next/image';

const BMIS = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [sex, setSex] = useState(1);
    const [bmi, setBmi] = useState(0);
    const [bmiCategory, setBmiCategory] = useState("");
  
    const calculateBMI = () => {
      const adjustedBMI = (weight / (height * height)) * (1 - 0.0072 * age) * (1 - 0.0062 * sex);
      setBmi(adjustedBMI);
  
      // Calculate BMI category
      if (adjustedBMI < 18.5) {
        setBmiCategory("Underweight");
      } else if (adjustedBMI >= 18.5 && adjustedBMI < 25.0) {
        setBmiCategory("Normal weight");
      } else if (adjustedBMI >= 25.0 && adjustedBMI < 30.0) {
        setBmiCategory("Overweight");
      } else if (adjustedBMI >= 30.0) {
        setBmiCategory("Obese");
      }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    
      };
  return (
    <section className="dark-section" >
    
    <div className="container__flex full__container__full">
        <div className="left BMI__left lite-section">
        <div className="title__header BMI">
            <span className="top">ADVANCED CALCULATOR</span>
            <h2>Calculate Your BMI</h2>
          </div>
            <form  onSubmit={handleSubmit}>

            
          <div className='inputs__container'>

        <div className='input__container'>
        <h6>Weight (kg)</h6>
        <input
        type="number"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        placeholder="Weight (Kg)"
        required
      />
      </div>


      <div className='input__container'>
        <h6>Height (M)</h6>
      <input
        type="number"
        value={height}
        onChange={(event) => setHeight(event.target.value)}
        placeholder="Height (m)"
        required
      />
      </div>


      <div className='input__container'>
        <h6>Age</h6>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
        required
      />
      </div>


      <div className='input__container custom-select '>
        <h6>GENDER</h6>
      <select value={sex} onChange={(event) => setSex(event.target.value)}>
        <option value="0">Female</option>
        <option value="1">Male</option>
      </select>
      </div>
      <button className='btn bg-yellow-500 hover:bg-yellow-200 font-bold py-2 px-4 rounded' onClick={calculateBMI}>Calculate BMI</button>
    </div>
    <div className=" result__container">
      
      <h2>BMI: {bmi.toFixed(2)}</h2>
      <h3>BMI category: {bmiCategory}</h3>
      </div>
      </form>

  </div>
            <div className="right BMI__right">
            <Image
                        src={bgImg}
                        alt="Power Gym Addis"
                        fill={true}
                        loading='lazy'
                        placeholder="blur"
                     />
            </div>
        </div>
    </section>
  )
}
 export default BMIS;