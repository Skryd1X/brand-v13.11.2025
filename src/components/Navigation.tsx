import { useEffect, useState } from 'react';
import {
  Home,
  Target,
  Users,
  MessageCircle,
  Palette,
  Image,
  FileText,
} from 'lucide-react';
import { theme } from '../theme';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: 'intro', label: 'Обзор бренда', icon: Home },
  { id: 'ideology', label: 'Идеология', icon: Target },
  { id: 'audience', label: 'Целевая аудитория', icon: Users },
  { id: 'tone', label: 'Tone of Voice', icon: MessageCircle },
  { id: 'visual', label: 'Визуальная айдентика', icon: Palette },
  { id: 'applications', label: 'Применение стиля', icon: Image },
  { id: 'ui', label: 'UI-система Rezzy', icon: FileText },
];

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = isMobile
    ? {
        position: 'fixed' as const,
        left: '50%',
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.5rem)',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: theme.colors.baseNavy,
        borderRadius: 9999,
        padding: '0.75rem',
        boxShadow: theme.shadows.neo,
        maxWidth: '100%',
      }
    : {
        position: 'fixed' as const,
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        background: theme.colors.baseNavy,
        borderRadius: theme.borderRadius.md,
        padding: '1.5rem 1rem',
        boxShadow: theme.shadows.neo,
      };

  return (
    <nav className="brandbook-nav" style={navStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: isMobile ? '0.75rem' : '1rem',
          alignItems: 'center',
        }}
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigate(section.id)}
              style={{
                width: isMobile ? '40px' : '48px',
                height: isMobile ? '40px' : '48px',
                borderRadius: 9999,
                border: 'none',
                background: isActive ? theme.gradients.accent : 'transparent',
                color: isActive ? theme.colors.white : theme.colors.mediumGray,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition:
                  'background 0.25s ease, color 0.25s ease, transform 0.25s ease',
                flexShrink: 0,
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
              // убираем фокус-подсветку после клика
              onFocus={(e) => e.currentTarget.blur()}
              title={section.label}
              aria-label={section.label}
            >
              <Icon size={isMobile ? 20 : 24} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
