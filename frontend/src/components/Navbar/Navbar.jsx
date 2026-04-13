import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Button } from '../Button/Button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginSelect = (route) => {
    setIsLoginModalOpen(false);
    navigate(route);
  };

  return (
    <div className={styles.headerWrapper}>
      {/* Formal Top Strip inside the wrapper */}
      <div className={styles.topStrip}>
        <a href="https://fossee.in" target="_blank" rel="noreferrer" className={styles.topStripLink}>FOSSEE Home</a>
        <a href="https://iitb.ac.in" target="_blank" rel="noreferrer" className={styles.topStripLink}>IIT Bombay</a>
      </div>

      <nav className={styles.navbar}>
        <Link to="/" className={styles.logoWrapper} onClick={() => setIsMenuOpen(false)}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" 
            alt="IIT Bombay Logo" 
            className={styles.iitbLogo}
          />
          <div className={styles.logoContainer}>
            <span className={styles.logoTitle}>Workshop Booking</span>
            <span className={styles.logoSubtitle}>Academic Booking Platform</span>
          </div>
        </Link>
        
        {/* Mobile menu toggle */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        
        {/* Nav Links and Actions grouped for mobile dropdown */}
        <div className={`${styles.navGroup} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/workshops" className={styles.link} onClick={() => setIsMenuOpen(false)}>Workshops</Link>
            <Link to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Initiatives</Link>
          </div>

          <div className={styles.actions}>
            <Button 
              variant="primary" 
              style={{width: '100%'}}
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsMenuOpen(false);
              }}
            >
              Log in
            </Button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsLoginModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsLoginModalOpen(false)}>✕</button>
            <h2 className={styles.modalHeader}>Select Your Role</h2>
            <Button variant="secondary" onClick={() => handleLoginSelect('/student')}>
              Continue as Student
            </Button>
            <Button variant="primary" onClick={() => handleLoginSelect('/instructor/1')}>
              Continue as Professor
            </Button>
            <Button variant="primary" onClick={() => handleLoginSelect('/dashboard')} style={{backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)'}}>
              Continue as Admin Coordinator
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
