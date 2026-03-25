import { portfolioData } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">{"// skills"}</p>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
