const { useState } = require("react")

const App = () => {
  const [maara, setMaara] = useState(0);
  
  return (
  <div>
  <button onClick={() =>setMaara(maara -1)}>-</button>
  <p>{maara}</p>
  <button onClick={() =>setMaara(maara +1)}>+</button>
  </div>
)
  }

export default App;