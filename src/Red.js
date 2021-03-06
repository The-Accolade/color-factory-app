import React from "react";

const Red = ({ match }) => {
    const { color } = match.params;
    return(
        <div className="container page red">
            <h1 className="text-white text-center centered">Hello from {color}</h1>
        </div> 
    )
}

export default Red;