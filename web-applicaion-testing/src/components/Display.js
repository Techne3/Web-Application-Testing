import React, {useState} from 'react';


function Display(props) {
    

    return (
        <div>
            <div>Strikes: {props.strikes}</div>
            <div>Ball: {props.balls}</div>
        </div>
    )

}

export default Display;