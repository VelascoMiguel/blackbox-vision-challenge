import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Question1 from "./questions/1/Question1";
import Question2 from "./questions/2/Question2";
import Question3 from "./questions/3/Question3";
import Question4 from "./questions/4/Question4";
import Question5 from "./questions/5/Question5";
import Question6 from "./questions/6/Question6";
import Question7 from "./questions/7/Question7";
import Question8 from "./questions/8/Question8";
import Question9 from "./questions/9/Question9";
import Question10 from "./questions/10/Question10";

import React from "react";
import styles from "./App.module.scss";
import logo from "../assets/logo.png";
import Results from "./results/results";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className={styles.container}>
              <header className={styles.header}>
                <h1>
                  <img alt="BlackBox Vision" src={logo} width={480} />
                </h1>
                <h3>Lets get this party started</h3>
              </header>
            </main>
          }
        />
        <Route path="/questions/1" element={<Question1 />} />
        <Route path="/questions/2" element={<Question2 />} />
        <Route path="/questions/3" element={<Question3 />} />
        <Route path="/questions/4" element={<Question4 />} />
        <Route path="/questions/5" element={<Question5 />} />
        <Route path="/questions/6" element={<Question6 />} />
        <Route path="/questions/7" element={<Question7 />} />
        <Route path="/questions/8" element={<Question8 />} />
        <Route path="/questions/9" element={<Question9 />} />
        <Route path="/questions/10" element={<Question10 />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
