import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <p>{props.text + ' ' + props.value}</p>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, all} = props;
  const average = (good + (neutral * 0) + -bad) / all;
  let positive = (props.good * 100) / props.all
  return(
    <div>
      <StatisticLine text="good" value = {good} />
      <StatisticLine text="neutral" value = {neutral} />
      <StatisticLine text="bad" value = {bad} />
      <StatisticLine text="all" value = {all} />
      <StatisticLine text="average" value = {average} />
      <StatisticLine text="positive" value = {positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

function palaute(nimi) {
  if (nimi === 'good') {
    setGood(good +1) 
  }
  if (nimi === 'neutral') {
    setNeutral(neutral +1)
  }
  if (nimi === 'bad') {
    setBad(bad +1)
  }
}
  if (good === 0 && neutral === 0 && bad === 0) {
    return(
      <div>
         <h2>Anna palautetta</h2>
        <button onClick={() => palaute('good')}>Hyvä</button>
        <button onClick={() => palaute('neutral')}>Neutraali</button>
        <button onClick={() => palaute('bad')}>Huono</button>
        <h2>Tilastot</h2>
        <p>
          Ei palautetta annettu
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Anna palautetta</h2>
        <button onClick={() => palaute('good')}>Hyvä</button>
        <button onClick={() => palaute('neutral')}>Neutraali</button>
        <button onClick={() => palaute('bad')}>Huono</button>
        <h2>Tilastot</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </div>
    )
  }
}

export default App