import {BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from "./actions/question";

function App() {

  function App() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllQuestions());
     
    }, [dispatch]);
  
  }
  return (
    <div className="App">
      <Router>
     <Navbar />
     <AllRoutes />
     </Router>
    </div>
  );
}

export default App;
