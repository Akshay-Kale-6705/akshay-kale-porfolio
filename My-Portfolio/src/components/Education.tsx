import { portfolioData } from "@/data/portfolio";
import styles from "./Education.module.css";

export default function Education() {
  const { education, certifications, languages } = portfolioData;

  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-label">{"// background"}</p>
        <h2 className="section-title">
          Education &amp; <span>Credentials</span>
        </h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.colTitle}>Education</h3>
            <div className={styles.eduList}>
              {education.map((edu, i) => (
                <div key={i} className={styles.eduCard}>
                  <div className={styles.eduDot} />
                  <div>
                    <p className={styles.degree}>{edu.degree}</p>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.period}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Certifications</h3>
            <div className={styles.certList}>
              {certifications.map((cert, i) => (
                <div key={i} className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.certName}>{cert.name}</p>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className={`${styles.colTitle} ${styles.mt}`}>Languages</h3>
            <div className={styles.langList}>
              {languages.map((lang) => (
                <span key={lang} className={styles.langTag}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
