import React from 'react'
import ReactDOM from 'react-dom'
import Courses from "./course"

const App = ({courses}) => {
  return (
    <div>
    {courses.map( (i) => <Course key= {i.id} course={i}/>)}
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  return(
    <div>
      Number of exercises {course.parts.reduce(((total, currentValue) => total + currentValue.exercises),0)}
    </div>
  ) 
}

const Part = ({name,exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((i) => <Part key={i.id} name={i.name} exercises={i.exercises} />)}
    </div>
  )
}
const Course = ({ course }) => {
  return(
    <div>
      <Header course ={course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}



ReactDOM.render(<App courses={Courses} />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

