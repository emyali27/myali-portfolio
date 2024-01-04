import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';


const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const workArray = ['M', 'y', ' ', 'W', 'o', 'r', 'k']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        <div className="container work-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={workArray}
                idx={15} />
                </h1>
            </div>

        </div>
    )
}

export default Work