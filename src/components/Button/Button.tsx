import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  /** Bila diisi, komponen merender <a>; bila kosong, <button>. */
  href?: string;
  variant?: 'primary' | 'secondary';
  /** Terbuka di tab baru (hanya untuk <a> keluar aplikasi). */
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
