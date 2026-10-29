import { Mail } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import { profile } from '../../data/profile';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="kontak" className="section" aria-labelledby="kontak-title">
      <div className={`container ${styles.inner}`}>
        <div ref={revealRef} className="reveal">
          <p className={styles.eyebrow}>Kontak</p>
          <h2 id="kontak-title" className={styles.title}>
            Mari Terhubung
          </h2>
          <p className={styles.lead}>
            Terima kasih sudah mampir. Saya terbuka untuk diskusi, kolaborasi,
            maupun informasi peluang kerja di bidang pengembangan perangkat
            lunak. Silakan hubungi saya melalui salah satu kanal di bawah —
            saya akan senang merespons.
          </p>

          <div className={styles.actions}>
            <Button href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Kirim Email
            </Button>
          </div>

          <p className={styles.emailLabel}>atau langsung ke:</p>
          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className={styles.socialsWrap}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
