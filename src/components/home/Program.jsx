import { Fragment } from "react";

export default function Program ({caption, text, img}) {
    // console.log(caption); `/src/assets/captions/2.png`
    return (
        <div className="program">
            <img className="program-img" src={`/src/assets/img/programs/${img} `}alt="" />
            <div className="row caption">
                <img src={`/src/assets/${caption}`} alt="" srcset="" />
                <p className="caption-p">{text}</p>
            </div>
        </div>
    )
} 