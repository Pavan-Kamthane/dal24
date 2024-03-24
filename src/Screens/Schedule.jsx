import React from "react";
import '../styles/Schedule.css';
import ScheduleImg from '../img/Schedule.png'

const Schedule = () => {
  return (
    <div className="Schedule">
      <h2>
        Schedule
      </h2>

      <img src={ScheduleImg} alt="Schedule" />
    </div>
  );
};

export default Schedule;
