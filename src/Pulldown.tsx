import { useState } from "react";

const options = ["사과", "바나나", "오렌지"];

function Pulldown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("선택하세요");

  return (
    <div style={{ position: "relative", width: 200 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "1px solid #aaa",
          padding: "8px",
          cursor: "pointer"
        }}
      >
        {selected} ▼
      </div>

      {open && (
        <ul style={{
          border: "1px solid #aaa",
          margin: 0,
          padding: 0,
          listStyle: "none"
        }}>
          {options.map(item => (
            <li
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>    
  );
}

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <button onClick={() => setOpen(!open)}>
        메뉴 선택 ▼
      </button>

      {open && (
        <ul style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          border: "1px solid #ccc",
          background: "#fff",
          listStyle: "none",
          padding: 0,
          margin: 0
        }}>
          <li onClick={() => setOpen(false)}>옵션 1</li>
          <li onClick={() => setOpen(false)}>옵션 2</li>
          <li onClick={() => setOpen(false)}>옵션 3</li>
        </ul>
      )}
    </div>
  );
}

export default Pulldown;
export { Dropdown };