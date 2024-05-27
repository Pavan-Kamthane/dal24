import React from "react";
import '../styles/Schedule.css';
import ScheduleImg from '../img/venue/IMP Dates.png'

const ImpDates = () => {
    return (
        <div className="Schedule">
            <h2>
                Important Dates      </h2>

            <img src={ScheduleImg} alt="Schedule" />
        </div>
    );
};

export default ImpDates;
