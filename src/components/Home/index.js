import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'l', 'i']
    const jobArray = ['a', 'n', 'd', ' ', 't', 'h', 'i', 's', ' ', 'i', 's']
    const job2Array = ['m', 'y', ' ', 'p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <img src={LogoTitle} alt="developer" />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={job2Array}
                idx={22} />
                </h1>
                <h2>Cyber Security Undergraduted Student</h2>
                <Link to='/work' className='flat-button'>My Work</Link>
            </div>

        </div>
    )
}

export default Home