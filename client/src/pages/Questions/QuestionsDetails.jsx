import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from "./DisplayAnswer";
import { useSelector, useDispatch } from "react-redux";
import {
  postAnswer
} from "../../actions/question";
import "./Questions.css";
const QuestionsDetails = () => {
   const { id } = useParams()
   const questionsList = useSelector((state) => state.questionsReducer);
  //console.log(questionsList)
  // var questionsList = [{
  //   _id: '1',
  //   upVotes: 3,
  //    downVotes: 2,
  //    noofAnswers: 2,
  //    questionTitle: "what is a function?",
  //    questionBody: "It is meant to be",
  //    questionTags: ["java","mongodb","express.js","node.js","reactjs",],
  //    userPosted:"Saurabh",
  //    userId: 1,
  //    askedOn:"jan1",
  //    answer: [
  //      {
  //       answerBody: "Answer",
  //       userAnswered: "Saurabh",
  //       answeredon:"jan1",
  //       userId: 2,
  //      }
  //  ]
  //  },
  //  {
  //    _id: '2',
  //    upVotes: 3,
  //    downVotes: 2,
  //    noofAnswers: 0,
  //    questionTitle: "what is a function?",
  //    questionBody: "It is meant to be",
  //    questionTags:["javascript","R","python",],
  //    userPosted:"Saurabh",
  //   userId: 1,
  //    askedOn:"jan1",
  //    answer: [
  //   {
  //       answerBody: "Answer",
  //       userAnswered: "Saurabh",
  //       answeredon:"jan1",
  //      userId: 2,
  //     }
  //   ]
  //  },
  //  {
  //    _id: '3',
  //    upVotes: 3,
  //    downVotes: 2,
  //    noofAnswers: 0,
  //    questionTitle: "what is a function?",
  //    questionBody: "It is meant to be",
  //   questionTags: ["javascript","R","python",],
  //   userPosted:"Saurabh",
  //    userId: 1,
  //    askedOn:"jan1",
  //    answer: [
  //      {
  //       answerBody: "Answer",
  //       userAnswered: "Saurabh",
  //       answeredon:"jan1",
  //       userId: 2,
  //      }
  //    ]
  //  }]
  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name,
          })
        );
       
      }
    }
  };
  return(
  <div className="question-details-page">
   {
    questionsList.data === null ?
    <h1>Loading...</h1> :
    <>
      {questionsList.data.filter((question) => question._id === id).map((question) => (
     <div key={question._id}>
      
       <section className="question-details-container">
       <h1>{question.questionTitle}</h1>
       <div className="question-details-container-2">
       <div className="question-votes">
        <img src={upvote} alt="" width='18'/>
        <p>{question.upVotes - question.downVotes}</p>
        
        <img src={downvote} alt="" width='18'/>
        </div>
        <div style={{ width: "100%" }}>
        <p className="question-body">{question.questionBody}</p>
        <div className="question-details-tags">
        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
          </div>    
          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
            <p>asked {question.askedOn}</p>
            <Link  to={`/Users/${question.userId}`} className="user-link" style={{ color: "#0086d8" }}>
              <Avatar
              backgroundColor="orange"
              px="8px"
              py="5px"
              borderRadius="4px"
              >
              {question.userPosted.charAt(0).toUpperCase()}
              </Avatar>
              <div>{question.userPosted}</div>
            </Link>
            </div>
          </div>
       </div>
       </div>
       </section>
       {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                     
                    />
                  </section>
                )
                }
                <section className="post-ans-container">
                <h3>Your Answer</h3>
                <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={Answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                <p>
                Browse other Question tagged
                {
                  question.questionTags.map((tag) =>(
                    <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                  ))
                }
                {" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                </p>
                </section>
     </div>
      ))}
    </>
   }
  </div>
  )
}

export default QuestionsDetails
