import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  // 1. 타입 정의
interface partners {
  orgccd: string;
  ccdmd: string;
  newccd: string; // 필요한 다른 필드도 추가
}

  const [partners, setPartners] = useState<partners[]>([]);
  const [form, setForm] = useState({ ccdmd: "", orgccd: "", newccd: "" });

  // READ  ccdmd, orgccd, newccd
  useEffect(() => {
    axios.get("http://localhost:5173/partners").then(res => setPartners(res.data));
  }, []);

  // CREATE
  const addPartner = () => {
    axios.post("http://localhost:5173/partners", form).then(res => {
      setPartners([...partners, res.data]);      
      setForm({ ccdmd: "MDK", orgccd: "99955588", newccd: "11122233" });
    });
  };

  // UPDATE
  const updatePartner = (orgccd: string) => {
    axios.put(`http://localhost:5173/partners/${orgccd}`, { ccdmd: "MDK", orgccd: "99955588", newccd: "99966677" })
      .then(res => {
          setPartners(partners.map(u => u.orgccd === orgccd ? res.data : u));
      });
  };

  // DELETE
  const deletePartner = (orgccd: string) => {
    axios.delete(`http://localhost:5173/partners/${orgccd}`).then(() => {
      setPartners(partners.filter(u => u.orgccd !== orgccd));
    });
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        placeholder="ccdmd"
        value={form.orgccd}
        onChange={e => setForm({ ...form, orgccd: e.target.value })}
      />      
      <input
        placeholder="orgccd"
        value={form.orgccd}
        onChange={e => setForm({ ...form, orgccd: e.target.value })}
      />
      <input
        placeholder="newccd"
        value={form.newccd}
        onChange={e => setForm({ ...form, newccd: e.target.value })}
      />
      <button onClick={addPartner}>Add partner</button>

      <ul>
        {partners.map(u => (
          <li key={u.orgccd}>
            {u.ccdmd} ({u.orgccd}, {u.newccd})
            <button onClick={() => updatePartner(u.orgccd)}>Update</button>
            <button onClick={() => deletePartner(u.orgccd)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
