import React, { useContext, useEffect, useState } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Krishna from '../../img/KrishnaDev.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [years, setYears] = useState(2);
  const [months, setMonths] = useState(5);

  useEffect(() => {
    const startDate = new Date('2022-09-01');
    const currentDate = new Date();

    const diffInMilliseconds = currentDate - startDate;

    // Calculate the number of months and remaining milliseconds
    let monthsToAdd = Math.floor(
      diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375)
    );
    let remainingMilliseconds =
      diffInMilliseconds % (1000 * 60 * 60 * 24 * 30.4375);

    // Calculate the number of years
    let yearsToAdd = Math.floor(monthsToAdd / 12);

    // Update the months and years
    setMonths((prevMonths) => {
      const newMonths = prevMonths + monthsToAdd - yearsToAdd * 12;

      // Check for day conditions
      if (currentDate.getDate() === 1 || currentDate.getDate() === 15) {
        return newMonths;
      } else {
        return prevMonths;
      }
    });

    setYears((prevYears) => prevYears + yearsToAdd);

    // Check if months have reached 12 or more and add years accordingly
    if (months >= 12) {
      setYears((prevYears) => prevYears + 1);
      setMonths(0);
    }

    // Create an interval to update months when it's the 30th or 31st day
    const interval = setInterval(() => {
      if (currentDate.getDate() === 30 || currentDate.getDate() === 31) {
        setMonths((prevMonths) => prevMonths + 1);
      }
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hello, I Am</span>
          <span> Krishna Kumar</span>
          <span
            style={{ lineHeight: '20px', color: darkMode ? 'white' : 'gray' }}
          >
            I am a seasoned web developer with 3.6 years of expertise,
            specializing in the Retail and Banking domains. Throughout my
            professional journey, I have honed my skills in crafting robust web
            applications. My proficiency extends across a spectrum of
            technologies, including HTML5, CSS3, JavaScript, TypeScript,
            ReactJs, Vite, Redux, Redux Toolkit, React Native, NestJs, GraphQL,
            MongoDB, ExpressJs, JWT, and NodeJs. This diverse skill set empowers
            me to deliver high-quality, dynamic, and responsive web solutions
            that cater to the unique requirements of the Retail and Banking
            sectors. My commitment to staying at the forefront of technology
            ensures that I am well-equipped to tackle the challenges of modern
            web development, providing innovative and efficient solutions for a
            seamless user experience.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/CoderKrishDev" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/krishdevsingh/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Krishna} alt="" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ left: '74%', top: '-4%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem' }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="React Native" txt2="App" />
        </motion.div>
        {/* ######## blur gradient color div ######  */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            left: '-9rem',
            width: '21rem',
            height: '11rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
