import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={aboutArray}
                idx={15} />
                </h1>
            </div>

        </div>
    )
}

export default About