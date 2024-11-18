import React, { useState, useEffect } from 'react';
import './UserForm.css'; // Import the CSS file

const UserForm = ({ user, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.name.split(' ');
      setFormData({
        firstName: firstName || '',
        lastName: lastName || '',
        email: user.email,
        department: user.company.name
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      id: user ? user.id : null,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: { name: formData.department }
    };
    onSuccess(newUser, user ? 'edit' : 'add');
    setFormData({ firstName: '', lastName: '', email: '', department: '' }); // Clear the form
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{user ? 'Save' : 'Add User'}</button>
      {user && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default UserForm;
