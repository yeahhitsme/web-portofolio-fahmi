import { ArrowDown } from 'lucide-react';
import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import { profile } from '../../data/profile';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="beranda" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>Halo, saya</p>
          <h1 id="hero-title" className={styles.title}>
            {profile.name}
          </h1>
          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.actions}>
            <Button href="#proyek">
              Lihat Project
              <ArrowDown size={18} aria-hidden="true" />
            </Button>
            <Button href="#kontak" variant="secondary">
              Hubungi Saya
            </Button>
          </div>

          <SocialLinks className={styles.socials} />
        </div>

        <div className={styles.visual}>
          {profile.photo ? (
            <img
              className={styles.photo}
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              width={600}
              height={600}
              decoding="async"
            />
          ) : (
            <span className={styles.monogram} aria-hidden="true">
              {profile.initials}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
