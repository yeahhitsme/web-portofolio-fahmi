import { Mail } from 'lucide-react';
import type { ComponentType } from 'react';
import { GithubIcon, LinkedinIcon } from '../icons';
import type { SocialIconName } from '../../data/types';
import { profile } from '../../data/profile';
import styles from './SocialLinks.module.css';

const ICONS: Record<SocialIconName, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={className ? `${styles.list} ${className}` : styles.list}>
      {profile.socials.map((social) => {
        const Icon = ICONS[social.icon];
        const isEmail = social.icon === 'mail';
        return (
          <li key={social.label}>
            <a
              className={styles.link}
              href={social.url}
              aria-label={social.label}
              title={social.label}
              {...(isEmail
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
