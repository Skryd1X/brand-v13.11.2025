import { useState } from 'react';
import { theme } from '../../theme';
import NeoCard from '../NeoCard';
import { Language, translations } from '../../i18n/translations';

interface IntroSectionProps {
  language: Language;
}

export default function IntroSection({ language }: IntroSectionProps) {
  const t = translations[language].intro;
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      {/* Явная анимация "дыхания" для свечения под логотипом */}
      <style>
        {`
          @keyframes logoPulseGlow {
            0% {
              opacity: 1;
              transform: scale(1);
              filter: blur(14px);
            }
            50% {
              opacity: 0.2;         /* сильно гасим */
              transform: scale(1.18);/* заметно раздувается */
              filter: blur(26px);   /* и сильнее размазывается */
            }
            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(14px);
            }
          }
        `}
      </style>

      <section
        id="intro"
        className="section-padding"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Левый блок — текст */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: theme.colors.accentPrimary,
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  marginBottom: 'clamp(1rem, 3vw, 2rem)',
                }}
              >
                {t.brandbook}
              </div>
              <div
                style={{
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: '900',
                  background: theme.gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1.1',
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  color: theme.colors.mediumGray,
                  fontWeight: '600',
                  marginBottom: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                {t.version}
              </div>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  color: theme.colors.lightGray,
                  lineHeight: '1.7',
                }}
              >
                {t.description}
              </p>
            </div>

            {/* Правый блок — логотип + «дышащая» подсветка */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: 'clamp(280px, 50vw, 420px)',
                  aspectRatio: '1 / 1',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'default',
                }}
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
              >
                {/* Свечение под логотипом */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-16%',
                    borderRadius: '40px',
                    background:
                      'radial-gradient(circle at center, rgba(22, 160, 133, 1) 0%, rgba(22, 160, 133, 0.45) 35%, transparent 70%)',
                    pointerEvents: 'none',
                    // без transform/transition здесь — ими управляет анимация
                    animation: logoHovered
                      ? 'logoPulseGlow 2s ease-in-out infinite'
                      : 'none',
                    opacity: logoHovered ? 1 : 0.75,
                    filter: 'blur(14px)',
                    transition: logoHovered
                      ? 'none'
                      : 'opacity 0.3s ease, filter 0.3s ease',
                  }}
                />

                {/* Сам логотип без рамки */}
                <img
                  src="/src/assets/{B620A630-29AF-4A07-A8E3-8238DCB61CD6}.png"
                  alt="Rezzy Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '36px',
                    transform: logoHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    filter: logoHovered
                      ? 'drop-shadow(0 0 80px rgba(22, 160, 133, 1))'
                      : 'drop-shadow(0 0 45px rgba(22, 160, 133, 0.7))',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '4rem',
            fontSize: '1rem',
            color: theme.colors.mediumGray,
            fontWeight: '600',
            letterSpacing: '0.1em',
          }}
        >
          00 / {translations[language].intro.brandbook}
        </div>
      </section>

      {/* TOC — без изменений по смыслу */}
      <section
        className="section-padding"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '800',
              color: theme.colors.baseBlueGreen,
              opacity: 0.3,
              lineHeight: '1',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            TOC
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '800',
              color: theme.colors.white,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {t.tocTitle}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            {t.tocItems.map((item, index) => (
              <NeoCard key={index} hover>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background: theme.gradients.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                        fontWeight: '800',
                        color: theme.colors.white,
                      }}
                    >
                      {item.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                        color: theme.colors.white,
                        lineHeight: '1.6',
                        fontWeight: '600',
                      }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '4rem',
            fontSize: '1rem',
            color: theme.colors.mediumGray,
            fontWeight: '600',
            letterSpacing: '0.1em',
          }}
        >
          00 / {t.tocTitle.toUpperCase()}
        </div>
      </section>
    </>
  );
}
