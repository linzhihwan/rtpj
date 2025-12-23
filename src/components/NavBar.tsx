import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        position: "fixed",   // 화면에 고정
        top: 0,              // 상단에 붙이기
        left: 0,
        width: "95%",       // 전체 너비
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000         // 다른 요소보다 위에 표시
      }}
    >
      {/* 로고 */}
      <div style={{ fontWeight: "bold" }}>MyApp</div>

      {/* 메뉴 항목 */}
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>홈</Link></li>
        <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>소개</Link></li>
        <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>연락처</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
