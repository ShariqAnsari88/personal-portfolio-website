import React from "react";

import Arrow from "../arrow";

import "./style.scss";

const CallToAction = ({ text, action, icon }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
            <span className="text">{text}</span>
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CallToAction;
