import React from 'react'
import ActivityCard from './ActivityCard'
import './Projects.css'
import * as Constants from './Constants';
import Omdena from './images/Omdena.gif';
import Netflix from './images/Netflix.gif';
import Btech from './images/Btech.gif';
import Genre from './images/Genre.gif';
import { useState } from 'react';
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function Projects() {

  const cardPerRow = 3;
  const [numOfCardVis, setNumOfCardVis] = useState(cardPerRow);
  
  const logos = {'Omdena': Omdena,
                 'Btech': Btech,
                 'Netflix': Netflix,
                 'Genre': Genre};
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='projects__row'>
            {
                Constants.activities?.slice(0, numOfCardVis)?.map((activity, idx) => (
                    <ActivityCard   key={idx}
                                    name={activity.name} 
                                    timeline={activity.timeline}
                                    skills={activity.skills}
                                    description={activity.description}
                                    logo={logos[activity.logo]}
                                    link={activity.link}/>
                ))
            }
        </div>
        {
            Constants.activities.length > 3 && Constants.activities.length > numOfCardVis 
            ?    <div className='projects__showMore__button' onClick={() => setNumOfCardVis(numOfCardVis+cardPerRow)}>
                                                    <IoIosArrowDropdown style={{
                                                                        position:'absolute',
                                                                        left:0,
                                                                        right:0,
                                                                        margin: '0 auto',
                                                                        bottom: '1.5em'
                                                    }}/>
                </div> 
                : Constants.activities.length > 3 && Constants.activities.length <= numOfCardVis 
                ?   <div className='projects__showMore__button' onClick={() => setNumOfCardVis(cardPerRow)}>
                        <IoIosArrowDropup style={{
                                            position:'absolute',
                                            left:0,
                                            right:0,
                                            margin: '0 auto',
                                            bottom: '1.5em'
                        }}/>
                    </div> 
                : <></>
        }
        
    </div>
  )
}

export default Projects