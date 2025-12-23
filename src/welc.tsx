import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div style={{ marginTop: "0px",border: "1px solid black", padding: "10px"}}>
      <NavBar />        
      <h1>Welcome to Home Page</h1>
      <h1>페이지 내용</h1>
      <p>이 내용은 메뉴바 바로 밑에서 시작됩니다.</p>      
    </div>
  );
}
