import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/Landing page image.svg";
import "./LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img src={image} className="landingImage" alt="img" />
            <div className="textContainer">
                <div className="headtextContainer">
                    <div className="headingText2">
                        Imagine if <br />
                        <br /> had events.
                    </div>
                    <div className="headingText1">Snapchat</div>
                </div>
                <div className="smallText">Easily host and share events with your friends across any social media.</div>
            </div>

            <button className="landingpage_button" onClick={() => navigate("/create")}>
                <p className="buttonText">🎉 Create my event</p>
            </button>
        </div>
    );
};

export default LandingPage;
