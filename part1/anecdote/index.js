import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const mostVotes = votes.indexOf(Math.max.apply(null, votes))

  const randomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}" has {votes[selected]} {(votes[selected] === 1) ? 'vote' : 'votes'}
      <Button handleClick={randomNumber} text="next anecdote"/>
      <Button handleClick = {voteForAnecdote} text = 'vote'/>
      <br/>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVotes]} has {votes[mostVotes]} {(votes[mostVotes] === 1) ? 'vote' : 'votes'}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

