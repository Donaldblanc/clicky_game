import React from "react";
import "./Navpills.css";

const Navpills = props => (

    <div>
        <ul className="nav nav-pills nav-justified" >
        <li><a href="/">Sneaker Game</a></li>

            <li className={props.banner.indexOf('incorrectly') !== -1 ? 
               "desc-incorrect" :
                props.banner.indexOf('correctly') !== -1 ? 
                "desc-correct" : 
                "desc-normal"}
            >
                {props.banner}
            </li>
            <li> Score: <span style={{ color: "blue" }}>{props.current_score} </span>
                | Top Score: {props.highest_score}
            </li>
        </ul>
    </div>

);

export default Navpills;


