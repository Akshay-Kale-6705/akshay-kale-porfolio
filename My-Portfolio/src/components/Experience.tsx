import { portfolioData } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">{"// work experience"}</p>
        <h2 className="section-title">
          Where I&apos;ve <span>Worked</span>
        </h2>

        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.timelineLine} />
              <div className={styles.dot} />

              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.role}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{job.period}</span>
                    <span className={styles.location}>{job.location}</span>
                  </div>
                </div>

                {job.project && (
                  <div className={styles.project}>
                    <span className={styles.projectLabel}>Project:</span>
                    <span className={styles.projectName}>{job.project}</span>
                  </div>
                )}

                <p className={styles.description}>{job.description}</p>

                <div className={styles.section}>
                  <p className={styles.respLabel}>Key Responsibilities</p>
                  <ul className={styles.list}>
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className={styles.listItem}>
                        <span className={styles.arrow}>→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.tech}>
                  {job.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
