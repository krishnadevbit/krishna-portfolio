import React from 'react';
import './Skills.css';
import Html5 from '../../img/html5.png';
import Css3 from '../../img/css3.png';
import Javascript from '../../img/javascript.png';
import React1 from '../../img/react.png';
import NestJs from '../../img/nestjs.png';
import GraphQL from '../../img/graphql.png';
import MongoDB from '../../img/mongodb.png';
import TypeScript from '../../img/typescript.png';
import Express from '../../img/express.png';
import Nodejs from '../../img/nodejs.png';
import JWT from '../../img/Jwt.png';
import Redux from '../../img/redux.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const work = [
    {
      img: Html5,
      def: 'HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web. HyperText allows a user to click a link and be redirected to a new page referenced by that link.',
    },
    {
      img: Css3,
      def: 'It Stands for Cascading Style Sheet. CSS makes the front-end of a website shine and it creates a great user experience. Without CSS, websites would be less pleasing to the eye and likely much harder to navigate.',
    },
    {
      img: Javascript,
      def: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.",
    },
    {
      img: TypeScript,
      def: 'TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. It enhances code maintainability and catch errors early in the development process by allowing developers to specify the types of variables, function parameters, and return types.',
    },
    {
      img: React1,
      def: 'React. js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites.',
    },
    {
      img: NestJs,
      def: 'NestJs - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    },
    {
      img: GraphQL,
      def: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    },
    {
      img: MongoDB,
      def: 'MongoDB is an open-source document database built on a horizontal scale-out architecture that allows many small machines to work together to create systems that are fast and handle huge amounts of data.',
    },
    {
      img: Nodejs,
      def: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It enables server-side scripting and facilitates the development of scalable and high-performance network applications.',
    },
    {
      img: Express,
      def: 'Express, often referred to as Express.js or simply Express, is a minimal and flexible web application framework for Node.js. It provides a set of features and tools to build web and mobile applications quickly and efficiently. ',
    },
    {
      img: JWT,
      def: 'JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims between two parties, typically used for authentication and authorization purposes in web development. JWTs are structured as JSON objects that are cryptographically signed to ensure integrity and can be optionally encrypted for confidentiality.',
    },
    {
      img: Redux,
      def: 'Redux is a predictable state container for JavaScript applications. It is commonly used in conjunction with React for managing the state of an application in a predictable and centralized way. Redux follows a unidirectional data flow pattern, which helps in managing the state of complex applications more efficiently.',
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Having Relevant </span>
        <span>Technical Skills </span>
        <span>in the following.....</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>

      {/* slider  */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {work.map((work, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={work.img} alt="" />
                <span style={{ color: darkMode ? 'white' : '' }}>
                  {work.def}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
