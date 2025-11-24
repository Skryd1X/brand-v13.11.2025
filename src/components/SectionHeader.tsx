import { theme } from '../theme';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 'clamp(2rem, 5vw, 4rem)',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: '800',
          color: theme.colors.mediumGray,
          opacity: 0.15,
          lineHeight: '1',
          // было clamp(-1rem, -3vw, -2rem) — min/max для отрицательных значений были перепутаны
          marginBottom: 'clamp(-2rem, -3vw, -1rem)',
        }}
      >
        {number}
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
          fontWeight: '800',
          color: theme.colors.white,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textShadow: theme.shadows.glow,
          marginBottom: subtitle ? '1rem' : '0',
          lineHeight: 1.15,
          wordBreak: 'break-word',
          hyphens: 'auto',
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)',
            color: theme.colors.lightGray,
            maxWidth: '40rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
