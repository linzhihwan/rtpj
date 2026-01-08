import NavBar from "./components/NavBar";

import { useState } from "react";

interface Expense {
  id: number;
  text: string;
  amount: number;
}

function Mycost() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!text.trim() || !amount) {
      alert("항목과 금액을 입력하세요!");
      return;
    }
    const newExpense: Expense = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setText("");
    setAmount("");
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <NavBar /> 
      <h1>💰 Expense Tracker</h1>

      {/* 입력 폼 */}
      <div>
        <input
          placeholder="항목"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="금액"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>추가</button>
      </div>

      {/* 지출 목록 */}
      <h2>지출 내역</h2>
      {expenses.length === 0 ? (
        <p>지출 내역이 없습니다.</p>
      ) : (
        <ul>
          {expenses.map(exp => (
            <li key={exp.id}>
              {exp.text} - {exp.amount.toLocaleString()}원
              <button onClick={() => deleteExpense(exp.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}

      {/* 총합 */}
      <h3>총 지출: {total.toLocaleString()}원</h3>
    </div>
  );
}

export default Mycost;
