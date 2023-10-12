import React from 'react';
import Nav from './Nav';
import { colourPaletteImageColourMap } from '../content/colourPaletteImageColourMap';

function Home() {
  const currentImageColour = document.documentElement.style.getPropertyValue('--image-colour');

  const {
    shape1,
    shape2,
    shape3,
    shape4,
  } =  colourPaletteImageColourMap[currentImageColour];
  return (
    <div className='container pink-red-colour-palette page relative-page'>
      <Nav selectedItem='Home'/>
      <div>
        <h1 className='title-detail'>
          Rosie Vallely
        </h1>
        <p className='lead-text'>
          Hi, I'm Rosie. Thanks for stopping by! Code is magic. I'm all about
          designing and building quality programs, gaining a deep
          understanding of the academic intricacies that underpin them, and
          turning a concept into customer satisfaction one line at a time.
          <br />
          <br />
          Please take a look around and don't hesitate to get in touch.
        </p>
      </div>
      <div className='image-container'>
        <img
          id='shape1'
          src={shape1}
          height='85.5%'
          alt='Geometric Structures 1'
          className='drift-in-from-left'
        />
        <img
          id='shape2'
          src={shape2}
          height='68.4%'
          alt='Geometric Structures 2'
          className='drift-in-from-bottom'
        />
          <img
          id='shape3'
          src={shape3}
          height='85.5%'
          alt='Geometric Structures 3'
          className='drift-in-from-right'
        />
          <img
          id='shape4'
          src={shape4}
          height='67.45%'
          alt='Geometric Structures 4'
          className='drift-in-from-top'
        />
      </div>
    </div>
  );
}

export default Home;
