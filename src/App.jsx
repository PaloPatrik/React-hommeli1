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
          props.course.parts.map(part => <Part key={part.name} nimi={part.name} maara={part.exercises}/>) 
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
  
  const Course = (props) => {
    return(
      <div>
        {
          props.course.map(osa =>
          <div key={osa.name}>
            <Header course={osa.name}/> 
            <Content course={osa}/>
            <Total course={osa}/>
          </div>
          )
        }
      </div>
    )
  }
  


  const App = () => {
    const courses = [
      {
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

export default App