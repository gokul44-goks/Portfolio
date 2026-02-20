import { motion } from 'framer-motion'
import { FaDownload, FaEye } from 'react-icons/fa'
import { certificates } from '../data/portfolio'
import styles from './Certificates.module.css'

const Certificates = () => {
  return (
    <section className="section" id="certificates">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Certificates & Internships</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className={styles.iconWrap}><cert.icon /></div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{cert.title}</h3>
                <span className={styles.period}>{cert.period}</span>
                {cert.pdfUrl && (
                  <div className={styles.actions}>
                    <a 
                      href={cert.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.viewBtn}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaEye /> View
                    </a>
                    <a 
                      href={cert.pdfUrl} 
                      download={cert.title + '.pdf'}
                      className={styles.actionBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
