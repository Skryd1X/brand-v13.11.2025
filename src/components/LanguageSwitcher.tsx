import { useState, useEffect, useRef } from 'react';
import { theme } from '../theme';
import { Language, languageNames, languageFlags } from '../i18n/translations';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export default function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Закрытие по клику вне
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const languages: Language[] = ['ru', 'en', 'uz'];

  return (
    <div
      ref={containerRef}
      className="no-print"
      style={{
        position: 'fixed',
        top: 'clamp(1rem, 3vw, 2rem)',
        right: 'clamp(1rem, 3vw, 2rem)',
        zIndex: 110, // чуть выше навигации
      }}
    >
      <div
        style={{
          background: theme.colors.baseNavy,
          borderRadius: theme.borderRadius.md,
          boxShadow: theme.shadows.neo,
          border: `1px solid rgba(22, 160, 133, 0.2)`,
          overflow: 'hidden',
          minWidth: isMobile ? 'auto' : '160px',
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            width: '100%',
            padding:
              'clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 1.5rem)',
            background: theme.gradients.accent,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 20px rgba(22, 160, 133, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
          }}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Globe size={18} color={theme.colors.white} />
            {!isMobile && (
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                {languageNames[currentLanguage]}
              </span>
            )}
            {isMobile && (
              <span style={{ fontSize: '1.25rem' }}>
                {languageFlags[currentLanguage]}
              </span>
            )}
          </div>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            style={{
              background: theme.colors.baseBlueGreen,
              borderTop: `1px solid rgba(22, 160, 133, 0.2)`,
            }}
          >
            {languages
              .filter((lang) => lang !== currentLanguage)
              .map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding:
                      'clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 1.5rem)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: '600',
                    color: theme.colors.white,
                    borderTop: `1px solid rgba(22, 160, 133, 0.1)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      theme.colors.baseNavy;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {isMobile ? (
                    <span style={{ fontSize: '1.25rem' }}>
                      {languageFlags[lang]}
                    </span>
                  ) : (
                    languageNames[lang]
                  )}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
