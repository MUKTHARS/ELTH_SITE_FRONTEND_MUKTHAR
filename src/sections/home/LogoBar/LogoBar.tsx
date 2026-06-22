import styles from './LogoBar.module.scss'

const LOGOS = ['Apollo Hospitals', 'Medanta', 'Varsha Health Care', 'Sri Kumaran Clinic', 'Balaji Medical Centre', 'LifeCare Hospital', 'Healthplix', 'Practo']

export default function LogoBar() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Trusted by leading clinics and hospitals across India</p>
      <div className={styles.track}>
        <div className={styles.marquee}>
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div key={i} className={styles.logo}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
