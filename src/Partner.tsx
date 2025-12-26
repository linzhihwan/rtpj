import { useEffect, useState } from "react";
import axios from "axios";

function Partner() {

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
    axios.get("http://localhost:5000/partners").then(res => setPartners(res.data));
  }, []);

  // CREATE
  const addPartner = () => {

    if (!form.orgccd || !form.ccdmd || !form.newccd) {
      alert("모든 입력값을 채워주세요!");
      return;
    }

    axios.post("http://localhost:5000/partners", form).then(res => {
      setPartners([...partners, res.data]);      
      setForm({ ccdmd: "", orgccd: "", newccd: "" });
    });
  };

  // UPDATE
  const updatePartner = (ccdmd: string, orgccd: string) => {
    axios.put(`http://localhost:5000/partners/${ccdmd}${orgccd}`, { ccdmd: "MDK", orgccd: "99955588", newccd: "99966677" })
      .then(res => {
          setPartners(partners.map(u => u.ccdmd !== ccdmd && u.orgccd === orgccd ? res.data : u));
      });
  };
  
  // DELETE
  const deletePartner = (orgccd: string, ccdmd: string) => {
    axios.delete(`http://localhost:5000/partners/${orgccd}/${ccdmd}`).then(() => {
      setPartners(partners.filter(u => u.orgccd !== orgccd));
    });
  };

    // DELETE
  const deletePartner1 = (orgccd: string) => {
    axios.delete(`http://localhost:5000/partners/${orgccd}`).then(() => {
      setPartners(partners.filter(u => u.orgccd !== orgccd));
    });
  };

  return (
    <div>
      <h1>협력사 코드 전환</h1>
      <input
        placeholder="ccdmd"
        value={form.ccdmd}
        onChange={e => setForm({ ...form, ccdmd: e.target.value })}
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
            {u.ccdmd}, {u.orgccd}, {u.newccd}
            <button onClick={() => updatePartner(u.ccdmd,u.orgccd)}>Update</button>
            <button onClick={() => deletePartner1(u.orgccd)}>Delete1</button>
            <button onClick={() => deletePartner(u.orgccd,u.ccdmd)}>Delete2</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partner;
