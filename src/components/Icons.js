import React from 'react';
import {FaTimes,FaRegCircle,FaPen} from "react-icons/fa";  //to import x,o ,pen icons from react icons (external module)


const Icon=({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="icons cross"/>;
        case "circle":
                return <FaRegCircle className="icons circle"/>
        default:
            return <FaPen className="icons" />

    }
}

export default Icon;