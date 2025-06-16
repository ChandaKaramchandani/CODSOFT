import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CodeBase Inc.',
      location: 'Bangalore',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Designify',
      location: 'Delhi',
    },
  ];

  // Filter jobs based on searchTerm
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Job Listings</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by title or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginTop: '1rem',
          marginBottom: '2rem',
          fontSize: '16px',
        }}
      />

      {/* 🔽 Filtered Results */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} style={cardStyle}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <Link to={`/jobs/${job.id}`}>
                <button style={buttonStyle}>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  padding: '1rem',
  borderRadius: '5px',
  width: '300px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  marginTop: '0.5rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default JobListings;
