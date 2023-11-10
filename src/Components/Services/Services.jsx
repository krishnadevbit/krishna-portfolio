import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './krishna-mern-3.6+year.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
  const transition = { duration: 1, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span
          style={{ lineHeight: '20px', color: darkMode ? 'white' : 'gray' }}
        >
          I have contributed significantly to the development of various
          components within the <br />
          realm of banking software. My experience includes hands-on involvement
          in crafting and
          <br /> integrating REST APIs, showcasing my adeptness in creating
          seamless connections <br />
          between different system components. Additionally, I have demonstrated
          my
          <br />
          design skills by creating a Shopping Cart site using React and Redux,
          <br />
          emphasizing both functionality and a user-friendly interface.
          <br />
          Furthermore, I have successfully designed and implemented a MERN Stack
          <br />
          Project, utilizing MongoDB, Express, React, and NodeJs, showcasing my
          <br />
          ability to work across the entire stack to deliver comprehensive
          <br />
          solutions.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '18rem' }}
          transition={transition}
          style={{ left: '24rem' }}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Tools Used'}
            detail={'Vs Code, Webstorm, Atom, Postman, MongoDB Compass, GitHub'}
          />
        </motion.div>
        <motion.div
          initial={{ left: '-2rem', top: '8rem' }}
          whileInView={{ left: '2rem', top: '12rem' }}
          transition={transition}
          style={{ top: '12rem', left: '-2rem' }}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html5, Css3, JavaScript, ReactJs, Redux, TypeScript'}
          />
        </motion.div>
        <motion.div
          initial={{ left: '25rem', top: '19rem' }}
          whileInView={{ left: '16rem', top: '19rem' }}
          transition={transition}
          style={{ top: '19rem', left: '25rem' }}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'Wireframing / Prototyping, Interaction Design, Inclusive Design, Basic UI Development'
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
