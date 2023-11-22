// PDFViewer.js
import React from 'react';
import styles from './styles/PDFViewer.module.css';

const PDFViewer = ({ src }) => {
  return (
    <iframe
      className={styles.pdfViewer}
      src={src}
      width="100%"
      height="600px" // Set this to a specific height or manage via CSS
      title="CV"
    ></iframe>
  );
};

export default PDFViewer;
