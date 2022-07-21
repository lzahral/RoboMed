import React from 'react';
import { BsDot } from "react-icons/bs";
import FR from "../../images/FR.png";
import "./SlidTop.css"
import Image from 'react-bootstrap/Image';
import { Bg, P } from '../../App'

const Slide = ({ color }) => {

    const bg = `bg-${color ? "primary" : "secondary"} slidTop`;
    const tag = `${color ? "text-primary bg-text" : "bg"} `;
    return (
        <div className=' position-relative rounded border p-3 pt-5 ' >
            <div className={bg}></div>
            <h5>Mankind Medicare <Image src={FR} /></h5>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</P>
            <Bg className={tag}><BsDot className='fs-3' />{color ? "Hospital" : "clinic"}</Bg>
        </div>
    );
};

export default Slide;