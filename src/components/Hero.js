import "./HeroStyles.css";

import React from 'react'

import BackgroundImg from "../assets/desk.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="background">
            <img className="desk-img" src={ BackgroundImg } alt="desk"/>
        </div>
        <div className="overlay">
            <p>hi, my name is cynthia</p>
            <h1>i am motivated</h1>
            <Link to="/portfolio" className="btn">Portfolio</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Hero;