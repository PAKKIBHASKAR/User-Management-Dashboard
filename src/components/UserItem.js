import React, { useState } from 'react';
import UserForm from './UserForm';
import './UserItem.css'; // Import the CSS file

const UserItem = ({ user, onDelete, onEditSuccess }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSuccess = (updatedUser, action) => {
    setIsEditing(false);
    onEditSuccess({ ...updatedUser, id: user.id }, action);
  };

  return (
    <li className="user-item">
      {isEditing ? (
        <UserForm user={user} onCancel={handleCancel} onSuccess={handleSuccess} />
      ) : (
        <div className="user-info">
          <span className="user-id">{user.id}</span>
          <span className="user-name">{user.name.split(' ')[0]}</span>
          <span className="user-name">{user.name.split(' ')[1]}</span>
          <span className="user-email">{user.email}</span>
          <span className="user-department">{user.company.name}</span>
          <span className="user-actions">
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(user.id)}>Delete</button>
          </span>
        </div>
      )}
    </li>
  );
};

export default UserItem;
