import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route eaxct path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="Business"/>}></Route>
          <Route eaxct path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}></Route>
          <Route eaxct path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route eaxct path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="Health"/>}></Route>
          <Route eaxct path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="Science"/>}></Route>
          <Route eaxct path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="Sports"/>}></Route>
          <Route eaxct path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}></Route>
        </Routes>
        </Router>      
      </div>     
    )
  }
}
