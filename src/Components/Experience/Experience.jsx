import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
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
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">3.6+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">6+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">2</div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
