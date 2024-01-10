import * as React from "react";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.box1}`}>
          <div className={`${styles.colorBox} ${styles.colorBox1}`}>
            <span className={styles.boxNumber}>25</span>
          </div>
          <div className={styles.boxText}>Completed</div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <div className={`${styles.colorBox} ${styles.colorBox2}`}>
            <span className={styles.boxNumber}>05</span>
          </div>
          <div className={styles.boxText}>Rejected</div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div className={`${styles.colorBox} ${styles.colorBox3}`}>
            <span className={styles.boxNumber}>05</span>
          </div>
          <div className={styles.boxText}>Pending</div>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <div className={`${styles.colorBox} ${styles.colorBox4}`}>
            <span className={styles.boxNumber}>37</span>
          </div>
          <div className={styles.boxText}>Total</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
