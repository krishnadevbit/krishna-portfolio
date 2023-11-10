import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/smartsoul.png';
import Ecommerce from '../../img/animaltracker.png';
import HOC from '../../img/youtunein.png';
import MusicApp from '../../img/booking.png';
import KrishJob from '../../img/krishjob.png';
import 'swiper/css';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" height={240} width={450} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" height={240} width={450} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" height={240} width={450} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" height={240} width={450} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KrishJob} alt="" height={240} width={450} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
