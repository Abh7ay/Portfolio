import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  image,
  className = '',
  style,
  badge,
}) {
  return (
    <motion.div
      style={style}
      className={[
        'absolute left-1/2 w-[420px] h-[520px] -translate-x-1/2 select-none',
        'rounded-[20px] shadow-2xl overflow-hidden',
        'border border-black/5 dark:border-white/10',
        'bg-[var(--card-bg)]',
        'will-change-transform',
        'backface-hidden',
        'group',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2.5">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
            draggable="false"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute left-0 right-0 bottom-0 p-6">
          {badge ? (
            <div className="mb-3 inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {badge}
            </div>
          ) : null}
          <div className="text-white">
            <div className="text-2xl tracking-tight">{title}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
