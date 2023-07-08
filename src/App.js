// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  name = "Kiyaan"
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}
