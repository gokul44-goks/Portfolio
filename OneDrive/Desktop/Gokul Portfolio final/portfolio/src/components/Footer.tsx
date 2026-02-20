import { FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span
            className={styles.logo}
            style={{
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '-1px',
              textShadow: '0 2px 16px rgba(127,90,240,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>Gokul</span>
            <span
              style={{
                color: '#7f5af0',
                fontSize: '1.5rem',
                margin: '0 4px',
                fontWeight: 700,
                lineHeight: 1,
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >•</span>
            <span
              style={{
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontWeight: 900,
                letterSpacing: '-1px',
              }}
            >Ganesan</span>
          </span>
        </div>
        <p className={styles.copy}>
          Made with <FaHeart className={styles.heart} /> by Gokul Ganesan &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
