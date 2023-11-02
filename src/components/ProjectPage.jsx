import React from 'react';
import Nav from './Nav';

function ProjectPage ({projectData: { NAME, DESCRIPTION, IMAGE, HOSTED_APP_LINK, SOURCE_CODE} }) {
    return (
        <div className='container pink-red-colour-palette page relative-page'>
        <div className='row'>
            <div className='col'>
                <Nav selectedItem='Projects'/>
                </div>
            </div>
        <div className='row'>
            <div className='col'>
                <h1 className='smaller-title-detail'>{NAME}</h1>
            </div>
        </div>
        <div className='inline-container'>
            <div className='one-of-two-inline-element' style={{ display: 'grid', placeItems: 'center'}}>
                <div className='rounded-box project-description-container'>
                    {DESCRIPTION}
                </div>
            </div>
            <div className='one-of-two-inline-element' style={{ display: 'grid', placeItems: 'center'}}>
                <h2 style={{ paddingLeft : '0px'}}>
                    {HOSTED_APP_LINK
                    ?
                    <div>
                        <a className='link' target="_blank" rel="noopener noreferrer" href={HOSTED_APP_LINK.link}>{HOSTED_APP_LINK.displayText}</a>
                        {HOSTED_APP_LINK.additionalInfo &&  <p>{HOSTED_APP_LINK.additionalInfo}</p>}
                    </div>
                    :
                    <p>🏗️ Under construction, link coming soon... 🏗️</p>
                    }
                    </h2>
                {IMAGE}
                {SOURCE_CODE
                ?
                <h3 className='project-source-code'>
                Source Code
                <br></br>
                <ul>
                    <li>
                        <a className='link' target="_blank" rel="noopener noreferrer" href={SOURCE_CODE.frontend}>Frontend</a>
                    </li>
                    <li>
                        <a className='link' target="_blank" rel="noopener noreferrer" href={SOURCE_CODE.backend}>Backend</a>
                    </li>
                </ul>
            </h3>
            :
            <p></p>}
               
            </div>
        </div>
    </div>
    );
}

export default ProjectPage;