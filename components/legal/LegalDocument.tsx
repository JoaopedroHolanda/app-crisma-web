import styles from './LegalDocument.module.css';

interface LegalSection {
  title: string;
  paragraphs: string[];
}

interface LegalDocumentProps {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}

export default function LegalDocument({ title, updatedAt, sections }: LegalDocumentProps) {
  return (
    <main className={styles.pageContainer}>
      <article className={styles.content}>
        <header className={styles.header}>
          <img src="/images/logo_crisma.png" alt="" className={styles.logo} />
          <p className={styles.brand}>crisma.app</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updatedAt}>Última atualização: {updatedAt}</p>
        </header>

        <div className={styles.sections}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
