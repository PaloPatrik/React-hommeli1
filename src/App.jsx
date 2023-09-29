import { useEffect, useState } from 'react'
import axios from 'axios';

const checkValidity = (obj, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].name === obj.name, arr[j].number === obj.number){
      return true;
    }
  }
  return false;
}

const Filtered = (props) => {
    return(
      <div>
        filter shown with <input type='text' onChange={props.func}/>
      </div>
    )
}

const PersonForm = (props) => {
  return(
    <div>
      <div>
          name: <input onChange={(e) => props.setNewName(e.target.value)}/><br/>
          number: <input onChange={(e) => props.setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </div>
  )
}
const Persons = (props) => {
  return(
    <div>
      {
        props.filter == "" ?
          props.persons.map((person) =>
          <p>{person.name  + " "}
          {person.number}</p>)
          :
          props.filteredPersons.map((person) =>
          <p>{person.name  + " "}
          {person.number}</p>)
         
      }
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPerson] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.error("Error fetching data:", error)
    })
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value)
    const result = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredPerson(result)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const obj = {name: newName, number: newNumber};
    if (checkValidity(obj, persons)) {
      alert(`${newName} is already added to phonebook`)
      alert(`${newNumber} is already added to phonebook`)
    }else{
      setPersons([...persons, obj])
    }
    axios.post('http://localhost:3001/persons', obj)
    .then (response => {
      console.log('Data apended:', response.data);
    })
    .catch(error => {
      console.error('Error appending data:', error);
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filtered
        func={handleFilter}
      />
      <h2>add new</h2>

      <form onSubmit={handleSubmit}>
        <PersonForm 
          setNewNumber={setNewNumber}
          setNewName={setNewName}
        />
      </form>


      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons}
        filter={filter}
        persons={persons}
      />
    </div>
  )
}


export default App