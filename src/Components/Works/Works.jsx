import React, { useContext, useEffect, useState } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
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
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Worked in Betatest Solutions
        </span>
        <span>Web Developer(3.6+ years Exp)</span>
        <span
          style={{ lineHeight: '20px', color: darkMode ? 'white' : 'gray' }}
        >
          Involved in the development of multiple components for Tracking App,
          Podcast App and Meditation App.
          <br /> Working knowledge with React JS and Typescript. <br />
          Created reusable components with React JS. <br /> Worked with REST API
          integration. <br /> Unit testing experience in jest and enzyme. <br />{' '}
          Worked on Functional based components. <br /> Worked on React Hooks.{' '}
          <br /> Extensive experience in development using JavaScript, React JS,
          HTML5 & CSS3. <br /> Experience working in Agile Scrum. <br />{' '}
          Software Development Life Cycle.
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button s-button">Hire Me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* ###########3right side######  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margib: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* #####back circle  ########  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
