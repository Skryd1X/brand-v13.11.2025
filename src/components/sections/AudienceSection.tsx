import { Language, translations } from '../../i18n/translations';
import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import {
  Briefcase,
  Sparkles,
  Coffee,
  Heart,
  Target,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

interface AudienceSectionProps {
  language: Language;
}

export default function AudienceSection({ language }: AudienceSectionProps) {
  const t = translations[language].audience;

  return (
    <section
      id="audience"
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
        <SectionHeader number="02" title={t.title} subtitle={t.subtitle} />

        {/* Сегменты аудитории */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {t.segments.map((segment, index) => {
            const icons = [Briefcase, Sparkles, Coffee, Heart];
            const gradients = [
              theme.gradients.accent,
              theme.gradients.vibrant,
              theme.gradients.warm,
              theme.gradients.purple,
            ];

            const Icon = icons[index] || Briefcase;
            const background = gradients[index] || theme.gradients.accent;

            return (
              <NeoCard key={segment.title} hover>
                <div
                  style={{
                    width: 'clamp(48px, 10vw, 56px)',
                    height: 'clamp(48px, 10vw, 56px)',
                    borderRadius: theme.borderRadius.sm,
                    background,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={28} color={theme.colors.white} />
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '0.5rem',
                  }}
                >
                  {segment.title}
                </h3>

                <div
                  style={{
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color: theme.colors.accentPrimary,
                    fontWeight: '600',
                    marginBottom: '1rem',
                  }}
                >
                  {segment.age}
                </div>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                  }}
                >
                  {segment.description}
                </p>
              </NeoCard>
            );
          })}
        </div>

        {/* Характеристики / потребности / поведение */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          <NeoCard>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <Target size={24} color={theme.colors.accentPrimary} />
              <h4
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                {t.characteristics.title}
              </h4>
            </div>
            <ul
              style={{
                paddingLeft: '1.5rem',
                margin: 0,
              }}
            >
              {t.characteristics.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    marginBottom: '0.5rem',
                    lineHeight: '1.6',
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <AlertCircle size={24} color={theme.colors.accentPrimary} />
              <h4
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                {t.needs.title}
              </h4>
            </div>
            <ul
              style={{
                paddingLeft: '1.5rem',
                margin: 0,
              }}
            >
              {t.needs.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    marginBottom: '0.5rem',
                    lineHeight: '1.6',
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <MessageCircle
                size={24}
                color={theme.colors.accentPrimary}
              />
              <h4
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                {t.behavior.title}
              </h4>
            </div>
            <ul
              style={{
                paddingLeft: '1.5rem',
                margin: 0,
              }}
            >
              {t.behavior.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    marginBottom: '0.5rem',
                    lineHeight: '1.6',
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </div>

      {/* Нижний лейбл секции, адаптивный, чтобы не упираться в навигацию */}
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
        02 / {t.label}
      </div>
    </section>
  );
}
