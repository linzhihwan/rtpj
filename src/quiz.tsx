import NavBar from "./components/NavBar";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const quizData: Question[] = [
  {
    question: "React에서 상태 관리를 위한 Hook은?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useState",
  },
  {
    question: "React 컴포넌트에서 데이터를 전달할 때 사용하는 것은?",
    options: ["props", "state", "context", "hooks"],
    answer: "props",
  },
  {
    question: "React 프로젝트를 빠르게 시작할 수 있는 빌드 툴은?",
    options: ["Webpack", "Vite", "Parcel", "Rollup"],
    answer: "Vite",
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
       <NavBar /> 
      <h1>🎯 Quiz App</h1>

      {showResult ? (
        <div>
          <h2>결과</h2>
          <p>
            총 {quizData.length}문제 중 {score}개 맞췄습니다!
          </p>
          <button onClick={() => { setCurrent(0); setScore(0); setShowResult(false); }}>
            다시 시작
          </button>
        </div>
      ) : (
        <div>
          <h2>{quizData[current].question}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {quizData[current].options.map((option, i) => (
              <li key={i} style={{ margin: "8px 0" }}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;

