// Experience.js
import React from 'react';
import styles from './styles/Experience.module.css';
import PDFViewer from './PDFViewer';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <p>For a more professional look at my experience, here is <a href={`${process.env.PUBLIC_URL}/Yskak-Resume-2.pdf`} target="_blank" rel="noopener noreferrer">my CV</a>.</p>
      <PDFViewer src={`${process.env.PUBLIC_URL}/Yskak-Resume-2.pdf`} />
    </section>
  );
};

export default Experience;
