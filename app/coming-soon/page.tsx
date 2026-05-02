'use client';

import AppLogo from '@/components/ui/AppLogo';
import styles from './page.module.css';
import AppTextDescription from '@/components/ui/texts/AppTextDescription';

export default function ComingSoonPage() {
  return (
    <main className={styles.pageContainer}>
      <AppLogo width={176} height={70} className={styles.spinningLogo} />
      <AppTextDescription>
        Mais informações em breve!
      </AppTextDescription>
    </main>
  );
}
