import React, { useState } from 'react';
import Nav from './Nav';
import { colourPaletteImageColourMap } from '../content/colourPaletteImageColourMap';

function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMessage] = useState({ state: false, msg: ''});
    const currentImageColour = document.documentElement.style.getPropertyValue('--image-colour');

    const { airplaneImg, shape5, shape6 } =  colourPaletteImageColourMap[currentImageColour];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://${process.env.REST_API_ID}.execute-api.eu-west-2.amazonaws.com/default/sendEmail`, {
                method: 'POST',
                body: JSON.stringify({
                    senderName: name,
                    senderEmail: email,
                    message: message,
                }),
            });
            const responseFromEmail = await response.json();

            if (response.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                document.getElementById('contact-form').reset();
                setSuccessMessage({ state: true, msg: responseFromEmail.msg });
            } else {
                setSuccessMessage({ state: false, msg: responseFromEmail.msg })
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='page relative-page'>
            <Nav selectedItem='Contact'/>
            <div className='inline-container'>
                <div className='one-of-two-inline-element' style={{ marginRight: '10px' }}>
                    <div className='image-container'>
                        <img
                        id='shape5'
                        className='drift-in-from-bottom-contact'
                        src={shape5}
                        height='70%'
                        alt='shape wall'/>
                        <img
                        id='shape6'
                        className='drift-in-from-top-contact'
                        src={shape6}
                        height='70%'
                        alt='square with cicle cut out and ray going through the centre'/>
                    </div>
                </div>
                <div className='one-of-two-inline-element' style={{ marginLeft: '10px' }}>
                    <form
                    className='form more-rounded-box'
                    id='contact-form'
                    onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div style={successMsg.state === true ? { color: '#5cb85c', marginTop: '2%',}: { color: '#f0ad4e', marginTop: '2%',}}>
                                <strong>
                                    {successMsg.msg}
                                </strong>
                            </div>
                            <input
                            className='more-rounded-box contact-input'
                            type="text"
                            name="name"
                            placeholder='Your name...'
                            required
                            style={
                                {
                                    width: '90%',
                                    height: '6vh',
                                    marginTop: '2%',
                                }
                            }
                            onChange={(e) => setName(e.target.value)}
                            value={name}>
                            </input>
                        </div>
                        <div className="form-group">
                            <input
                            className='more-rounded-box contact-input'
                            type="email"
                            name="email"
                            placeholder='Your email...'
                            required
                            style={
                                {
                                    width: '90%',
                                    height: '6vh',
                                    marginTop: '4%',
                                }
                            }
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}>
                            </input>
                        </div>
                        <div className="form-group">
                            <textarea
                            className='more-rounded-box contact-input'
                            name="message"
                            rows="4"
                            placeholder='Your message...'
                            required
                            style={
                                { 
                                    width: '90%',
                                    height: '40vh',
                                    marginTop: '4%',
                                    marginBottom: '2%',
                                    paddingTop: '2%',
                                }
                            }
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}></textarea>
                        </div>
                        <button
                        id='contact-submit-button'
                        type='submit'
                        className='btn rounded-box contact-submit-button'
                        style={{ textDecoration: 'none', paddingTop: '1%', marginBottom: '3%' }}>
                            <img
                            id='airplane-submit-button-img'
                            className='contact-form-submit-button'
                            src={airplaneImg}
                            alt='paper airplane submit button'/>
                        </button>
                    </form>
                </div>
            </div>
    </ div>
    );
}

export default Contact;