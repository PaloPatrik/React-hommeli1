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
    
  
export default Course  