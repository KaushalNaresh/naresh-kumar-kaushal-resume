import React from 'react';
import './ProjectModal.css';
import Omdena from './images/Omdena.gif';
import Netflix from './images/Netflix.gif';
import Btech from './images/Btech.gif';
import Genre from './images/Genre.gif';
import Covid from './images/covid.gif';
import {BsPlayCircle} from "react-icons/bs"

const ProjectModal = ({ isOpen, onClose, projData }) => {

const logos = {'Omdena': Omdena,
    'Btech': Btech,
    'Netflix': Netflix,
    'Genre': Genre,
    'Covid': Covid
};
    

  if (!isOpen) return null;

  return (
    <>
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal">

            <button className="modal-close" onClick={onClose}>&times;</button>
            <a href={projData.link}>
                <div className="modal-img-banner">
                    <img src = {logos[projData.logo]}></img>
                    <div className="modal-project-overlay"></div>
                    <div className='activityCard__playButton'><BsPlayCircle color='white'/></div>
                </div>
            </a>
            <h1 className="modal-project-name">{projData?.name}</h1>
            <div className='modal-project__details'>
                <div className='modal-project__info'>
                    <span><strong>Skills:</strong> {projData?.skills}</span>
                </div>
                <div className='modal-project__timeline'>
                    <div>{projData?.timeline}</div>
                </div>
            </div>
           
            <div className='modal-project__description'>
                <h3>Description</h3>
                <ul>
                    {Object.entries(projData?.description).map(([role, description], index) => (
                        <li key={index}><strong>{role}:</strong> {description}</li>
                    ))}
                </ul>
            </div>
        
        </div>
    </>
  );
};

export default ProjectModal;