import { useState } from 'react'    

const Button = (props) => {
  return(
  <button onClick={props.seuraava}>Next</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let seuraava = () => {
    let satunnainen = Math.floor((Math.random() * anecdotes.length) + 1)
    setSelected(satunnainen)
    enitenAania();
  }
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const [aanet, setAanet] = useState(0)
  const [position, setPosition] = useState(0);

  const handleVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    enitenAania();
  }

  const enitenAania = () => {
    let eniten = points[0]
    let position = 0;

    for (let j = 0; j < points.length; j++) {
      if (points[j] === 0){
        if (points[j] > eniten){
          eniten = points[j];
          position = j;
        }
      }else{
        if (points[j] > eniten -1){
            eniten = points[j]
            position = j;
        }
      } 
    }
    setAanet(eniten);
    setPosition(position);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes!
      <button onClick={handleVote}>vote</button>
      <Button seuraava={seuraava} />
      <h2>Anecdote with most votes</h2>
      <i>{anecdotes[position]}</i>
      <b>{points[selected] === aanet + 1? points[selected] : aanet}</b> <p>votes! </p>
    </div>
  )
}

export default App