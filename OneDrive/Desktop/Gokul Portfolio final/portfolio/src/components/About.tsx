import { motion } from 'framer-motion'
import { FaRobot, FaCogs, FaLaptopCode, FaChartBar } from 'react-icons/fa'
import styles from './About.module.css'

const highlights = [
  { icon: FaRobot, text: 'AI Powered Applications' },
  { icon: FaCogs, text: 'Machine Learning Engineering' },
  { icon: FaLaptopCode, text: 'Full Stack Development' },
  { icon: FaChartBar, text: 'Data Scientist & Analyst' },
]

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.aboutGrid}>
          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.intro}>
              I'm Gokul, and I'm someone who enjoys using technology to solve real problems. I'm currently pursuing my B.Tech in Artificial Intelligence and Data Science, and what motivates me most is turning ideas and data into digital products that people can actually use. I like working on things that are practical, simple, and meaningful rather than just theoretical.
            </p>
            <p className={styles.description}>
              Most of my work lies where data, machine learning, and application development come together. I enjoy taking complicated information and breaking it down into clear, usable solutions. That could mean building intelligent features, developing full-stack applications, or designing systems that work end to end. I pay a lot of attention to clean code, simple design, and scalability because I believe software should be easy to understand and easy to improve over time.
            </p>
            <p className={styles.description}>
              When I start a project, I focus on understanding the problem first. I like knowing why something needs to be built before deciding how to build it. I try different approaches, learn from mistakes, and keep improving until the solution feels right. I learn best by doing, and every project teaches me something new.
            </p>
            <p className={styles.description}>
              Outside of coding, I enjoy exploring new ideas, learning new tools, and pushing myself to try things I'm not fully comfortable with yet. I'm open to collaboration and meaningful conversations, and I'm currently looking for opportunities—internships, projects, or entry-level roles—where I can learn from others and contribute to building technology that is useful, reliable, and built to last.
            </p>
          </motion.div>

          <motion.div
            className={styles.highlightsSection}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.highlightsTitle}>Interested Areas</h3>
            <div className={styles.highlightsGrid}>
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  className={styles.highlightCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className={styles.highlightIcon} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
