
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Statistic = ({text, counter}) => (
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text = "good" counter = {good}/>
            <Statistic text = "neutral" counter = {neutral}/>
            <Statistic text = "bad" counter = {bad}/>
            <Statistic text = "sum" counter = {good + neutral + bad}/>
            <Statistic text = "average" counter = {(good + (bad * -1)) / total}/>
            <Statistic text = "positive" counter = {`${(good / total) * 100}%`}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick = {incrementGood} text = "good"/>
        <Button handleClick = {incrementNeutral} text = "neutral"/>
        <Button handleClick = {incrementBad} text = "bad"/>
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

