import React from 'react';
import styles from './styles/Experience.module.css';
import PDFViewer from './PDFViewer';


const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <p>For a more professional look at my experience, here is <a href="/Yskak-Resume-2.pdf" target="_blank">my CV</a>.</p>
      <PDFViewer src="/Yskak-Resume-2.pdf" />
    </section>
  );
};
export default Experience;
