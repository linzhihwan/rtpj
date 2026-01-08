import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";

import Partner from "./Partner.tsx";
import Welcome from "./welc.tsx";
import Todo from "./todo.tsx";
import Three from "./three.tsx";
import Quiz from "./quiz.tsx";
import Weather from "./weather.tsx";
import Portfolio from "./portfolio.tsx";
import Shopping from "./shopping.tsx";
import Mycost from "./mycost.tsx";

/* import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"; */

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: "60px", padding: "20px",fontFamily: "sans-serif"  }}>
        {/* NavBar가 fixed라서 내용이 가려지지 않도록 marginTop 추가 */}
        <Routes>

        {/* <Route path="/" element={<h1>홈 화면</h1>} /> */}
        <Route path="/Partner" element={<Partner />} />
        <Route path="/contact" element={<h1>연락처 페이지</h1>} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/three" element={<Three />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/mycost" element={<Mycost />} />

        {/* "/" 경로 → Welcome 컴포넌트 */}
        <Route path="/" element={<Welcome />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
