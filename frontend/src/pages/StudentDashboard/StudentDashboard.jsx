import React from 'react';
import styles from './StudentDashboard.module.css';
import { Card, CardHeader, CardBody } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export const StudentDashboard = () => {
  return (
    <div className={styles.studentContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.headerFlex}>
          <div>
            <h1>Student Learning Portal</h1>
            <p>Track your enrollments, progress, and certificates.</p>
          </div>
          <Button variant="secondary" onClick={() => window.print()} className="no-print" aria-label="Download Academic Transcript">
            Download Transcript
          </Button>
        </div>
      </header>

      <div className={styles.statsRow}>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>4</div>
          <div className={styles.kpiLabel}>Workshops Enrolled</div>
        </Card>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>3</div>
          <div className={styles.kpiLabel}>Workshops Completed</div>
        </Card>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>2</div>
          <div className={styles.kpiLabel}>Certificates Earned</div>
        </Card>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <Card className={styles.fullCard}>
            <CardHeader>My Enrolled Workshops</CardHeader>
            <CardBody>
              <div className={styles.tableResponsive}>
                <table className={styles.academicTable}>
                  <thead>
                    <tr>
                      <th>Workshop Title</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanced Python Programming</td>
                      <td>Aug 15, 2026</td>
                      <td><span style={{color: 'orange', fontWeight: 'bold'}}>Upcoming</span></td>
                      <td><a href="#join" className={styles.actionButton}>Join Session</a></td>
                    </tr>
                    <tr>
                      <td>OpenFOAM Simulation Basics</td>
                      <td>Aug 22, 2026</td>
                      <td><span style={{color: 'orange', fontWeight: 'bold'}}>Upcoming</span></td>
                      <td><a href="#join" className={styles.actionButton}>Join Session</a></td>
                    </tr>
                    <tr>
                      <td>Data Analysis with R</td>
                      <td>Sep 05, 2026</td>
                      <td><span style={{color: 'green', fontWeight: 'bold'}}>Completed</span></td>
                      <td><span style={{color: 'var(--color-text-secondary)'}}>No Action</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className={styles.rightColumn}>
          <Card className={styles.fullCard}>
            <CardHeader>Certificates</CardHeader>
            <CardBody>
              <ul className={styles.certList}>
                <li className={styles.certItem}>
                  <div>
                    <div className={styles.certName}>Introduction to Linux</div>
                    <div className={styles.certDate}>Issued: July 10, 2026</div>
                  </div>
                  <Button variant="secondary" style={{fontSize: '0.75rem', padding: '0.2rem 0.5rem'}} aria-label="Download Certificate">PDF</Button>
                </li>
                <li className={styles.certItem}>
                  <div>
                    <div className={styles.certName}>C++ Masterclass</div>
                    <div className={styles.certDate}>Issued: May 02, 2026</div>
                  </div>
                  <Button variant="secondary" style={{fontSize: '0.75rem', padding: '0.2rem 0.5rem'}} aria-label="Download Certificate">PDF</Button>
                </li>
              </ul>
              <div style={{marginTop: '2rem', textAlign: 'center'}}>
                <Button variant="primary" style={{width: '100%'}} aria-label="Browse more workshops">Browse More Workshops</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
