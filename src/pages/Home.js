import React from 'react';
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css'
import profile from '../images/profile.png'

const Home = () => {
  return (
    <div className='home'>
      <div>
        <img style={{ width: 300, height: 300 }} src={profile} alt="Profile Image"/>
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

export default Home;
