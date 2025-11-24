import { ReactNode, CSSProperties } from 'react';
import { theme } from '../theme';

interface NeoCardProps {
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
}: NeoCardProps) {
  return (
    <div
      style={{
        background: gradient || theme.colors.baseNavy,
        borderRadius: theme.borderRadius.md,
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        boxShadow: theme.shadows.neo,
        transition: 'all 0.3s ease',
        position: 'relative',
        willChange: hover ? 'transform, box-shadow' : undefined,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = theme.shadows.glowStrong;
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = theme.shadows.neo;
        }
      }}
    >
      {children}
    </div>
  );
}
