import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import styles from './Education.module.css'

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.card}>
                <div className={styles.iconWrap}><edu.icon /></div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <div className={styles.meta}>
                  <span className={styles.period}>{edu.period}</span>
                  {edu.grade && (
                    <span className={styles.grade}>{edu.grade}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
