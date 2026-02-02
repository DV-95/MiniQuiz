import './App.css';
import Question from './Components/Quiz Question'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import FinalResult from './Components/Final Result'

function App() {

  const [score,updateScore] = useState(0);
  return (

    <BrowserRouter>
    
    <Routes>
      
        <Route path = "/" element = {
          <Question questionno="1" questionbody="When did I ask you out?" opta="21 June" optb="27 June" optc="28 June" optd="29 June" rightans="28 June" score={score} setScore ={(a)=> updateScore(a)}/>}/>
            
        
        <Route path = "/1" element={
          <Question questionno="2" questionbody="What did we order on our first date?" opta="Masala Maggi" optb="Potato Tots" optc="Cheese Maggi" optd="Peri Peri Fries" rightans="Cheese Maggi" score={score} setScore = {(a)=>updateScore(a)}/>}>
            
            
        </Route>

        
        <Route path = "/2" element = {
          <Question questionno="1" questionbody="What ?" opta="Bracelets" optb="human" optc="divesh" optd="lecture" rightans="dog" score={score} setScore ={(a)=> updateScore(a)}/>}/>
            
        
        <Route path = "/3" element={
          <Question questionno="2" questionbody="what is an dog" opta="dog" optb="human" optc="divesh" optd="lecture" rightans="divesh" score={score} setScore = {(a)=>updateScore(a)}/>}>
            
            
        </Route>

        
        <Route path="/4" element={
            <FinalResult score={score}/>
        }></Route>
      




    </Routes>

    
    </BrowserRouter>



  );
}

export default App;
