import { cn } from '@/lib/cn';

/* ===== Button ===== */
const buttonVariants = {
  primary: 'bg-gold-500 text-emerald-950 hover:bg-gold-400 shadow-[0_0_20px_rgba(200,168,80,0.2)] font-semibold border border-gold-400/20 active:scale-[0.98]',
  secondary: 'bg-emerald-950 text-white hover:bg-emerald-900 border border-emerald-800/40 shadow-sm active:scale-[0.98]',
  outline: 'border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-emerald-950 hover:border-gold-500 active:scale-[0.98]',
  'outline-white': 'border border-white/10 text-white hover:bg-white/10 active:scale-[0.98]',
  ghost: 'text-emerald-900 hover:bg-emerald-50 active:scale-[0.98]',
  'ghost-white': 'text-white hover:bg-white/5 active:scale-[0.98]',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-xs font-semibold tracking-wide uppercase',
  md: 'px-6 py-3 text-sm font-semibold tracking-wide uppercase',
  lg: 'px-8 py-4 text-base font-semibold tracking-wide uppercase',
  xl: 'px-10 py-5 text-base font-semibold tracking-wide uppercase',
};

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-accent transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ===== Container ===== */
export function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto w-full px-6 sm:px-8 lg:px-12', sizes[size], className)}>
      {children}
    </div>
  );
}

/* ===== Badge ===== */
export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/30',
    gold: 'badge-premium',
    dark: 'bg-emerald-950 text-gold-400 border border-emerald-900',
    outline: 'border border-gray-200 text-gray-500',
  };

  return (
    <span className={cn('inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider font-accent uppercase', variants[variant], className)}>
      {children}
    </span>
  );
}

/* ===== Section Header ===== */
export function SectionHeader({ badge, title, subtitle, align = 'center', dark = false }) {
  return (
    <div className={cn('mb-12 lg:mb-16', align === 'center' && 'text-center', align === 'left' && 'text-left')}>
      {badge && (
        <Badge variant={dark ? 'dark' : 'gold'} className="mb-4">{badge}</Badge>
      )}
      <h2 className={cn(
        'text-h2 font-display font-extrabold tracking-tight mt-2 mb-4',
        dark ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      <div className={cn('section-divider', align === 'center' && 'mx-auto', 'mb-6')} />
      {subtitle && (
        <p className={cn(
          'text-base lg:text-lg max-w-2xl font-body leading-relaxed',
          align === 'center' && 'mx-auto',
          dark ? 'text-gray-400' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ===== Card ===== */
export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl border border-gray-100/80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)]',
        hover && 'hover-lift',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ===== Input ===== */
export function Input({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 font-accent">{label}</label>}
      <input
        className={cn(
          'w-full px-5 py-3.5 rounded-xl border border-gray-200/80 bg-white text-gray-900 font-body text-sm',
          'focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600',
          'transition-all duration-200 placeholder:text-gray-400 shadow-sm',
          error && 'border-red-400 focus:ring-red-400/20',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ===== Textarea ===== */
export function Textarea({ label, error, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 font-accent">{label}</label>}
      <textarea
        className={cn(
          'w-full px-5 py-3.5 rounded-xl border border-gray-200/80 bg-white text-gray-900 font-body text-sm',
          'focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600',
          'transition-all duration-200 placeholder:text-gray-400 resize-y min-h-[120px] shadow-sm',
          error && 'border-red-400 focus:ring-red-400/20',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ===== Select ===== */
export function Select({ label, options = [], error, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 font-accent">{label}</label>}
      <select
        className={cn(
          'w-full px-5 py-3.5 rounded-xl border border-gray-200/80 bg-white text-gray-900 font-body text-sm',
          'focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600',
          'transition-all duration-200 shadow-sm',
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
