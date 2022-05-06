import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import Body from './components/Body';



export default function App() {
  return(
    <div className="App">
      <Header/>
      <Meme/>

    </div>
  )
}

/*export default function App() {
  const[starWarsData, setStarWarsData]= React.useState({})
  const [count, setCount]= React.useState(0)
  console.log("count")
  React.useEffect(() => {
    console.log("Effect function ran")
    fetch(`https://swapi.dev/api/people/${count}`)
    .then((res) => res.json())
    .then(data => setStarWarsData(data))

  },[count])
  
  return(
    <div>
       <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData,null, 2)}</pre>
    </div>
  )
}*/

/*export default function App(){
  const [user, setUser] = React.useState("Chidera")
  return(
    <div className="">
     <Header user={user}/>
    <Body user={user}/>
     
    </div>
  )
}*/



/*export default function App(){
  const [isGoingOut, setIsGoingOut] = React.useState(true)
  
  function changeMind(){
    setIsGoingOut(prevState => !prevState)
  }
  

  return(
  <div className="App">
  <h1>Do i feel like going out tonight</h1>
  <div  onClick={changeMind}>
    <h1>{isGoingOut ? "Yes" : "No"}</h1>
  </div>
  </div>
  )
}*/



