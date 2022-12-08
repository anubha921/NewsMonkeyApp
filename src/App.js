import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = ()=> {

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
        <Routes>
          <Route eaxct path="/" element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/business" element={<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="Business"/>}></Route>
          <Route eaxct path="/entertainment" element={<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}></Route>
          <Route eaxct path="/general" element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/health" element={<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="Health"/>}></Route>
          <Route eaxct path="/science" element={<News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="Science"/>}></Route>
          <Route eaxct path="/sports" element={<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="Sports"/>}></Route>
          <Route eaxct path="/technology" element={<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology"/>}></Route>
        </Routes>
        </Router>      
      </div>     
    )
  }
export default App;
