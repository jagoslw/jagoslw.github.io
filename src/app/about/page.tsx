import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background and expertise",
};

export default function About() {
  return (
    <div className={styles.container}>
      {/* Back Button */}
      <Link
        href="/"
        className={styles.backButton}
      >
        ← Back Home
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>About Me</h1>

        <div className={styles.mainContent}>
          <p className={styles.paragraph}>
            I'm So Long Wang or Jason So, goes by the handle @jagoslw at GitHub. Link to GitHub: <a href="https://github.com/jagoslw" target="_blank" rel="noopener noreferrer">https://github.com/jagoslw</a>.
          </p>
          <p className={styles.paragraph}>
           A passionate student engineer dedicated to everythin IT.
          </p>
          <p className={styles.paragraph}>
            With experience and knowledge in various technologies including React, Database (Firebase), ESP32, and IoT, I build scalable applications that solve real-world problems.
          </p>
          <p className={styles.paragraph}>
            Coding experience includes Javascript, Java (OOP), C++, and Python. I am always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
          </p>

          <h2 className={styles.sectionHeading}>Skills</h2>
          <ul className={styles.skillsList}>
            <li className={styles.skillsItem}>Frontend Development (React)</li>
            <li className={styles.skillsItem}>UI/UX Design & Implementation</li>
            <li className={styles.skillsItem}>Database Utilization (Firebase)</li>
            <li className={styles.skillsItem}>Embedded Systems (ESP32)</li>
            <li className={styles.skillsItem}>Internet of Things (IoT)</li>
            <li className={styles.skillsItem}>Coding: Javascript, Java (OOP), C++, Python</li>
          </ul>

          <h2 className={styles.sectionHeading}>Experience</h2>
          <div className={styles.experienceSection}>
            <div className={`${styles.experienceItem} ${styles.experienceItemBlue}`}>
              <h3 className={styles.experienceTitle}>City University of Hong Kong,<br></br> <br></br>Bachelor of Engineering in Computer and Data Engineering</h3>
              <p className={styles.experienceDate}>2024 - Present</p>
              <p className={styles.experienceDescription}>Enrolled into City University of Hong Kong as Advanced Standing II student with Associate Degree</p>
            </div>
            
            <div className={`${styles.experienceItem} ${styles.experienceItemCyan}`}>
              <h3 className={styles.experienceTitle}>The Hong Kong Polytechnic University,<br></br> Hong Kong Community College <br></br> <br></br>Associate in Information Technology</h3>
              <p className={styles.experienceDate}>2022 - 2024</p>
              <p className={styles.experienceDescription}>Enrolled into HKCC after HKDSE</p>
            </div>

            <div className={`${styles.experienceItem} ${styles.experienceItemCyan}`}>
              <h3 className={styles.experienceTitle}>TWGHs Lo Kon Ting Memorial College, <br></br> HKDSE</h3>
              <p className={styles.experienceDate}>2016 - 2022</p>
              <p className={styles.experienceDescription}>Received secondary education in Hong Kong</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
