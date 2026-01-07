import NavBar from "./components/NavBar";


function Portfolio() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <NavBar /> 
      {/* Header */}
      <header style={{ marginBottom: "40px" }}>
        <h1>임채아 포트폴리오</h1>
        <p>프론트엔드 개발자 | React & TypeScript</p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>👩‍💻 About Me</h2>
        <p>
          안녕하세요! 저는 사용자 친화적인 UI와 깔끔한 코드 작성을 좋아하는
          프론트엔드 개발자입니다. React, Vite, TypeScript를 활용한 프로젝트
          경험이 있습니다.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>📂 Projects</h2>
        <ul>
          <li>
            <strong>To-Do List App</strong> - React Hooks를 활용한 간단한 할 일 관리 앱
          </li>
          <li>
            <strong>Weather App</strong> - OpenWeather API 연동으로 날씨 정보 제공
          </li>
          <li>
            <strong>Quiz App</strong> - 문제와 정답을 관리하는 간단한 퀴즈 앱
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2>📧 Contact</h2>
        <p>Email: example@email.com</p>
        <p>GitHub: <a href="https://github.com/username">github.com/username</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/username">linkedin.com/in/username</a></p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "40px", fontSize: "14px", color: "gray" }}>
        © 2026 임채아. All rights reserved.
      </footer>
    </div>
  );
}

export default Portfolio;


