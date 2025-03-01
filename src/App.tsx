import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import StatisticCard from './StatisticCardProps';

interface User {
  name: string;
  age: number;
  gender: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Unexpected response data format:', response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      {users.map((user, index) => (
        <StatisticCard key={index} name={user.name} age={user.age} gender={user.gender} />
      ))}
    </div>
  );
}

export default App;