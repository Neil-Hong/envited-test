import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./CreatePage.css";

const CreatePage = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        hostName: "",
        eventName: "",
        street: "",
        suburb: "",
        state: "",
        postcode: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setInput({ ...input, [e.target.name]: value });
    };
    const handleSubmit = () => {
        const date1 = new Date(Date.parse(input.startDate));
        const date2 = new Date(Date.parse(input.endDate));
        if (date1 > date2) {
            alert("End Date Cannot Earlier than the Start Date!");
            console.log(date1, date2);
        } else {
            navigate("/event", { state: input });
        }
    };
    return (
        <div className="createPage">
            <div className="createPage_container">
                <label>Host Name</label>
                <input
                    type="text"
                    placeholder="Enter you host name"
                    name="hostName"
                    value={input.hostName}
                    onChange={handleChange}
                ></input>
                <label>Event Name</label>
                <input
                    type="text"
                    placeholder="Enter you Event name"
                    name="eventName"
                    value={input.eventName}
                    onChange={handleChange}
                ></input>
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Enter you Street"
                    name="street"
                    value={input.street}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Enter you Suburb"
                    name="suburb"
                    value={input.suburb}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Enter you State"
                    name="state"
                    value={input.state}
                    onChange={handleChange}
                ></input>
                <input
                    type="number"
                    placeholder="Enter you Postcode"
                    name="postcode"
                    value={input.postcode}
                    onChange={handleChange}
                ></input>
                <label>Start Date</label>
                <div>
                    <input type="date" value={input.startDate} name="startDate" onChange={handleChange} />
                    <input type="time" value={input.startTime} name="startTime" onChange={handleChange} />
                </div>

                <label>End Date</label>
                <div>
                    <input type="date" value={input.endDate} name="endDate" onChange={handleChange} />
                    <input type="time" value={input.endTime} name="endTime" onChange={handleChange} />
                </div>

                <label>Event Photo</label>
                <input type="file" />
                <button className="createButton" type="submit" onClick={handleSubmit}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreatePage;
