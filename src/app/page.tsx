import Link from "next/link";
import styles from "./page.module.css";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navWrapper}>
          <Link href="/" className={styles.logo}>
            jagoslw
          </Link>
          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.navLink}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className={styles.main}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heading}>
              Welcome to My <span className={styles.headingGradient}>Portfolio</span>
            </h1>
            <p className={styles.subtitle}>
              Crafting beautiful digital experiences and solving problems through code.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className={styles.cardsGrid}>
            <Link
              href="https://github.com/jagoslw"
              className={`${styles.card} ${styles.cardAbout}`}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>GitHub</h3>
                <p className={styles.cardDescription}>View my code and contributions</p>
              </div>
            </Link>
            <Link
              href="/about"
              className={`${styles.card} ${styles.cardAbout}`}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>About Me</h3>
                <p className={styles.cardDescription}>Learn more about my background and expertise</p>
              </div>
            </Link>

            <Link
              href="/projects"
              className={`${styles.card} ${styles.cardProjects}`}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Projects</h3>
                <p className={styles.cardDescription}>Explore my latest work</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Page made by @jagoslw  ||  font = JetBrains Mono</p>
        </div>
      </footer>
    </div>
  );
}
