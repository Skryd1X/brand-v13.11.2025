import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Clock, Target, TrendingUp, Users } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';

interface IdeologySectionProps {
  language: Language;
}

export default function IdeologySection({ language }: IdeologySectionProps) {
  const t = translations[language].ideology;

  const values = [
    {
      icon: Clock,
      title: t.values[0].title,
      text: t.values[0].text,
      gradient: theme.gradients.accent,
    },
    {
      icon: Target,
      title: t.values[1].title,
      text: t.values[1].text,
      gradient: theme.gradients.warm,
    },
    {
      icon: TrendingUp,
      title: t.values[2].title,
      text: t.values[2].text,
      gradient: theme.gradients.vibrant,
    },
    {
      icon: Users,
      title: t.values[3].title,
      text: t.values[3].text,
      gradient: theme.gradients.purple,
    },
  ];

  return (
    <section
      id="ideology"
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
        <SectionHeader number="01" title={t.title} subtitle={t.subtitle} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <NeoCard key={value.title} hover>
                <div
                  style={{
                    width: 'clamp(64px, 8vw, 80px)',
                    height: 'clamp(64px, 8vw, 80px)',
                    borderRadius: theme.borderRadius.md,
                    background: value.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                    boxShadow: '0 8px 32px rgba(22, 160, 133, 0.3)',
                  }}
                >
                  <Icon
                    size={36}
                    color={theme.colors.white}
                    style={{
                      width: 'clamp(28px, 6vw, 36px)',
                      height: 'clamp(28px, 6vw, 36px)',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '0.75rem',
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(0.975rem, 2.4vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                  }}
                >
                  {value.text}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <NeoCard
          style={{
            marginTop: 'clamp(1.75rem, 4vw, 2.5rem)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 1.75rem)',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            }}
          >
            Позиционирование
          </h3>
          <p
            style={{
              fontSize: 'clamp(0.975rem, 2.4vw, 1.125rem)',
              color: theme.colors.lightGray,
              lineHeight: '1.7',
            }}
          >
            Rezzy позиционируется как современная технологичная платформа для
            умных людей, которые ценят своё время и предпочитают эффективные
            digital-решения. Мы объединяем все виды бронирований в одном
            удобном интерфейсе, создавая экосистему для управления временем.
          </p>
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
        01 / {t.label}
      </div>
    </section>
  );
}
