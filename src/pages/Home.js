// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* 🔹 Top Navigation Bar */}
      <header style={styles.navbar}>
        <h2 style={styles.logo}>JobBoard</h2>
        <nav style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/jobs" style={styles.link}>Jobs</Link>
          <Link to="/post" style={styles.link}>Post Job</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </nav>
      </header>

      {/* 🔸 Hero Section with Image */}
      <section style={styles.hero}>
        <img
          src="home image.jpg" // ✅ replace with your image in public folder (public/hero.jpg)
          alt="Job Search"
          style={styles.image}
        />
        <h1 style={styles.heading}>Welcome to the Job Board</h1>
        <p style={styles.subtext}>Find your dream job or post a new opening today!</p>
      </section>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  hero: {
    textAlign: 'center',
    padding: '2rem',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '1.5rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#555',
  }
};

export default Home;
