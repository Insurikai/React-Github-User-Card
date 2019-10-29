import React from 'react';
import UserCard from './components/UserCard';
import * as axios from 'axios';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/Insurikai').then((results)=>{
      this.setState({
        user:results.data
      });
    }).catch(console.log);
  }
  
  render(){
    console.log('render');
    return (
      <div className="App">
        <h1> done</h1>
        <UserCard userInfo={this.state.user}/>
      </div>
    );
  }
}