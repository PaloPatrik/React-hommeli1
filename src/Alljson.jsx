//import { useEffect  } from 'react'
import axios from 'axios';

export const getJson = async () => {
    return await axios.get('http://localhost:3001/persons')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return null;
      });
  };

  
  export const sendJson = (obj) => {
      axios.post('http://localhost:3001/persons', obj)
      .then(response => {
            console.log('Data appended:', response.data);
        })
        .catch(error => {
            console.error('Error appending data:', error);
        });
    }
    
    export  const exterminateJson = async (id) =>{
        console.log(id)
        axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response =>
          console.log(response.data)
        ).catch(error => 
            console.error("Error deleting data:", error)
        );
    }