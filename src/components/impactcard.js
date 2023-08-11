import React from "react";

function Impactcard(props) {
    return (
        <div>
            <div className="impactcard">
              <center>
              <img src={props.img} className="impactcardimg" alt="" />
              <div className="impactcardtext">{props.no}</div>
                <div className="impactcardsmalltext">Hackathons completed successfully</div>
              </center>
               
            </div>
        </div>
    );

}
export default Impactcard;