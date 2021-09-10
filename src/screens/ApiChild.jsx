import React from 'react'
// import axios from "axios";


const ApiChild = ({ name, image }) => {

    // console.log(name);

    return (
        <div>
            {name}
            <img src={image} alt="coinimage" height="30px" />

        </div>

    )

}
export default ApiChild;
