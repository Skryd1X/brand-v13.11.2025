import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { MessageSquare, Smile, Zap, Shield } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';

interface ToneSectionProps {
  language: Language;
}

export default function ToneSection({ language }: ToneSectionProps) {
  const t = translations[language].tone;

  return (
    <section
      id="tone"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <SectionHeader number="03" title={t.title} subtitle={t.subtitle} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {t.principles.map((principle, index) => {
            const icons = [MessageSquare, Smile, Zap, Shield];
            const gradients = [
              theme.gradients.accent,
              theme.gradients.vibrant,
              theme.gradients.warm,
              theme.gradients.purple,
            ];
            const Icon = icons[index] || MessageSquare;
            const background = gradients[index] || theme.gradients.accent;

            return (
              <NeoCard key={principle.title} hover>
                <div
                  style={{
                    width: 'clamp(48px, 10vw, 56px)',
                    height: 'clamp(48px, 10vw, 56px)',
                    borderRadius: theme.borderRadius.sm,
                    background,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(0.875rem, 2.5vw, 1rem)',
                  }}
                >
                  <Icon
                    size={28}
                    color={theme.colors.white}
                    style={{
                      width: 'clamp(24px, 6vw, 28px)',
                      height: 'clamp(24px, 6vw, 28px)',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '0.75rem',
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                  }}
                >
                  {principle.description}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <NeoCard>
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            {t.examples.title}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.md,
                padding: 'clamp(1.25rem, 3vw, 1.5rem)',
              }}
            >
              <h4
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                {t.examples.do.title}
              </h4>
              {t.examples.do.items.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: theme.colors.white,
                    marginBottom: '0.75rem',
                    lineHeight: '1.6',
                  }}
                >
                  {item}
                </p>
              ))}
            </div>

            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.md,
                padding: 'clamp(1.25rem, 3vw, 1.5rem)',
              }}
            >
              <h4
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: theme.colors.mediumGray,
                  marginBottom: '1rem',
                }}
              >
                {t.examples.dont.title}
              </h4>
              {t.examples.dont.items.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: theme.colors.mediumGray,
                    marginBottom: '0.75rem',
                    lineHeight: '1.6',
                    textDecoration: 'line-through',
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </NeoCard>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 5vh, 3rem)',
          right: 'clamp(2rem, 5vw, 4rem)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        03 / {t.label}
      </div>
    </section>
  );
}
