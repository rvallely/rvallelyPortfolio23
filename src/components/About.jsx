import React from 'react';
import Nav from './Nav';
import { colourPaletteImageColourMap } from '../content/colourPaletteImageColourMap';

function About() {
    const currentImageColour = document.documentElement.style.getPropertyValue('--image-colour');

    const {
      aboutFlowDiagram,
    } =  colourPaletteImageColourMap[currentImageColour];
    return (
        <div className='page relative-page'>
            <Nav selectedItem='About' />
            <img id='about-flow-diagram' src={aboutFlowDiagram} alt='flow diagram of employment and software engineering journey' width='90%' height='auto'></img>
            {/* TODO: make img svg of managable size or pdf without toolbar (better quality) or work out how to do in html/css or using flow diagram package */}
            </div>

);
}

export default About;