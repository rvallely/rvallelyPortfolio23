import { Link } from 'react-router-dom';
import React from 'react';
import { colourPaletteImageColourMap } from '../content/colourPaletteImageColourMap';

function Nav ({selectedItem}) {
    const root = document.documentElement;

    const changeColourPalette = (
        {
            backgroundColour,
            textColour,
            unselectedNavItemBackgroundColour,
            formInputColour,
            formBackgroundColour,
            formBorderColour,
            formTextColour,
            imageColour,
        } ) => {
        root.style.setProperty('--background-colour', backgroundColour)
        root.style.setProperty('--text-colour', textColour)
        root.style.setProperty('--unselected-nav-item-background-colour', unselectedNavItemBackgroundColour)
        root.style.setProperty('--form-input-colour', formInputColour)
        root.style.setProperty('--form-background-colour', formBackgroundColour)
        root.style.setProperty('--form-border-colour', formBorderColour)
        root.style.setProperty('--form-text-colour', formTextColour)
        root.style.setProperty('--image-colour', imageColour);

        const airplaneImg = document.getElementById('airplane-submit-button-img');
        if (airplaneImg) {
            document.getElementById('airplane-submit-button-img').src = colourPaletteImageColourMap[imageColour].airplaneImg
        }
        const aboutFlowDiagram = document.getElementById('about-flow-diagram');
        if (aboutFlowDiagram) {
            document.getElementById('about-flow-diagram').src = colourPaletteImageColourMap[imageColour].aboutFlowDiagram
        }
        const {
            shape1,
            shape2,
            shape3,
            shape4,
            shape5,
            shape6 } = ['1', '2', '3', '4', '5', '6'].reduce((acc, number) => {
                const id = `shape${number}`;
                return {...acc, [id] : document.getElementById(id) }
            }, {});
        if (shape1) {
            document.getElementById('shape1').src = colourPaletteImageColourMap[imageColour].shape1
        } 
        if (shape2) {
            document.getElementById('shape2').src = colourPaletteImageColourMap[imageColour].shape2
        }
        if (shape3) {
            document.getElementById('shape3').src = colourPaletteImageColourMap[imageColour].shape3
        }
        if (shape4) {
            document.getElementById('shape4').src = colourPaletteImageColourMap[imageColour].shape4
        }
        if (shape5) {
            document.getElementById('shape5').src = colourPaletteImageColourMap[imageColour].shape5
        }
        if (shape6) {
            document.getElementById('shape6').src = colourPaletteImageColourMap[imageColour].shape6
        }   
    }
    // TODO: reduce code in changeColourPalette could it just be colourOne - colour4?
    const handleColourChange = (e) => {
        const selectedColourPalette = e.target.getAttribute('value');
        switch (selectedColourPalette) {
            //BLUE GREY #98b4cc
            // TIN GREY a5abaf
            case 'blue-green-colour-palette':
                changeColourPalette({
                    backgroundColour: '#002F7B',
                    textColour: '#AAFFBB',
                    unselectedNavItemBackgroundColour: '#002F7B',
                    formInputColour: '#aaffbb',
                    formBackgroundColour: '#98b4cc',
                    formBorderColour: '#002F7B',
                    formTextColour: '#002f7b',
                    imageColour: '#AAFFBB',
                })
                break;
            case 'white-blue-colour-palette':
                changeColourPalette({
                    backgroundColour: '#FFFFFF',// colourTwo
                    textColour: '#002F7B', // colourOne
                    unselectedNavItemBackgroundColour: '#FFFFFF',// colourTwo
                    formInputColour: '#FFFFFF',// colourTwo
                    formBackgroundColour: '#d6def3',// colourThree
                    formBorderColour: '#002F7B',// colourOne
                    formTextColour: '#002F7B',// colourOne
                    imageColour: '#002F7B',// colourOne
                })
                // changeColourPalette({
                //     colourOne: '#E60000',
                //     colourTwo: '#EEDEFF',
                //     colourThree: '#FFF3EF',
                //     colourFour: '#FFFFFF',
                // })
                break;
            case 'pink-red-colour-palette':
                changeColourPalette({
                    backgroundColour: '#EEDEFF',// colourTwo
                    textColour: '#E60000',// colourOne
                    unselectedNavItemBackgroundColour: '#FFFFFF',
                    formInputColour: '#FFF3EF',
                    formBackgroundColour: '#FFFFFF',
                    formBorderColour: '#E60000',// colourOne
                    formTextColour: '#E60000',// colourOne
                    imageColour: '#E60000',// colourOne
                })
                // changeColourPalette({
                //     colourOne: '#E60000',
                //     colourTwo: '#EEDEFF',
                //     colourThree: '#FFF3EF',
                //     colourFour: '#FFFFFF',
                // })
                break;
            default: 
                changeColourPalette({
                    backgroundColour: '#000000',
                    textColour: '#E60000',
                    unselectedNavItemBackgroundColour: '#FFFFFF',
                    formInputColour: '#FFF3EF',
                    formBackgroundColour: '#FFFFFF',
                    formBorderColour: '#E60000',
                    imageColour: '#E60000',
                })
                // changeColourPalette({
                //     colourOne: '#E60000',
                //     colourTwo: '#EEDEFF',
                //     colourThree: '#FFF3EF',
                //     colourFour: '#FFFFFF',
                // })
        }

    }
    return (
        <nav style={{ marginBottom: '10px', marginTop: '0px' }}>
        <ul className="nav">
            {[
                { displayText: 'Home', path: '/' },
                { displayText: 'Projects', path: '/projects' },
                { displayText: 'About', path: '/about' },
                { displayText: 'CV', path: '/cv' },
                { displayText: 'Contact', path: '/contact' }
            ].map(({ displayText, path }) => {
                return <li className='nav-item-container'><Link to={path} className={(selectedItem === displayText ? 'selected-nav-item ': 'unselected-nav-item ') + 'nav-item rounded-box'}>{displayText}</Link></li>
            })}
            {/* TODO: does colour selector need to be more obvious? (Maybe add 'Prefer a different colour palette?' label) */}
            <li>
                <div className='square-container'>
                    <div className='square pink-red-split rounded-box btn' value='pink-red-colour-palette' onClick={handleColourChange}>
                    </div>
                    <div className='square blue-green-split rounded-box btn' value='blue-green-colour-palette' onClick={handleColourChange}>
                    </div>
                    <div className='square white-blue-split rounded-box btn' value='white-blue-colour-palette' onClick={handleColourChange}>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
    );
}

export default Nav;