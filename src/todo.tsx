import NavBar from "./components/NavBar";


import { useState, useEffect } from "react";

function todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 데이터 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // todos가 바뀔 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) {
      alert("내용을 입력하세요!");
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <NavBar />    
      <h1>📝 To-Do List (localStorage)</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default todo;

