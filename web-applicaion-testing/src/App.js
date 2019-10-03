import React,{useState} from 'react';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export const addStrikes=(score)=> {
  if (score ===2){
    return score -2
  }else{
    return score +1
  }
}

export const addBalls = (ball) => {
  if (ball >= 3 ){
    return 0
  }else {
    return ball +1
  }
}

export const addFouls = (strike) => {
  if (strike === 0 || strike ===1){
    return strike +1
  }else if(strike >2 ){
    return 0
  }
}



function App() {
  
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const addStrike = () => {
    if(strikes === 2){
      setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const addBall = () => {
    if(balls >= 3){
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const addFoul = () => {
    if(strikes < 2){
      setStrikes(strikes + 1)
    } 
  }

  const addHit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <h1>Baseball Testing </h1>
        <Display strikes={strikes} 
          balls={balls}
        /> 
        <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} addHit={addHit}
        />
    </div>
  );
}

export default App;
