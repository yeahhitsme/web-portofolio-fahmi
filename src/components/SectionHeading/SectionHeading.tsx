import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  /** Nomor urut section, mis. '01'. */
  index: string;
  eyebrow: string;
  title: string;
  /** id untuk <h2>, dipakai aria-labelledby pada <section>. */
  id?: string;
  lead?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  id,
  lead,
}: SectionHeadingProps) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <span className={styles.rule} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  );
}
