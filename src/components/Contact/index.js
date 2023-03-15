import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
        
    useEffect (() => {
        setTimeout(() =>{
        return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mq6kro7',
                'template_a94wsiq',
                refForm.current,
                'g2UvnFODU8ydNXsTZ'
            )
            .then (
                () => {
                    alert('Message seccessfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Falied to send the message, please try again')
                }
            )
        }


        
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                If you're looking for a dedicated front-end web developer to 
                join your team, I'm interested in hearing more. Let's discuss 
                how I can apply my passion for web development and commitment 
                to quality to help your company achieve its goals.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'> 
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'> 
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Carlos Andrade
                <br />
                Carrera 3 Oste #2-48, COMUNA 3<br />
                Cali, Valle del Cauca <br />
                Colombia.
                <span>carlosandradeveloper@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[3.45865, -76.53309]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[3.45865, -76.53309]}>
                        <Popup>Carlos lives here, come over for a cup of coffee :) </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    ) 
}

export default Contact