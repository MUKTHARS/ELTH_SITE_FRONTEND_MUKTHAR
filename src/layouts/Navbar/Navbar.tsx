'use client'

import { useState }          from 'react'
import Link                   from 'next/link'
import { useScrollProgress }  from '@hooks/useScrollProgress'
import { NAV_ITEMS, NAV_CTA } from '@constants/navigation'
import { Button }             from '@components/ui/button'
import { IconMenu }           from '@icons/index'
import MobileMenu             from '../MobileMenu/MobileMenu'
import styles                 from './Navbar.module.scss'

export default function Navbar() {
  const { scrolled }          = useScrollProgress()
  const [open, setOpen]       = useState(false)
  const [activeMenu, setActive] = useState<string | null>(null)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Elth AI</span>
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map(item => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children && setActive(item.label)}
                onMouseLeave={() => setActive(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && <span className={styles.chevron}>›</span>}
                </Link>

                {item.children && activeMenu === item.label && (
                  <div className={styles.dropdown}>
                    {item.children.map(child => (
                      <Link key={child.label} href={child.href} className={styles.dropdownLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button asChild size="default" className={styles.ctaBtn}>
              <Link href={NAV_CTA.href}>{NAV_CTA.label}</Link>
            </Button>
            <button className={styles.menuBtn} onClick={() => setOpen(true)} aria-label="Open menu">
              <IconMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
