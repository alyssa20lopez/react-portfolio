import React from "react";

import '../styles/About.css'
import profile from '../images/profile.png'

const About = () => {
  return (
    <div className='home'>
      <div>
        <img style={{ width: "300", height: 300 }} src={profile} alt="Profile"/>
      </div>
      <div className='about-me'>
        <h2> Hi, my name is Alyssa!</h2>
        <p className='blurb'> A software developer passionate about bring design concepts to life through code.</p>
        {/* <LinkedInIcon />
        <TwitterIcon />
        <GitHubIcon /> */}
      </div>
    </div>    
  )
}

export default About;