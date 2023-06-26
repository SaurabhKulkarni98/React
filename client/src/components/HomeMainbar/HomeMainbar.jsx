import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import './HomeMainbar.css'


import QuestionList from './QuestionList'
const HomeMainbar = () => {
  
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  
  
  const questionsLis = useSelector((state) => state.questionsReducer);
   console.log(questionsLis)
  var questionsList = [{
    _id: 1,
    upVotes: 3,
     downVotes: 2,
     noofAnswers: 2,
     questionTitle: "what is a function?",
     questionBody: "It is meant to be",
     questionTags: ["java","mongodb","express.js","node.js","reactjs",],
     userPosted:"Saurabh",
     userId: 1,
     askedOn:"jan1",
     answer: [
       {
        answerBody: "Answer",
        userAnswered: "Saurabh",
        answeredon:"jan1",
        userId: 2,
       }
   ]
   },
   {
     _id: 2,
     upVotes: 3,
     downVotes: 2,
     noofAnswers: 0,
     questionTitle: "what is a function?",
     questionBody: "It is meant to be",
     questionTags:["javascript","R","python",],
     userPosted:"Saurabh",
    userId: 1,
    askedOn:"jan1",
     answer: [
    {
        answerBody: "Answer",
        userAnswered: "Saurabh",
        answeredon:"jan1",
       userId: 2,
      }
    ]
   },
   {
     _id: 3,
     upVotes: 3,
     downVotes: 2,
     noofAnswers: 0,
     questionTitle: "what is a function?",
     questionBody: "It is meant to be",
    questionTags: ["javascript","R","python",],
     userPosted:"Saurabh",
     userId: 1,
     askedOn:"jan1",
     answer: [
       {
        answerBody: "Answer",
        userAnswered: "Saurabh",
        answeredon:"jan1",
        userId: 2,
       }
     ]
   }]
  
  const checkAuth = () => {
    if(user == null){
    alert("login or sign-up to ask a question")
    navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
}
  

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>

      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};


export default HomeMainbar
