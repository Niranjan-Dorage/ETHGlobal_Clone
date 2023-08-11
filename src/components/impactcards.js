import React from "react";
import '../App.css';

import Impactcard from "./impactcard";
function Impactcards() {
    return (
        <div>
         <center>
         <div className="impactcards">
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />
                <Impactcard img="https://cdn-icons-png.flaticon.com/128/10653/10653457.png" no="100 Plus" />

            </div>
         </center>
        </div>
    );

}
export default Impactcards;