import React from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import './App.css';

function App() {


  return (
    <div className="App">
      <UserCard userInfo={user}/>
    </div>
  );
}

export default App;
