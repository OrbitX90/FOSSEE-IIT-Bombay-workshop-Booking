import React from 'react';
import styles from './Dashboard.module.css';
import { Card, CardHeader, CardBody } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.headerFlex}>
          <div>
            <h1>Coordinator Dashboard</h1>
            <p>Institutional Overview & Workshop Statistics</p>
          </div>
          <Button variant="secondary" onClick={() => window.print()} className="no-print">
            Print Official Report
          </Button>
        </div>
      </header>

      <div className={styles.statsRow}>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>12</div>
          <div className={styles.kpiLabel}>Workshops Hosted</div>
        </Card>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>840</div>
          <div className={styles.kpiLabel}>Students Certified</div>
        </Card>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>98%</div>
          <div className={styles.kpiLabel}>Approval Rating</div>
        </Card>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiValue}>2</div>
          <div className={styles.kpiLabel}>Pending Requests</div>
        </Card>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <Card className={styles.fullCard}>
            <CardHeader>Upcoming Scheduled Workshops</CardHeader>
            <CardBody>
              <div className={styles.tableResponsive}>
                <table className={styles.academicTable}>
                  <thead>
                    <tr>
                      <th>Workshop Title</th>
                      <th>Date</th>
                      <th>Participants</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanced Python Programming</td>
                      <td>Aug 15, 2026</td>
                      <td>120 / 150</td>
                      <td><a href="#manage">Manage</a></td>
                    </tr>
                    <tr>
                      <td>OpenFOAM Simulation Basics</td>
                      <td>Aug 22, 2026</td>
                      <td>85 / 100</td>
                      <td><a href="#manage">Manage</a></td>
                    </tr>
                    <tr>
                      <td>Data Analysis with R</td>
                      <td>Sep 05, 2026</td>
                      <td>60 / 60</td>
                      <td><a href="#view">View Details</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className={styles.rightColumn}>
          <Card className={styles.fullCard}>
            <CardHeader>Outreach Distribution</CardHeader>
            <CardBody className={styles.chartContainer}>
              <div className={styles.pieChart}></div>
              <p className={styles.chartLegend}>
                <span style={{color: 'var(--color-primary)'}}>■</span> Programming (45%)<br/>
                <span style={{color: 'var(--color-secondary)'}}>■</span> Engineering (30%)<br/>
                <span style={{color: 'var(--color-accent)'}}>■</span> Data Science (25%)
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
