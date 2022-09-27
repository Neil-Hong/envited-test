import React, { useEffect, useState } from "react";
import birthdayImage from "../../assets/Birthday cake.png";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos, MdLocationPin } from "react-icons/md";
import { useLocation } from "react-router-dom";

import "./EventPage.css";

const EventPage = () => {
    const { state } = useLocation();
    const [data, setData] = useState({
        hostName: "Elysia",
        startDate: "18 August",
        startTime: "6:00PM",
        endDate: "19 August",
        endTime: "1:00 PM UTC +10",
        street: "Street name",
        suburb: "Suburb",
        state: "State",
        postcode: "Postcode",
    });
    useEffect(() => {
        if (state) {
            setData({
                hostName: state.hostName,
                startDate: state.startDate,
                startTime: state.startTime,
                endDate: state.endDate,
                endTime: state.endTime,
                street: state.street,
                state: state.state,
                suburb: state.suburb,
                postcode: state.postcode,
            });
        }
    }, []);
    return (
        <div>
            <div className="eventName">Birthday Bash</div>
            <div className="hostName">Hosted by {data.hostName}</div>
            <div className="dateContainer">
                <div className="dateInfoContainer">
                    <div className="iconContainer">
                        <IoCalendarOutline className="icon" />
                    </div>
                    <div>
                        <div className="dateText1">
                            {data.startDate} {data.startTime}
                        </div>
                        <div className="dateText2">
                            to {data.endDate} {data.endTime}
                        </div>
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
                        <div className="locationText1">{data.street}</div>
                        <div className="locationText2">
                            {data.suburb}, {data.state}, {data.postcode}
                        </div>
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
