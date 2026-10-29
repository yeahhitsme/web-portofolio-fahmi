import { GraduationCap } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import SectionHeading from '../SectionHeading/SectionHeading';
import { education } from '../../data/education';
import styles from './EducationSection.module.css';

export default function EducationSection() {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      id="pendidikan"
      className="section"
      aria-labelledby="pendidikan-title"
    >
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Pendidikan"
          title="Riwayat Pendidikan"
          id="pendidikan-title"
        />
        <div ref={revealRef} className="reveal">
          <ol className={styles.timeline}>
            {education.map((item) => (
              <li key={item.institution} className={styles.item}>
                <div className={styles.marker} aria-hidden="true">
                  <GraduationCap size={16} />
                </div>
                {item.period ? (
                  <p className={styles.period}>{item.period}</p>
                ) : null}
                <h3 className={styles.institution}>{item.institution}</h3>
                <p className={styles.degree}>{item.degree}</p>
                {item.highlight ? (
                  <p className={styles.highlight}>{item.highlight}</p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
