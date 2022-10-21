import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <VerticalTimeline lineColor='#333'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Weather Dashboard
          </h3>
          <p>This is a weather dashboard application that allows the user to see the weather outlook for multiple cities. This app will run in the browser and feature dynamically updated HTML and CSS.</p>
          <div className='link'>
            <a href='https://alyssa20lopez.github.io/weather-dashboard/' >Deployed App</a>
            <a href='https://github.com/alyssa20lopez/weather-dashboard' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Work Day Scheduler
          </h3>
          <p>This is a simple calendar application that allows a us for each hour of the day. This app will run in a brows dynamically updated HTML and CSS powered by jQuery.</p>
          <div className='link'>
            <a href='https://alyssa20lopez.github.io/work-day-scheduler/' >Deployed App</a>
          </div>
          <div className='link'>
            <a href='https://github.com/alyssa20lopez/work-day-scheduler' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Note Taker
          </h3>
          <p>This Note Taker application allows the user to write, save, and delete notes.This will use an Express.js back end and will save and retreive note data from a JSON file.</p>
          <div className='link'>
            <a href='https://note-taker-917.herokuapp.com/' >Deployed App</a>
          </div>
          <div className='link'>
            <a href='https://github.com/alyssa20lopez/note-taker' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Pokedex and Giphy API
          </h3>
          <p>A front-end interactive webpage that allows the user to search existing Pokemons, retrieve related gifs, and learn more about the specific Pokemon.</p>
          <div className='link'>
            <a href='http://bbelk.github.io/pokemon-giphy-group-project/' >Deployed App</a>
          </div>
          <div className='link'>
            <a href='https://github.com/BBelk/pokemon-giphy-group-project' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Interactive Dog Resource, Full-Stack Application
          </h3>
          <p>A full-stack interactive webpage allows the user to create an account, access resources for their dog and set up playdates with other members.</p>
          <div className='link'>
            <a href='http://evening-river-11733.herokuapp.com/' >Deployed App</a>
          </div>
          <div className='link'>
            <a href='https://github.com/tedtalktimmy/queen-city-pup' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date=''
        iconStyle={{ background: '#333', color: '#fff'}}
        // icon={<SortByAlphaIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Tech Blog
          </h3>
          <p>This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comments on other developers' posts.</p>
          <div className='link'>
            <a href='https://the-tech-girl.herokuapp.com/' >Deployed App</a>
            <a href='https://github.com/alyssa20lopez/tech-blog' >GitHub Repository</a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
