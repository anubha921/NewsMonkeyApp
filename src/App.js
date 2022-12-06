import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route eaxct path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="Business"/>}></Route>
          <Route eaxct path="/entertainment" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}></Route>
          <Route eaxct path="/general" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/health" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="Health"/>}></Route>
          <Route eaxct path="/science" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="Science"/>}></Route>
          <Route eaxct path="/sports" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="Sports"/>}></Route>
          <Route eaxct path="/technology" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}></Route>
        </Routes>
        </Router>      
      </div>     
    )
  }
}
