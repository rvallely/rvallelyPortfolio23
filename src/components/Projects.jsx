import React from 'react';
import Nav from './Nav';
import projectContent from '../content/project/projectContent';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className='pink-red-colour-palette page relative-page'>
            <Nav selectedItem='Projects'/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 className='smaller-title-detail'>Projects</h1>
            </div>
            <div className='inline-container' style={{ marginTop: '3%' }}>
                {Object.keys(projectContent).map(( key ) => {
                    return <div className='one-of-three-inline-element'>
                        <Link to={'/projects/' + projectContent[key].PATH_NAME}>
                             <img
                             className='projects-tile-image rounded-box project-tile-box-shadow'
                             src={projectContent[key].PROJECT_TILE}
                             alt='project identifier'></img>
                        </Link>
                        </ div>
                    })}
            </div> 
        </ div>
    );
}

export default Projects;

