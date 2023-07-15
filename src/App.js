// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom"


const App = () => {
  const pageSize = 15;
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            
            <Route path="/" element={<News setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General" />} />
            <Route path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />} />
            <Route path="/Science" element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />} />
            <Route path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App