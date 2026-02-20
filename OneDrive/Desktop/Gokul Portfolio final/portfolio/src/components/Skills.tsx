import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

// Skill organization by categories
const skillCategories = [
  { title: 'Core Expertise', items: ['Machine Learning', 'Deep Learning', 'Data Analytics', 'Full Stack Development'] },
  { title: 'Languages', items: ['C', 'Python', 'Java', 'JavaScript', 'SQL'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'React.js'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Flask'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'AI/ML Libraries', items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Postman'] },
  { title: 'Cloud & CRM', items: ['Salesforce', 'AWS'] },
]

const getSkillByName = (name: string) => skills.find(s => s.name === name)

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.items.map((item, itemIndex) => {
                  const skill = getSkillByName(item)
                  return (
                    <motion.span
                      key={item}
                      className={styles.skillChip}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + itemIndex * 0.03, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: '0 5px 20px rgba(108, 99, 255, 0.3)'
                      }}
                    >
                      {skill && (
                        <motion.span
                          className={styles.chipIcon}
                          style={{ 
                            backgroundColor: skill.color,
                            color: '#fff'
                          }}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <skill.icon />
                        </motion.span>
                      )}
                      {item}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
