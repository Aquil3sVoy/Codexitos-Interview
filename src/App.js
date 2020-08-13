import React from 'react';
import logo from './logo.svg';
import './App.css';
/* 
  1. using this url, fetch some movies from this url: "https://reactnative.dev/movies.json"
  2. Store the list of movies in a state variable
  3. Display the list of movies in the browser.
  4. Add two inputs and a button. (Favorite movie, Release Year, Add Button)
  5. Add a function that is triggered by the onClick method of the Add Button. 
  This method must add your favorite movie and release year to the list of movies.
  6. Sort the movies by ascending order.
  7. Have the document.title be updated every time the favoriteMovie value changes.

  8. Save your favorite movie using redux.
  9. Get Favorite movie from redux's store.
  10. Display the favorite movie gotten from the store.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>React</code>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
