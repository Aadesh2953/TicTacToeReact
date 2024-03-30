import {React,useState} from 'react'
import Square from './Square'
import './Board.css'
function Board({xisnext,squares,onplay}) {
    // let [Squares,setSquares]=useState(Array(9).fill(null))
      const handleclick=(i)=>
      {
        if(winner(squares)||squares[i])
        {
          return 
        }
          const nextsquares=squares.slice()
          if(xisnext)
          {
          nextsquares[i]="X"
          }
          else
          {
            nextsquares[i]="O"
          }
          onplay(nextsquares)
      }
         
      const winner=(squares)=>
      {
        
            let win=[
              [0, 1, 2],
             [3, 4, 5],
           [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
         [0, 4, 8],
          [ 2, 4, 6]
            ]
           for(let i=0;i<win.length;i++)
           {
             let [a,b,c]=win[i]
             if(squares[a] && squares[a]==squares[b] && squares[a]===squares[c])
             {
              return squares[a]
             }
           }
           return null;
          
      }
     
      let checkwinner=winner(squares)
      // console.log(checkwinner)
      let status
      if(checkwinner)
      {
        status=`winner:${checkwinner}`
      }
      else
      {
        status=`Next Turn : ${xisnext?'X':'O'}`
      }
  
      return (
       <div className='container'>
        <p>{status}</p>
        <div className='row1'>
          <Square value={squares[0]}  handleclick={()=>handleclick(0)}/>
          <Square value={squares[1]}  handleclick={()=>handleclick(1)}/>
          <Square value={squares[2]}  handleclick={()=>handleclick(2)}/>
        </div>
        <div className='row1'>
          <Square value={squares[3]}   handleclick={()=>handleclick(3)} />
          <Square value={squares[4]}   handleclick={()=>handleclick(4)}/>
          <Square value={squares[5]}   handleclick={()=>handleclick(5)}/>
        </div>
        <div className='row1'>
          <Square value={squares[6]}  handleclick={()=>handleclick(6)} />
          <Square value={squares[7]}  handleclick={()=>handleclick(7)}/>
          <Square value={squares[8]}  handleclick={()=>handleclick(8)}/>
        </div>
       </div>)
}

export default Board
