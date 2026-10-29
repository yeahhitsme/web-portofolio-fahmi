import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="proyek" className="section" aria-labelledby="proyek-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Project"
          title="Project Pilihan"
          id="proyek-title"
          lead="Project yang pernah saya kerjakan — lengkap dengan latar belakang masalah, kontribusi saya, dan teknologi yang digunakan."
        />
        <div ref={revealRef} className="reveal">
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
