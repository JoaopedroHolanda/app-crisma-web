import React from 'react';
import Link from 'next/link';
import styles from './AppTerms.module.css';

export default function AppTerms() {
  return (
    <p className={styles.terms}>
      Ao clicar em continuar, você concorda com os{' '}
      <Link className={styles.link} href="/terms-of-use" target="_blank">
        Termos de Uso
      </Link>{' '}
      e nossa{' '}
      <Link className={styles.link} href="/privacy-policy" target="_blank">
        Política de Privacidade
      </Link>
    </p>
  );
}

