import React from "react";

//Destructure the title, totalNumber an icon from the props object
const SingleCard = (props) => {

    const {title, totalNumber, icon} = props.item
    return(
        <div className="single__card">
                        <div className="card__content">
                            <h4>{title}</h4>
                            <span>{totalNumber}</span>
                            </div>
                            <span className="card__icon">
                                <i className= {icon}></i>
                            </span>
                    </div>
    );
};

export default SingleCard;

