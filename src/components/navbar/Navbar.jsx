import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

// BEM -> Block Element Modifier syntax

const Navbar = () => {
  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gp4__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt4__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt4">What is GPT4?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="gpt4__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar