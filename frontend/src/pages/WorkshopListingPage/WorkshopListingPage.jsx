import React, { useState, useEffect } from 'react';
import styles from './WorkshopListingPage.module.css';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { SkeletonCard } from '../../components/Card/SkeletonCard';

const WORKSHOPS_MOCK = [
  { id: 1, title: 'Advanced Python Programming', instructor: 'Dr. A. Sharma', date: '2026-05-15', status: 'Open', category: 'Programming' },
  { id: 2, title: 'OpenFOAM Simulation Basics', instructor: 'Prof. R. Desai', date: '2026-05-20', status: 'Open', category: 'Engineering' },
  { id: 3, title: 'Data Analysis with R', instructor: 'Dr. K. Iyer', date: '2026-06-02', status: 'Open', category: 'Data Science' },
  { id: 4, title: 'Scilab for Mathematics', instructor: 'Dr. M. Patel', date: '2026-06-10', status: 'Closed', category: 'Mathematics' },
  { id: 5, title: 'Quantum Computing Intro', instructor: 'Prof. S. Bose', date: '2026-06-15', status: 'Open', category: 'Engineering' },
  { id: 6, title: 'Machine Learning Fundamentals', instructor: 'Dr. V. Kumar', date: '2026-07-01', status: 'Closed', category: 'Programming' },
];

export const WorkshopListingPage = () => {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  // Simulate network request loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds of simulated loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Workshop Directory</h1>
        <p>Browse and request bookings for upcoming official FOSSEE workshops across India.</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h3>Filters</h3>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category</label>
            <select className={styles.selectInput} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Engineering">Engineering</option>
              <option value="Data Science">Data Science</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Availability</label>
            <select className={styles.selectInput}>
              <option value="Any">Any Status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <Button variant="primary" style={{ width: '100%' }}>Apply Filters</Button>
        </aside>

        <main className={styles.grid}>
          {loading ? (
            // Render 6 skeleton cards while 'loading' is true
            Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            // Render actual data when loading finishes
            WORKSHOPS_MOCK.filter(w => filter === 'All' || w.category === filter).map(workshop => (
              <Card key={workshop.id} hoverable className={styles.workshopCard}>
                <CardHeader className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>{workshop.category}</span>
                  <span className={workshop.status === 'Closed' ? styles.statusClosed : styles.statusOpen}>{workshop.status}</span>
                </CardHeader>
                <CardBody>
                  <h3 className={styles.workshopTitle}>{workshop.title}</h3>
                  <div className={styles.workshopMeta}>
                    <span><strong>Instructor:</strong> {workshop.instructor}</span>
                    <span><strong>Date:</strong> {new Date(workshop.date).toLocaleDateString()}</span>
                  </div>
                </CardBody>
                <CardFooter className={styles.cardFooter}>
                  <Button variant={workshop.status === 'Closed' ? 'ghost' : 'secondary'} disabled={workshop.status === 'Closed'}>
                    {workshop.status === 'Closed' ? 'Fully Booked' : 'Request Booking'}
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </main>
      </div>
    </div>
  );
};
