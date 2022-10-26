import "./Quiz.css";
import { CircularProgress } from "@mui/material";
import { useEffect,useState } from "react"
import Questions from "../../components/Questions/Questions";
const Quiz = ({name,score,setScore,questions,setQuestions}) => {
  const [options,setOptions]=useState();
  const [currQues,setCurrQues]=useState(0);

  useEffect(()=>{
    console.log(questions);

    setOptions(
      questions && handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ])
    );
  },[questions,currQues]);
  const handleShuffle=(options)=>{
    return options.sort(()=>Math.random()-0.5);
  };
  return <div className="quiz">
    <span className="subtitle">
    Welcome, {name}
    </span>
    {
    questions?(
      <>
      <div className="quizInfo">
         <span>{questions[currQues].category}</span>  
         <span>score:{score}</span>
      </div>
      <Questions
       questions={questions}
       setQuestions={setQuestions}
       currQues={currQues}
       setCurrQues={setCurrQues}
       options={options}
       correct={questions[currQues]?.correct_answer}
       score={score}
       setScore={setScore}
       />
      </>
    ):(
      <CircularProgress
        style={{margin:100}}
        color="inherit"
        size={150}
        thickness={1}/>
    )}
  </div>
};
export default Quiz