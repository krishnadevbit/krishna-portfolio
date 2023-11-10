import React from 'react';
import './Card.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
// ##### we can also write as instead of props
// const Card=({emoji, heading, detail})=>{
//     return (
//     <div className="card">
//       <img src={emoji} alt="" />
//       <span>{heading}</span>
//       <span>{detail}</span>
//     </div>
//   );

// };
const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={props.emoji} alt="" />
      <span style={{ color: darkMode ? 'white' : '' }}>{props.heading}</span>
      <span style={{ color: darkMode ? 'white' : '' }}>{props.detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
