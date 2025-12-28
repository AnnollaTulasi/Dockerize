import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    setName('');
    const res = await fetch(`${API_URL}/api/users`);
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Full-Stack App</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <h2>Users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
