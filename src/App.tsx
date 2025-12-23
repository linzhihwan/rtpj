import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  // READ
  useEffect(() => {
    axios.get("http://localhost:5000/partner_ccd").then(res => setUsers(res.data));
  }, []);

  // CREATE
  const addUser = () => {
    axios.post("http://localhost:5000/partner_ccd", form).then(res => {
      setUsers([...partner_ccd, res.data]);
      setForm({ name: "", email: "" });
    });
  };

  // UPDATE
  const updateUser = (id) => {
    axios.put(`http://localhost:5000/users/${id}`, { name: "수정된이름", email: "new@email.com" })
      .then(res => {
        setUsers(users.map(u => u.id === id ? res.data : u));
      });
  };

  // DELETE
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter(u => u.id !== id));
    });
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => updateUser(u.id)}>Update</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
