import React from "react";

import "./EventPage.css";
import birthdayImage from "../../assets/Birthday cake.png";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos, MdLocationPin } from "react-icons/md";

const EventPage = () => {
    return (
        <div>
            <div className="eventName">Birthday Bash</div>
            <div className="hostName">Hosted by Elysis</div>
            <div className="dateContainer">
                <div className="dateInfoContainer">
                    <div className="iconContainer">
                        <IoCalendarOutline className="icon" />
                    </div>
                    <div>
                        <div className="dateText1">18 August 6:00PM</div>
                        <div className="dateText2">to 19 August 1:00PM UTC +10</div>
                    </div>
                </div>
                <div className="strokeContainer">
                    <MdOutlineArrowForwardIos className="stroke" />
                </div>
            </div>
            <div className="locationContainer">
                <div className="locationInfoContainer">
                    <div className="iconContainer">
                        <MdLocationPin className="icon" />
                    </div>
                    <div>
                        <div className="locationText1">Street name</div>
                        <div className="locationText2">Suburb, State, Postcode</div>
                    </div>
                </div>
                <div>
                    <MdOutlineArrowForwardIos className="stroke" />
                </div>
            </div>
            <img src={birthdayImage} alt="birthdayImage" />
        </div>
    );
};

export default EventPage;
