import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div
                className={styles.cardHeader}
                style={{ background: project.gradient }}
              >
                <project.icon className={styles.cardIcon} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tools}>
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
