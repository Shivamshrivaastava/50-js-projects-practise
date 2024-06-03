import React, { useEffect, useState } from 'react';
import './Users.css';
import { getUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="users"><h1>Loading...</h1></div>;
  }

  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
