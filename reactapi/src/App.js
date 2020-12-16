import React, { useState, useEffect, searchjoke } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    chuckjoke:''
  })

  useEffect(() => {
    fetchData();     
  },[])
  
  // fetching data from API
  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    setState({
      ...state, chuckjoke:result.data.value
    })
  }

  // search chuckjoke
  // const seearch

  return (
    // project title
    <div>
      <div className="App jumbotron text-center">
      <h1 className="title">Welcome to Chuck Norris Jokes App!!</h1>
      </div>

      {/* // project content here */}
      <div className="container">
        <div className="row">  

          <div className="col-md-4 findjokes p-2">
            <h3 className="dd">Search for any Category of joke here</h3>
            <input type="text"/> 
            
            <div>
              <button className="btn btn-outline-warning btn-lg">SEARCH JOKE</button>           
            </div>            
          </div>           

          <div className="col-md-8 displayjokes">
            <h3 className="dd">View Jokes</h3>
            <p>{state.chuckjoke}</p>          
          </div> 
        </div>
      </div>
      
      {/* footer */}
      <div className="container text-center pt-5">
        <div className="row">
          <p className="text-center">For now you can Refresh the site to see the Jokes..... Search button is under design.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
