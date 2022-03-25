import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentId, setCurrentId] = useState([])

  const openDetails = id => {
    setCurrentId(id)
  }

  const closeDetails = () => {
    setCurrentId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data.results)
        
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(characters)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character) => {
          return <Character info={character} action={openDetails} />
        })
      }
      
    </div>
  );
}

export default App;
