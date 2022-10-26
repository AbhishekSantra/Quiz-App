import axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';  
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  
  return (
    <Router>
    <div className="app"style={{backgroundImage:"url(./images.jpg)"}}>
      <Header/>
    <Routes>
      <Route path='/'element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
      <Route path='/quiz'element={<Quiz name={name}questions={questions}setQuestions={setQuestions}score={score}setScore={setScore}/>}/>
      <Route path='/result'element={<Result name={name}score={score}/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
