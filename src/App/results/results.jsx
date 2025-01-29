import React, { useEffect, useState } from "react"
import "./Results.scss"

const Results = () => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const savedScore = localStorage.getItem("score")
    if (savedScore) {
      setScore(Number.parseInt(savedScore, 10))
    }
  }, [])

  return (
    <div className="results-container">
      <h2>Resultados</h2>
      <p>
        Puntaje total: <span>{score}</span> puntos
      </p>
    </div>
  )
}

export default Results

