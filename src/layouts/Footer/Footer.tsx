import Link                from 'next/link'
import { FOOTER_GROUPS }  from '@constants/navigation'
import { siteConfig }     from '@config/site'
import styles             from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Elth AI</span>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.built}>Built on <a href="https://saple.ai" className={styles.link}>Saple.ai</a></p>
          <div className={styles.badges}>
            {['HIPAA', 'DPDPA', 'FHIR R4', 'ISO 27001'].map(b => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>

        <div className={styles.groups}>
          {FOOTER_GROUPS.map(group => (
            <div key={group.title} className={styles.group}>
              <h4 className={styles.groupTitle}>{group.title}</h4>
              <ul className={styles.groupLinks}>
                {group.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.groupLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} Elth AI. All rights reserved.</p>
        <p className={styles.copy}>Making healthcare intelligent, accessible, and human.</p>
      </div>
    </footer>
  )
}
