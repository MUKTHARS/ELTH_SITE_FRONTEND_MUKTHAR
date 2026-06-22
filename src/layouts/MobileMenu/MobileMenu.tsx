'use client'

import Link                   from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, NAV_CTA } from '@constants/navigation'
import { Button }             from '@components/ui/button'
import { IconX }              from '@icons/index'
import styles                 from './MobileMenu.module.scss'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.logo}>Elth AI</span>
              <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
                <IconX size={20} />
              </button>
            </div>

            <nav className={styles.nav}>
              {NAV_ITEMS.map(item => (
                <div key={item.label}>
                  <Link href={item.href} className={styles.navLink} onClick={onClose}>
                    {item.label}
                  </Link>
                  {item.children?.map(child => (
                    <Link key={child.label} href={child.href} className={styles.subLink} onClick={onClose}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            <div className={styles.cta}>
              <Button asChild size="lg" className="w-full">
                <Link href={NAV_CTA.href} onClick={onClose}>{NAV_CTA.label}</Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
