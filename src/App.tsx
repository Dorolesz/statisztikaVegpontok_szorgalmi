import { useState, useEffect } from 'react';
import './App.css';
import './index.css'; // Import the new CSS file
import StatisticCard from './StatisticCardProps';

interface User {
  name: string;
  age: number;
  gender: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Expect JSON response
      })
      .then(data => {
        console.log('Fetched data:', data); // Log fetched data
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app">
      {users.map((user, index) => (
        <StatisticCard key={index} name={user.name} age={user.age} gender={user.gender} />
      ))}
    </div>
  );
}

export default App;