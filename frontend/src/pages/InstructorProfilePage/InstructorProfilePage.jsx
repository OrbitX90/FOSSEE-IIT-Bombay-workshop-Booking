import React from 'react';
import styles from './InstructorProfilePage.module.css';
import { Card, CardHeader, CardBody } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export const InstructorProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeaderCard}>
        <div className={styles.avatarPlaceholder}>JD</div>
        <div className={styles.profileInfo}>
          <h1>Dr. John Doe</h1>
          <div className={styles.designation}>Professor, Department of Computer Science</div>
          <p>Expert in scalable computing and open-source scientific software. Lead instructor for Python and Django workshops through FOSSEE.</p>
          <div className={styles.contactInfo}>
            <span>✉️ johndoe@iitb.ac.in</span>
            <span>📍 IIT Bombay Campus</span>
          </div>
        </div>
      </div>

      {/* Personal Student Tracker row */}
      <Card className={styles.trackerCard}>
        <CardHeader>Personal Course Performance Tracker</CardHeader>
        <div className={styles.trackerBody}>
          <div className={styles.trackerStat}>
            <span className={styles.trackerValue}>1,450</span>
            <span className={styles.trackerLabel}>Total Enrolled</span>
          </div>
          <div className={styles.trackerDivider}></div>
          <div className={styles.trackerStat}>
            <span className={styles.trackerValue}>1,203</span>
            <span className={styles.trackerLabel}>Total Completed</span>
          </div>
          <div className={styles.trackerDivider}></div>
          <div className={styles.trackerProgressContainer}>
            <div className={styles.progressText}>
              <span>Average Completion Rate</span>
              <strong>83%</strong>
            </div>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBarFill} style={{ width: '83%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      <div className={styles.gridTabs}>
        {/* Left Column: Workshop History */}
        <div className={styles.leftCol}>
          <Card className={styles.historyCard}>
            <CardHeader>Recent Workshops Conducted</CardHeader>
            <CardBody>
              <ul className={styles.listGroup}>
                <li className={styles.listItem}>
                  <h4>Advanced Python for Scientific Computing</h4>
                  <div className={styles.meta}>Format: Online • Date: March 10, 2026 • Attendees: 120</div>
                </li>
                <li className={styles.listItem}>
                  <h4>Introduction to Django Framework</h4>
                  <div className={styles.meta}>Format: Hybrid • Date: Jan 22, 2026 • Attendees: 85</div>
                </li>
                <li className={styles.listItem}>
                  <h4>OpenFOAM Workshop Analysis</h4>
                  <div className={styles.meta}>Format: In-Person • Date: Nov 15, 2025 • Attendees: 40</div>
                </li>
              </ul>
              <Button variant="ghost" style={{ marginTop: '1rem', padding: 0 }}>View Detailed History →</Button>
            </CardBody>
          </Card>
        </div>

        {/* Right Column: Feedback/Comments (from coordinators) */}
        <div className={styles.rightCol}>
          <Card>
            <CardHeader>Coordinator Feedback</CardHeader>
            <CardBody className={styles.commentsSection}>
              <div className={styles.commentBox}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentAuthor}>Dean Smith</span>
                  <span className={styles.commentDate}>Mar 15, 2026</span>
                </div>
                <p className={styles.commentText}>"Excellent session. The students were highly engaged with the practical examples."</p>
              </div>
              <div className={styles.commentBox}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentAuthor}>NIT Warangal Coord</span>
                  <span className={styles.commentDate}>Jan 25, 2026</span>
                </div>
                <p className={styles.commentText}>"Very professional conduct. Dr. Doe's teaching methodology is phenomenal."</p>
              </div>
              <Button variant="secondary" style={{ width: '100%', marginTop: '1rem' }}>Post Official Review</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
