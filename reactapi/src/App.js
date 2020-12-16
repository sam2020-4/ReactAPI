import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect( async () => {
    const result = axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result);

  },[])


  return (
    // project title
    <div>
      <div className="App jumbotron text-center">
      <h1 className="title">Welcome to Chuck Norris React Api Jokes</h1>
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
            <p>kkkkkkkkkkkkkkkkkkkkk</p>          
          </div>          

        </div>
      </div>
    </div>
  );
}

export default App;
