import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import '../styles/Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <VerticalTimeline lineColor='#333'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='Oct 2022'
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Interactive Dog Resource, Full-Stack Application
          </h3>
          <p>A full-stack interactive webpage allows the user to create an account, access resources for their dog and set up playdates with other members.</p>
          <div className='link'>
            <a href='http://evening-river-11733.herokuapp.com/' >Deployed App</a>
            <a href='https://github.com/tedtalktimmy/queen-city-pup' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
