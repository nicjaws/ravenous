import React from 'react';
import BusinessList from '.components/BusinessList/BusinessList.js';
import SearchBar from '.components/SearchBar/SearchBar.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
    <SearchBar/>
    <BusinessList/>
</div>
    );
  }
}

export default App;
