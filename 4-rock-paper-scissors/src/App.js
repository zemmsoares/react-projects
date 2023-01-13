import React, { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {

  const [cardSelected, setCardSelected] = useState('');
  const [enemyCard, setEnemyCard] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);
  const moves = ["R", "P", "S"];

  const battle = (move) => {
    setCardSelected(move);
    setEnemyCard(moves[Math.floor(Math.random() * moves.length)]);
  }

  useEffect(() => {
    if (cardSelected == enemyCard & cardSelected != "") {
      setResult('TIE')
    }
    if (cardSelected == 'R' && enemyCard == 'S') {
      setResult('YOU WON')
      setScore(score + 1)
    } else if (cardSelected == 'R' && enemyCard == 'P') {
      setResult('ENEMY WINS')
      setEnemyScore(enemyScore + 1)
    } else if (cardSelected == 'P' && enemyCard == 'R') {
      setResult('YOU WON')
      setScore(score + 1)
    } else if (cardSelected == 'P' && enemyCard == 'S') {
      setResult('ENEMY WINS')
      setEnemyScore(enemyScore + 1)
    } else if (cardSelected == 'S' && enemyCard == 'R') {
      setResult('ENEMY WINS')
      setEnemyScore(enemyScore + 1)
    } else if (cardSelected == 'S' && enemyCard == 'P') {
      setResult('YOU WON')
      setScore(score + 1)
    }
  }, [cardSelected, enemyCard])

  return (
    <div className='h-screen bg-purple-300'>
      <div className='grid grid-cols-1 sm:grid-cols-2 px-0 sm:px-20 pt-10'>
        <div className='justify-center items-center sm:items-end pr-0 sm:pr-10 flex flex-col'>
          <div>
            <p className='uppercase text-5xl text-white font-bold -mb-3'>rock</p>
            <p className='uppercase text-5xl text-white font-bold -mb-3'>Paper</p>
            <p className='uppercase text-5xl text-white font-bold'>Scissors</p>
          </div>
        </div>
        <div className=' items-center sm:items-start pl-0 sm:pl-5 flex flex-col w-full'>
          <div className='flex h-full justify-center flex-col text-start'>
            <p className='font-bold text-white justify-center flex pt-2 sm:pt-0'>{score} - {enemyScore}</p>
            <p className='bg-red-500 rounded px-2 text-white text-xl w-fit justify-center items-center flex'>{result}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 px-0 sm:px-20'>
        <div className=' justify-center items-center pr-0 sm:items-end sm:pr-5 flex flex-col h-96'>
          <p className="py-2 text-white text-xl w-32 items-center justify-center flex">Your card</p>
          <Card letter={cardSelected} />
        </div>
        <div className=' justify-center items-center pl-0 sm:items-start sm:pl-5 flex flex-col'>
          <p className=" text-white py-2 text-xl w-32 items-center justify-center flex">Enemy card</p>
          <Card letter={enemyCard} />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols px-0 sm:px-20'>
        <div className=' justify-center items-center flex py-5'>
          <button onClick={() => { battle('R') }} className="btn btn-blue px-2 bg-red-500 mx-2 w-48 rounded text-white text-xl w-20">
            Rock
          </button>
          <button onClick={() => { battle('P') }} className="btn btn-blue px-2 bg-red-500 mx-2 w-48 900rounded text-white text-xl w-20">
            Paper
          </button>
          <button onClick={() => { battle('S') }} className="btn btn-blue px-2 bg-red-500 mx-2 w-48 rounded text-white text-xl w-20">
            Scissors
          </button>
        </div>

      </div>

    </div>
  )
}

export default App
