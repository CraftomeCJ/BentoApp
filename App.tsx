//default component`
import React, { useState, useEffect } from 'react';
//importing loader
import PacmanLoader from 'react-spinners/PacmanLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import './App.css'

const App = () => {

  //loading state
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {

    //wait for 5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  //custom css for loader
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return isloading ?

  //If page is still loading then splash screen
  <PacmanLoader color={ '#36D7B7' } isLoading ={ isloading }css={ override } size={150} /> :
  <h1 className='App'>
    This is Splash Screen Page
    {<ClockLoader color={ '#36D7B7' } isLoading={ isloading } css={ override } size={150} />}
    </h1>
  }

  export default App;
