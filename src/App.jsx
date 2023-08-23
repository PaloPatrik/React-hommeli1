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

const Button = (props) => {
  console.log(props)
  return (
    <button onClick={props.func}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const hyvaPalaute = () => {
    setGood(good + 1)
  }

  const neutraaliPalaute = () => {
    setNeutral(neutral + 1)
  }

  const huonoPalaute = () => {
    setBad(bad + 1)
  }
  
  if (good === 0 && neutral === 0 && bad === 0) {
    return(
      <div>
          <h2>Anna palautetta</h2>
          <Button text='good' func={hyvaPalaute} />
          <Button text='neutral' func={neutraaliPalaute} />
          <Button text='bad' func={huonoPalaute} />
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
          <Button text='good' func={hyvaPalaute} />
          <Button text='neutral' func={neutraaliPalaute} />
          <Button text='bad' func={huonoPalaute} />
        <h2>Tilastot</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </div>
    )
  }
}

export default App