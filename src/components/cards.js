import React from "react";
function Cards(props) {
    return (
        <div className="card">
            <div className="virtual">
                VIRTUAL
            </div>
            <div className="hackrow">
                <div className="superhack">
                    {props.cardname}
                </div>
                <div className="photo">
                </div>
            </div>
            <div
                className="daterow"> {props.date}</div>
            <div className="learnmore">
                <div className="learnmoretext">Learn More</div>
            </div>
        </div>

    );

}
export default Cards;