import { NAV_LINKS } from '../../data/navigation';
import { profile } from '../../data/profile';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <p className={styles.logo}>{profile.logoText}</p>
            <p className={styles.tagline}>
              Dibangun dengan React, TypeScript, dan Vite.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {profile.name}
          </p>
          <a className={styles.backToTop} href="#beranda">
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
