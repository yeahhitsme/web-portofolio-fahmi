import { Code2, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SkillGroupIcon } from '../../data/types';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import SectionHeading from '../SectionHeading/SectionHeading';
import { skillGroups } from '../../data/skills';
import styles from './SkillsSection.module.css';

const GROUP_ICONS: Record<SkillGroupIcon, LucideIcon> = {
  code: Code2,
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function SkillsSection() {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      id="keahlian"
      className="section"
      aria-labelledby="keahlian-title"
    >
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Keahlian"
          title="Teknologi yang Saya Gunakan"
          id="keahlian-title"
          lead="Kelompok teknologi yang saya pelajari dan gunakan untuk membangun aplikasi web."
        />
        <div ref={revealRef} className="reveal">
          <div className={styles.grid}>
            {skillGroups.map((group) => {
              const Icon = GROUP_ICONS[group.icon];
              return (
                <article key={group.id} className={styles.card}>
                  <h3 className={styles.groupTitle}>
                    <Icon size={18} aria-hidden="true" />
                    {group.label}
                  </h3>
                  <ul className={styles.chips}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.chip}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
