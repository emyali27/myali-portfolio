import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';


const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const experienceArray = ['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        <div className="container experience-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={experienceArray}
                idx={22} />
                </h1>
            </div>

        </div>
    )
}

export default Experience