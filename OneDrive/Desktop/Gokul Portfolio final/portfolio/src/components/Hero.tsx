import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRobot, FaBrain, FaDatabase, FaChartLine, FaLaptopCode } from 'react-icons/fa'
import { HiDownload, HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { contactInfo } from '../data/portfolio'
import styles from './Hero.module.css'

const roles = [
  'Machine Learning Engineer',
  'Data Scientist',
  'Full-Stack Developer',
  'Python & Java Developer',
  'AI Enthusiast'
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 1500

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])
  return (
    <section className={styles.hero} id="hero">
      <motion.p
        className={styles.quote}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        "The only way to do great work is to love what you do." – Steve Jobs
      </motion.p>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.greeting}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span>Hello, I'm</span>
          </motion.div>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Gokul G
          </motion.h1>

          <motion.div
            className={styles.typewriterWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className={styles.typewriterText}>{displayText}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.div
            className={styles.roleIcons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <FaRobot className={styles.roleIcon} />
            <FaBrain className={styles.roleIcon} />
            <FaDatabase className={styles.roleIcon} />
            <FaChartLine className={styles.roleIcon} />
            <FaLaptopCode className={styles.roleIcon} />
          </motion.div>

          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className={styles.heroTagline}>
              I design and deliver scalable digital products that turn bold ideas into meaningful impact.
            </h2>
          </motion.div>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className={styles.btnPrimary}>
                View Projects
                <HiArrowDown />
              </button>
            </Link>
            <a href="/Gokul_Resume.pdf" download className={styles.btnOutline}>
              <HiDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.photoGlow} />
          <div className={styles.photoFrame}>
            <img
              src="/profile.jpg"
              alt="Gokul Ganesan"
              className={styles.photo}
            />
          </div>
          <div className={styles.photoLabel}>
            <span className={styles.statusDot} />
            <span>Available for opportunities</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link to="about" smooth duration={500} offset={-80}>
          <HiArrowDown className={styles.scrollArrow} />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
