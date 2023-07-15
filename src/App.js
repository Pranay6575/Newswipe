// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom"


export default class App extends Component {
  pageSize = 15;

  render() {
    return (
      <>
        <div> 
            <BrowserRouter>
            <Navbar />              
            
       <Routes>       
           <Route path="/" element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />} />      
           <Route path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business" />} />      
           <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />      
           <Route path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />} />      
           <Route path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science" />} />      
           <Route path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />      
           <Route path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />      
      
       </Routes>
     </BrowserRouter>            
        </div>
      </>
    );
  }
}
