import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayInfo from './components/DisplayInfo';
import DisplayTable from './components/DisplayTable';
import Counter from './components/Counter';
import AddToList from './components/AddToList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayInfo/>
        <DisplayTable/>
        <Counter/>
        <AddToList/>
      </header>
    </div>
  );
}

export default App;
