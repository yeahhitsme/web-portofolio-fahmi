import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import SectionHeading from '../SectionHeading/SectionHeading';
import { profile } from '../../data/profile';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="tentang" className="section" aria-labelledby="tentang-title">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Tentang"
          title="Tentang Saya"
          id="tentang-title"
        />
        <div ref={revealRef} className="reveal">
          <div className={styles.inner}>
            <div className={styles.paragraphs}>
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>Fokus</dt>
              <dd>Pengembangan Web — Frontend &amp; Backend</dd>
              </div>
              <div className={styles.fact}>
                <dt>Lokasi</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className={styles.fact}>
                <dt>Status</dt>
                <dd>{profile.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
