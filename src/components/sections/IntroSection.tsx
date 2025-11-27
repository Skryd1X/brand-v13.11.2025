import { useState } from 'react';
import { theme } from '../../theme';
import NeoCard from '../NeoCard';
import { Language, translations } from '../../i18n/translations';

interface IntroSectionProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

// Куда ведут пункты содержания
const tocTargets: Record<number, string> = {
  0: 'ideology',      // 1. Основы бренда / Идеология
  1: 'audience',      // 2. Целевая аудитория
  2: 'tone',          // 3. Tone of Voice
  3: 'visual',        // 4. Визуальная айдентика
  4: 'applications',  // 5. Применение стиля
  5: 'ui',            // 6. Digital-гайдлайн / UI-система Rezzy
};

export default function IntroSection({ language, onNavigate }: IntroSectionProps) {
  const t = translations[language].intro;
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      {/* анимация "дыхания" свечения под логотипом */}
      <style>
        {`
          @keyframes logoPulseGlow {
            0% {
              opacity: 1;
              transform: scale(1);
              filter: blur(14px);
            }
            50% {
              opacity: 0.2;
              transform: scale(1.18);
              filter: blur(26px);
            }
            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(14px);
            }
          }
        `}
      </style>

      {/* HERO */}
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
            {/* левый текстовый блок */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: theme.colors.accentPrimary,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  marginBottom: 'clamp(1rem, 3vw, 2rem)',
                }}
              >
                {t.brandbook}
              </div>
              <div
                style={{
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 900,
                  background: theme.gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  color: theme.colors.mediumGray,
                  fontWeight: 600,
                  marginBottom: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                {t.version}
              </div>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  color: theme.colors.lightGray,
                  lineHeight: 1.7,
                }}
              >
                {t.description}
              </p>
            </div>

            {/* правый блок — иконка приложения с "дышащим" свечением */}
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
                {/* свечение */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-16%',
                    borderRadius: 40,
                    background:
                      'radial-gradient(circle at center, rgba(10, 186, 181, 1) 0%, rgba(10, 186, 181, 0.45) 35%, transparent 70%)',
                    pointerEvents: 'none',
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
                {/* КАРТИНКА ИЗ public */}
                <img
                  src="/rezzy-logo-main.png"
                  alt="Rezzy Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 36,
                    transform: logoHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    filter: logoHovered
                      ? 'drop-shadow(0 0 80px rgba(10, 186, 181, 1))'
                      : 'drop-shadow(0 0 45px rgba(10, 186, 181, 0.7))',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* подпись 00 / BRAND BOOK */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '4rem',
            fontSize: '1rem',
            color: theme.colors.mediumGray,
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          00 / {translations[language].intro.brandbook}
        </div>
      </section>

      {/* СОДЕРЖАНИЕ */}
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
              fontWeight: 800,
              color: theme.colors.baseBlueGreen,
              opacity: 0.3,
              lineHeight: 1,
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            TOC
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 800,
              color: theme.colors.white,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
            }}
          >
            {t.tocTitle}
          </h2>

          {/* тонкая тиффани-линия под заголовком */}
          <div
            style={{
              width: '80px',
              height: '3px',
              borderRadius: 999,
              background: theme.gradients.accent,
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            {t.tocItems.map((item, index) => {
              const targetId = tocTargets[index];
              const isClickable = Boolean(targetId);

              return (
                <NeoCard
                  key={item}
                  hover={isClickable}
                  style={{
                    cursor: isClickable ? 'pointer' : 'default',
                    padding: '1.3rem 1.5rem',
                    borderRadius: theme.borderRadius.sm,
                    border: '1px solid rgba(0,255,200,0.18)',
                    background:
                      'linear-gradient(135deg, rgba(4, 30, 45, 0.98) 0%, rgba(5, 40, 58, 0.98) 45%, rgba(4, 30, 45, 0.98) 100%)',
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition:
                      'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease',
                  }}
                  onClick={() => {
                    if (targetId) onNavigate(targetId);
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow =
                      '0 16px 28px rgba(0,0,0,0.55)';
                    el.style.borderColor = 'rgba(0,255,200,0.7)';
                    el.style.background =
                      'linear-gradient(135deg, rgba(4, 36, 56, 1) 0%, rgba(7, 54, 74, 1) 45%, rgba(4, 36, 56, 1) 100%)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                    el.style.borderColor = 'rgba(0,255,200,0.18)';
                    el.style.background =
                      'linear-gradient(135deg, rgba(4, 30, 45, 0.98) 0%, rgba(5, 40, 58, 0.98) 45%, rgba(4, 30, 45, 0.98) 100%)';
                  }}
                >
                  {/* ЛЁГКИЙ, НО БОЛЕЕ СЛАБЫЙ ВНУТРЕННИЙ GLOW */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: theme.borderRadius.sm,
                      border: '1px solid rgba(0,255,200,0.05)',
                      pointerEvents: 'none',
                      boxShadow:
                        '0 0 26px rgba(0,255,200,0.06) inset',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      position: 'relative',
                      zIndex: 1,
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
                        // ЧУТЬ МЕНЬШЕ СВЕТА ВОКРУГ ЦИФРЫ
                        boxShadow:
                          '0 0 12px rgba(0,255,200,0.38)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                          fontWeight: 800,
                          color: theme.colors.white,
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                          color: theme.colors.white,
                          lineHeight: 1.6,
                          fontWeight: 600,
                          marginBottom: '0.15rem',
                        }}
                      >
                        {item}
                      </p>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: theme.colors.mediumGray,
                        }}
                      >
                        Rezzy brand guide
                      </span>
                    </div>
                  </div>
                </NeoCard>
              );
            })}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '4rem',
            fontSize: '1rem',
            color: theme.colors.mediumGray,
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          00 / {t.tocTitle.toUpperCase()}
        </div>
      </section>
    </>
  );
}
