import React, { useState } from 'react'
import Board from './Board'
function Game() {
    const [xisnext,setXisnext]=useState(true)
    const [history,sethistory]=useState([Array(9).fill(null)])
    const[nextmove,setnextmove]=useState(0)
    const currentSquares=history[nextmove]
     console.log("i am currentSquares",currentSquares)
    // console.log('i am history',history)
    // console.log("i am currentSquares", currentSquares.length)
    function handleplay(nextsquares)
    {
          // console.log('i am handleplay')
          console.log('i am nextsquares',nextsquares)
          console.log('HISTORY',history)
          const nextHistory=[...history.slice(0,nextmove+1),nextsquares]
          console.log("nextHistory",nextHistory)
          // console.log("i am nextHistory",nextHistory)
          sethistory(nextHistory);
          console.log('i am history',history)
          setnextmove(nextHistory.length - 1);
        //  console.log('i am next move1',nextmove)
          setXisnext(!xisnext);
    }
    function jumpto(nextmove)
    {        
        setnextmove(nextmove)
        setXisnext(nextmove%2==0)   
    }
    const moves=history.map((squares,move)=>
    {
      let description;
      if(move>0)
      {
        description='Go To move #'+move;
      }
      else
      {
        description='Go to Game Start'
      }
      return(<li key={move}>
        <button onClick={()=>{jumpto(move)}}>{description}</button>
      </li>)
    })
  return (
    <div>
       <div className="game">
      <div className="game-board">
        <Board  xisnext={xisnext} squares={currentSquares} onplay={handleplay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </div>
  )
}

export default Game
