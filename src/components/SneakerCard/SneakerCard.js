import React from "react";
import "./SneakerCard.css";

const SneakerCard = props => (

    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectSneaker(props.name)}
                className={props.current_score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                {/* {console.log(props.key)} */}
                {/* {console.log(props.image)} */}
                <img alt={props.name} src={props.image} />
            </a>
        </div>

    </div>
);

export default SneakerCard;