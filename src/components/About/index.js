import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() => {
        setTimeout(() =>{
        return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b','o','u','t',' ', 'M', 'e']}
                    idx={15} 
                    />
                </h1>
                <p>I am a front-end developer proficient in JavaScript and React, 
                continuously learning and improving my skills.
                </p>
                <p>My goal is to create visually appealing and user-friendly websites
                and web applications that enhance the user experience.
                </p>
                <p>Through my studies and personal projects, I have gained valuable 
                knowledge and experience that continue to shape my career as a developer. 
                I am eager to embrace new challenges and expand my skill set by working with different teams and clients.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About