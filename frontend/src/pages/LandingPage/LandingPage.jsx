import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { Button } from '../../components/Button/Button';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.heroContainer}>
      
      {/* Formal Hero Banner */}
      <div className={styles.heroBanner}>
        <h1 className={styles.title}>
          FOSSEE Academic Booking Platform
        </h1>
        <p className={styles.subtitle}>
          A comprehensive platform empowering students to master new skills, and instructors to manage technical workshops securely across top engineering institutes.
        </p>
        <div className={styles.buttonGroup}>
          <Button 
            variant="primary" 
            onClick={() => navigate('/workshops')}
            style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            Explore Workshops
          </Button>
        </div>
      </div>

      {/* Structured Information Content */}
      <div className={styles.contentSection}>
        <div className={styles.infoBlock}>
          <h2>Why Use FOSSEE?</h2>
          <p>
            The FOSSEE project promotes the use of open-source software in educational institutions. This platform serves dual roles: providing students a gateway to technical certification, and offering universities streamlined workshop organization workflows.
          </p>
          <ul className={styles.infoList}>
            <li>Browse and enroll in certified workshops easily</li>
            <li>Track personal learning progress and certificates</li>
            <li>Real-time automated analytics for teaching staff</li>
            <li>Secure, role-based access for coordination</li>
          </ul>
        </div>

        {/* Academic Statistical Display */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>150+</span>
            <span className={styles.statLabel}>Institutes connected</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>4.2k</span>
            <span className={styles.statLabel}>Workshops completed</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>12k</span>
            <span className={styles.statLabel}>Total students reached</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Coordination Access</span>
          </div>
        </div>
      </div>

    </div>
  );
};
