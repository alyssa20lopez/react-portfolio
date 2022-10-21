import React from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <TwitterIcon />
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon /> */}
      </div>
      <p> &copy; 2022 </p>
    </div>
  )
}

export default Footer;