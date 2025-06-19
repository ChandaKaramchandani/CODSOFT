// src/pages/JobDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Remote',
      description: 'We are looking for a passionate Frontend Developer with React skills.',
      salary: '₹6,00,000/year'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CodeBase Inc.',
      location: 'Bangalore',
      description: 'Seeking a backend expert with Node.js and MongoDB experience.',
      salary: '₹8,00,000/year'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Designify',
      location: 'Delhi',
      description: 'Looking for creative UI/UX designer with Figma experience.',
      salary: '₹5,50,000/year'
    },
  ];

  const job = jobs.find((job) => job.id === parseInt(id));

  // Apply form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your application for "${job.title}" has been submitted.`);
    // You can also console.log or clear the form here
    setName('');
    setEmail('');
    setMessage('');
  };

  if (!job) {
    return <h2 style={{ padding: '2rem' }}>Job Not Found</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <hr style={{ margin: '2rem 0' }} />

      <h3>Apply for this job</h3>
      <form onSubmit={handleApply} style={{ maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Why should we hire you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputStyle, height: '100px' }}
        ></textarea>
        <button type="submit" style={buttonStyle}>Submit Application</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  margin: '0.5rem 0',
  padding: '10px',
  fontSize: '16px'
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  marginTop: '1rem'
};

export default JobDetail;
