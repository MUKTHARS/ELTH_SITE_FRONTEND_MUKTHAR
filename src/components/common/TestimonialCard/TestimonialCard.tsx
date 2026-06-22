import type { Testimonial } from '@/types'
import styles from './TestimonialCard.module.scss'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar} style={{ background: testimonial.bgColor, color: testimonial.textColor }}>
          {testimonial.initials}
        </div>
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role} · {testimonial.hospital}</div>
          <div className={styles.location}>{testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}
