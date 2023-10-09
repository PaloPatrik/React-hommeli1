const { useState } = require("react")

const App = () => {
 const [tehtava, setTehtava] = useState([]);
 const [arvo, setArvo] = useState('');
 const lisays = () => {
  let copy = tehtava;
copy.push(arvo)
setTehtava(copy)
setArvo('')
 }
 const poista = (testi) => {
  for (let q = 0; q < tehtava.length; q++) {
    const element = tehtava[q];
    console.log(element,testi)
    if (element === testi) {
      let copy = [...tehtava];
      copy.splice(q,1)
      setTehtava(copy)
      break
    }
  }
 }
 

 
  return (
  <div>
    <input type="text" onChange={ (e) => setArvo(e.target.value)}/>
    <button onClick={lisays}>Lisää</button>
    <p>Tehtävät:</p>
    {tehtava.map(testi => <p>{testi}<button onClick={() => poista(testi)}>Poista</button></p>)}
  </div>
)
  }

export default App;