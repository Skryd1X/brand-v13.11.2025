import { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { theme } from '../theme';

interface NeoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gradient?: string;
  style?: CSSProperties;
  hover?: boolean;
}

export default function NeoCard({
  children,
  gradient,
  style,
  hover = false,
  ...rest
}: NeoCardProps) {
  return (
    <div
      {...rest}
      style={{
        position: 'relative',
        borderRadius: theme.borderRadius.md,
        background:
          gradient ||
          'linear-gradient(135deg, rgba(13, 32, 63, 0.98), rgba(8, 20, 45, 0.98))',
        boxShadow: theme.shadows.neo,
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        overflow: 'hidden',
        transition:
          'transform 0.25s ease, box-shadow 0.25s ease, background 0.35s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = theme.shadows.glowStrong;
        }
        if (rest.onMouseEnter) {
          rest.onMouseEnter(e);
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.neo;
        }
        if (rest.onMouseLeave) {
          rest.onMouseLeave(e);
        }
      }}
    >
      {children}
    </div>
  );
}
