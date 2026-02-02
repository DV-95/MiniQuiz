import './App.css';
import Question from './Components/Quiz Question'
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Question questionno="1" questionbody="In our pre-dating phase, you told me you were jealous of me cause I had a beautiful voice when I sent you a song. What was that song?" opta="Heer Ranjha" optb="Pehli Nazar mei" optc="O Bedardeya" optd="Can't help falling in love" rightans="Heer Ranjha" score={score} setScore ={(a)=> updateScore(a)}/>}/>
            
        
        <Route path = "/3" element={
          <Question questionno="2" questionbody="Our first 4 am conversation was about" opta="Debate on feminism" optb="Debate on Sacred Heart School" optc="Discussion of 'YOU'" optd="Discussion on the story I had written" rightans="Discussion of 'YOU'" score={score} setScore = {(a)=>updateScore(a)}/>}>
            
            
        </Route>

        
        <Route path="/4" element={
            <FinalResult score={score}/>
        }></Route>
      




    </Routes>

    
    </BrowserRouter>



  );
}

export default App;
