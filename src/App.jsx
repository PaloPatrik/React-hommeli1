import { useState } from 'react'

const checkValidity = (obj, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].name === obj.name, arr[j].number === obj.number){
      return true;
    }
  }
  return false;
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040 2867465'  },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
  const [filter, setFilter] = useState('')

  const filteredPersons = persons.filter((person) => 
  person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const obj = {name: newName, number: newNumber};

    if (checkValidity(obj, persons)) {
      alert(`${newName} is already added to phonebook`)
      alert(`${newNumber} is already added to phonebook`)
    }else{
      setPersons([...persons, obj])
    }
  }

  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with <input type='text' onChange={(e) => setFilter(e.target.value)}/>
      </div>
      <h2>add new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)}/><br/>
          number: <input onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((persons) => 
      <p>{persons.name  + " "}
      {persons.number}</p>)}
    </div>
  )
}

export default App