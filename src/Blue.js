import React from "react";

const Blue = ({ match }) => {
    const { color } = match.params;
    return(
        <div className="container page blue">
            <h1 className="text-white text-center centered">Hello from {color}</h1>
        </div> 
    )
}

export default Blue;