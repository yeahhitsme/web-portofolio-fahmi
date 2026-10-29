import { ExternalLink, ImageOff } from 'lucide-react';
import { GithubIcon } from '../icons';
import type { Project } from '../../data/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {project.image ? (
        <img
          className={styles.image}
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <ImageOff size={28} />
          <span>Cuplikan layar akan ditambahkan</span>
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {project.repoUrl || project.demoUrl ? (
          <div className={styles.links}>
            {project.repoUrl ? (
              <a
                className={styles.link}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} />
                Repo GitHub
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                className={styles.link}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Lihat di sini
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
