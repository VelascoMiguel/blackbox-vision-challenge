import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchQuestions } from "../../utils/apiService";
import "./Question.scss";

const Question = ({ number }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedQuestion = await fetchQuestions(number - 1);
      setQuestion(fetchedQuestion);
    };

    fetchData();
  }, [number]);

  const updateScore = (isCorrect, type) => {
    let points = 0;

    if (isCorrect) {
      points = type === "multiple" ? 10 : 5;
    }

    const currentScore = Number(localStorage.getItem("score")) || 0;
    const newScore = currentScore + points;

    localStorage.setItem("score", newScore);
    setScore(newScore);
  };

  const handleAnswerClick = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);

      const isCorrect = answer === question.correct_answer;

      updateScore(isCorrect, question.type);
    }
  };

  const getAnswerClass = (answer) => {
    if (!isAnswered) return "answer";
    if (answer === selectedAnswer) {
      return answer === question.correct_answer
        ? "answer correct"
        : "answer incorrect";
    }
    return "answer";
  };

  const formatQuestionText = (text) => {
    return text.replace(/&quot;/g, '"');
  };

  if (!question) return <div className="loading">Loading...</div>;

  return (
    <div className="question-container">
      <h2 className="question-title">
        {formatQuestionText(question.question)}
      </h2>
      <div className="question-info">
        <p>
          <span>Category:</span> {question.category}
        </p>
        <p>
          <span>Difficulty:</span> {question.difficulty}
        </p>
        <p>
          <span>Type:</span> {question.type}
        </p>
      </div>
      <div className="answer-container">
        {[...question.incorrect_answers, question.correct_answer]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <button
              key={index}
              className={getAnswerClass(answer)}
              onClick={() => handleAnswerClick(answer)}
              disabled={isAnswered}
            >
              {formatQuestionText(answer)}
            </button>
          ))}
      </div>
      {isAnswered && (
        <div className="result">
          <p
            className={
              selectedAnswer === question.correct_answer
                ? "correct"
                : "incorrect"
            }
          >
            {selectedAnswer === question.correct_answer
              ? "¡Correcto!"
              : "Incorrecto."}
          </p>
        </div>
      )}
      <div
        className="question-info"
        style={{
          display: isAnswered ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {number === 10 ? (
          <button
            className={`button ${!isAnswered ? "disabled" : ""}`}
            onClick={() => {
              window.location.href = "/results";
            }}
          >
            Mostrar Resultados
          </button>
        ) : (
          <a disabled={!isAnswered} href={`/questions/${number + 1}`}>
            Siguiente pregunta
          </a>
        )}
      </div>
    </div>
  );
};

export default Question;
