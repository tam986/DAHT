import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.message}>Oops! Page Not Found</h2>
      <p style={styles.description}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    textAlign: 'center',
  },
  errorCode: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#dc3545',
  },
  message: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '0.75rem 1.5rem',
    borderRadius: '5px',
    fontSize: '1rem',
  },
};

export default NotFound;
