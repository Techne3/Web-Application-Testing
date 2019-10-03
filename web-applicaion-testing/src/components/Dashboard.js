import React from 'react';

export const addBalls =(score) => {
    return score +1 ; 
}
export const addStrikes =(score)=> {
    return score + 1;
}

function Dashboard (props) {


    return (
        <div>
            <button onClick={props.addStrike} className="btn">Strike</button>
            <button onClick={(addBalls)=>props.addBall}className="btn">Ball</button>
            <button onClick={props.addFoul}className="btn">Foul</button>
            <button onClick={props.addHit}className="btn">HIT</button>

        </div>
    )
}
export default Dashboard