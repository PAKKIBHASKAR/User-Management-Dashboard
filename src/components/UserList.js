import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserItem from './UserItem';
import UserForm from './UserForm';
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      setError('Error fetching users');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Error deleting user');
    }
  };

  const handleSuccess = (user, action) => {
    if (action === 'add') {
      const maxId = Math.max(...users.map(u => u.id));
      setUsers([...users, { ...user, id: maxId + 1 }]);
    } else if (action === 'edit') {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    }
  };

  return (
    <div className="user-list-container">
      <h1>User Management Dashboard</h1>
      {error && <p className="error-message">{error}</p>}
      <UserForm onSuccess={handleSuccess} />
      <div className="user-list-header">
        <span>ID</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Department</span>
        <span>Actions</span>
      </div>
      <ul className="user-list">
        {users.map(user => (
          <UserItem key={user.id} user={user} onDelete={handleDelete} onEditSuccess={handleSuccess} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
