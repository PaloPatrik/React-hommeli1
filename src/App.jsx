const Total = (props) => {
  return(
  <p>
    Number of exercises: 
    {
      props.course.parts.reduce((total, part) => total + part.exercises, 0)
    }
  </p>
  )
}
const Course = (props) => {
  return(
    <div>
    <Header course={props.course.name}/>
    <Content course={props.course}/>
    <Total course={props.course}/>
    </div>
  )
}
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        {
          props.course.parts.map(part => <Part nimi={part.name} maara={part.exercises}/>) 
        }
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.nimi} {props.maara}</p>
      </div>
    )
  }

 


const App = () => {

  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App