import React from "react";
import '../styles/Resume.css'

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <a href="https://docs.google.com/document/d/1YTqCHF31IttaUXZZPZaRB4tVxlWYJG5Y/edit?usp=sharing&ouid=106074029621805570017&rtpof=true&sd=true">
        Access my Full Resume!
      </a>

      <h2 className="header"> Technical Skills:</h2>
      <div className="list">
        <ul>JavaScript</ul>
        <ul>HTML5</ul>
        <ul>CSS3</ul>
        <ul>jQuery</ul>
        <ul>Bootstrap</ul>
        <ul>Heroku</ul>
        <ul>MySQL</ul>
        <ul>NoSQL</ul>
        <ul>MongoDB</ul>
        <ul>Express.js</ul>
        <ul>React.js</ul>
        <ul>Node.js</ul>
        <ul>Rest API</ul>
        <ul>Responsive Design</ul>
      </div>
    </div>
  );
};

export default Resume;
