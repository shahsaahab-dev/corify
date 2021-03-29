import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header/>
      <Content/>
      <Footer/>
   </Router>
  )
}
