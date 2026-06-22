'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import { Badge } from '@components/ui/badge'
import { PRICING_PLANS } from '@constants/pricing'
import { ROUTES } from '@constants/routes'
import styles from './PricingCards.module.scss'

export default function PricingCards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.badge && (
                <div className={styles.badgeWrap}>
                  <Badge variant="teal">{plan.badge}</Badge>
                </div>
              )}

              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>
                {plan.price === 'Custom' ? (
                  <span className={styles.custom}>Custom</span>
                ) : (
                  <>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.amount}>{plan.price.replace('₹', '').replace(/,/g, ',')}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </>
                )}
              </div>
              <p className={styles.planDesc}>{plan.description}</p>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureCheck}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? 'default' : 'outline'}
                size="lg"
                className={styles.cta}
              >
                <Link href={ROUTES.CONTACT}>
                  {plan.price === 'Custom' ? 'Talk to Sales' : 'Start free trial'}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className={styles.faq}>
          <h3 className={styles.faqTitle}>Common questions</h3>
          <div className={styles.faqGrid}>
            {[
              { q: 'Is the 14-day trial really free?', a: 'Yes. No credit card required. Full access to all features in your chosen plan.' },
              { q: 'Can I switch plans later?', a: 'Upgrade or downgrade any time. Billing adjusts pro-rata from the next cycle.' },
              { q: 'What happens after trial?', a: 'You\'ll be notified before the trial ends. We never charge without explicit consent.' },
              { q: 'Do you offer annual discounts?', a: 'Yes — 2 months free on annual plans. Contact us for a custom quote.' },
            ].map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <h4 className={styles.faqQ}>{faq.q}</h4>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
