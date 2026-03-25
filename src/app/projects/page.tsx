import Link from "next/link";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore my latest work and case studies",
};

const projects = [
  {
    title: "CityU: EE3070 Desgin Project - Smart Greenhouse Web App",
    year: "2026 Feb - Apr",
    description: "A modern web application for managing and monitoring smart greenhouses, featuring real-time data visualization and automated control systems.",
    tags: ["React", "Firebase", "ESP32", "IoT", "CityU"],
    link: "ee3070-smart-greenhouse-webapp",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Back Button */}
      <Link
        href="/"
        className={styles.backButton}
      >
        ← Back Home
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.subtitle}>A selection of my recent work</p>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <h4 className={styles.projectSubtitle}>{project.year}</h4>
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className={styles.projectLink}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
