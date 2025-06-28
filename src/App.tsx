import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>🚧 En Construcción 🚧</h1>
          <p className={styles.subtitle}>
            Mi portfolio estará listo muy pronto
          </p>
          <div className={styles.loader}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;