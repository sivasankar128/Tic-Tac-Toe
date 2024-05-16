import React, { useState } from 'react'
import './App.css';
function Game({val , onSquareClick}){
  return (
  <button className='square' onClick={onSquareClick} style={{"height":"100px","width":"100px"}} >{val}</button>
);
}


export default function Board() {
  const[game,setGame]=useState(Array(9).fill(null))
  const[isNext,setisNext]=useState(true);
  const winner = calculateWinner(game);
  let status;
  if (winner) {
    status = "Winner: " + winner; 
  } else {
    status = "Next player : " + (isNext ? "X" : "O");
  }

  //click function
  function click(i){
    if(game[i] || calculateWinner(game)){
      return;
    }
    const list=game.slice();
    if(isNext){
      list[i]="X";
    }
    else{
      list[i]="O";
    }
    setGame(list);
    setisNext(!isNext);
  }
  // Winner Calculator
  function calculateWinner(game) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(game[a] && game[a]===game[b] && game[a]===game[c]){
        return game[a];
      }
    }
    return null;
  }
  //Reset Button
  function resetGame() {
    setGame(Array(9).fill(null));
    setisNext(true);
  }
  return (
    <>
    <h1>TIC - TAC - TOE</h1>
     <div className='status'>{status}</div>
    
     <div className='container'>
    <div className='row'>
    <Game val={game[0]} onSquareClick={() => click(0)}/>
    <Game val={game[1]} onSquareClick={() => click(1)}/>
    <Game val={game[2]} onSquareClick={() => click(2)}/>
    </div>
    <div className='row'>
    <Game val={game[3]} onSquareClick={() => click(3)}/>
    <Game val={game[4]} onSquareClick={() => click(4)}/>
    <Game val={game[5]} onSquareClick={() => click(5)}/>
    </div>
    <div className='row'>
    <Game val={game[6]} onSquareClick={() => click(6)}/>
    <Game val={game[7]} onSquareClick={() => click(7)}/>
    <Game val={game[8]} onSquareClick={() => click(8)}/>
    </div>
     <div className='ret'>
          <button className='retry' onClick={resetGame}>Retry</button>
      </div>
    </div>  </>
  );
}
