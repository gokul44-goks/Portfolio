import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiDownload, HiMail } from 'react-icons/hi'
import { contactInfo } from '../data/portfolio'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${contactInfo.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider" />
          <p className={styles.sectionSubtitle}>
            Open to internships and collaborations — let's build something great together!
          </p>
        </motion.div>

        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.grid}>
            {/* Left - Form */}
            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Send a Message</h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Get in Touch</h3>
              
              <div className={styles.contactItems}>
                <a href={`mailto:${contactInfo.email}`} className={styles.contactItem}>
                  <div className={styles.contactIcon}><FaEnvelope /></div>
                  <span>{contactInfo.email}</span>
                </a>
                <a href={`tel:+91${contactInfo.phone}`} className={styles.contactItem}>
                  <div className={styles.contactIconGreen}><FaPhoneAlt /></div>
                  <span>+91 {contactInfo.phone}</span>
                </a>
                <div className={styles.contactItem}>
                  <div className={styles.contactIconBlue}><FaMapMarkerAlt /></div>
                  <span>Theni, Tamil Nadu, India</span>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <a href={`mailto:${contactInfo.email}`} className={styles.hireBtn}>
                  Hire Me
                </a>
                <a href="/Gokul_Resume.pdf" download className={styles.downloadBtn}>
                  <HiDownload /> Download CV
                </a>
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Connect with me</h4>
                <div className={styles.socialGrid}>
                  <a href={`mailto:${contactInfo.email}`} className={styles.socialIcon} aria-label="Email">
                    <HiMail />
                  </a>
                  <a href={`https://wa.me/91${contactInfo.phone}`} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com/gokuls_perfections" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://leetcode.com/u/gokulganesan44/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
                    <SiLeetcode />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
