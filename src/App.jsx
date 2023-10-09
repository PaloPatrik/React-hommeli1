import { useEffect, useState } from 'react'
import { getJson, exterminateJson, sendJson } from './Alljson';
import './App.css';

const checkValidity = (obj, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].name === obj.name || arr[j].number === obj.number){
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
          <div><p>{person.name  + " "}
          {person.number}</p><button onClick={ () =>props.delete(person.id)}>Poista</button></div>)
          :
          props.filteredPersons.map((person) =>
          <div><p>{person.name  + " "}
          {person.number}</p><button onClick={ () =>props.delete(person.id)}>Poista</button></div>)
         
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
  
  const [submit, setSubmit] = useState(false);
  const [deletedName, setDeletedName] = useState("")
  const [deleted, setDeleted] = useState(false);
  const [changed, setChanged] = useState(false);
  const [changedName, setChangedName] = useState(false);
  
  const updataData = async () => {
    try {
      const data = await getJson();
      setPersons(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }


  useEffect(() => {
    updataData();
  }, [])


  const handleFilter = (e) => {
    setFilter(e.target.value)
    const result = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredPerson(result)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    let copy = [...persons];
    let objecti = {
      name: newName,
      number: newNumber,
      id: (persons.length+1)
    };
    if(checkValidity(objecti, copy)  ){
        objecti.number = String(objecti.number)
        copy.push(objecti)
        setPersons(copy)
    }

    console.log(objecti, checkValidity(objecti, copy))
    try {
      await sendJson(objecti);
      setSubmit(true);
       
        
       
        
      
      
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
      updataData()
    } catch (error) {
      console.error(error);
    }
  }

  const dataDelete = async (id) => {
    if(window.confirm("Haluatko varmasti poistaa numeron?")){
      try {
        await exterminateJson(id);
        
        setDeleted(true);
        for (let å = 0; å < persons.length; å++ ) {
          if (id === persons[å].id) {
            setDeletedName(persons[å].name)
            break
          }
        }
        
      setTimeout(() => {
        setDeleted(false);
      }, 2000);
      await updataData()
      } 
      catch (error) {
        console.error(error)

      }
    }    
  }



  return (
    <div>
       <div className='del'>
          {
            submit ?
            <p>Added {newName}</p>
            :
              deleted ?
                <p>Deleted {deletedName}</p>
              :
                changed ?
                  <p>Changed {changedName} </p>
                :
              <></>
          }
        </div>
 

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
        delete={dataDelete}
      />
    </div>
  )
}


export default App