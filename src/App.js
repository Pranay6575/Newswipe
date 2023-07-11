// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom"


export default class App extends Component {
  // name = "Kiyaan"
  render() {
    return (
      <>
        <div> 
            <BrowserRouter>
            <Navbar />              
            
       <Routes>       
           <Route path="/" element={<News key="General" pageSize={5} country="in" category="General" />} />      
           <Route path="/Business" element={<News key="Business" pageSize={5} country="in" category="Business" />} />      
           <Route path="/Entertainment" element={<News key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />      
           <Route path="/Health" element={<News key="Health" pageSize={5} country="in" category="Health" />} />      
           <Route path="/Science" element={<News key="Science" pageSize={5} country="in" category="Science" />} />      
           <Route path="/Sports" element={<News key="Sports" pageSize={5} country="in" category="Sports" />} />      
           <Route path="/Technology" element={<News key="Technology" pageSize={5} country="in" category="Technology" />} />      
      
       </Routes>
     </BrowserRouter>            
        </div>
      </>
    );
  }
}
