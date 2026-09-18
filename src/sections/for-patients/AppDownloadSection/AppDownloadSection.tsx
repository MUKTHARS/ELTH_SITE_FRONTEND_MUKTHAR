import Image from 'next/image'
import styles from './AppDownloadSection.module.scss'

export default function AppDownloadSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>MyElth App</span>
          <h2 className={styles.heading}>Get MyElth on your phone</h2>
          <p className={styles.sub}>
            Records, appointments, and consent-sharing — carry your health with you, wherever you go.
          </p>
        </div>

        <div className={styles.badges}>
          <a
            href="https://play.google.com/store/apps/details?id=com.myelth.elthmobile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badgeLink}
            aria-label="Get MyElth on Google Play"
          >
            <span className={styles.badgeIcon}>
              <Image src="/images/logos/playstore.png" alt="" width={36} height={36} />
            </span>
            <span className={styles.badgeText}>
              <span className={styles.badgeTextSmall}>GET IT ON</span>
              <span className={styles.badgeTextLarge}>Google Play</span>
            </span>
          </a>

          <span className={styles.badgeStatic} aria-label="Download on the App Store">
            <span className={styles.badgeIcon}>
              <Image src="/images/logos/apple.png" alt="" width={31} height={36} />
            </span>
            <span className={styles.badgeText}>
              <span className={styles.badgeTextSmall}>Download on the</span>
              <span className={styles.badgeTextLarge}>App Store</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
