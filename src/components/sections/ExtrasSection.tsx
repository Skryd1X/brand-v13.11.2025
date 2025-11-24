import { Language } from '../../i18n/translations';
interface ExtrasSectionProps {
  language: Language;
}

import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { FileText, Shirt, ShoppingBag, Pen } from 'lucide-react';

const extrasItems = [
  { id: 1, label: 'Визитки команды', icon: FileText },
  { id: 2, label: 'Мерч (футболки, кружки)', icon: Shirt },
  { id: 3, label: 'Фирменные пакеты', icon: ShoppingBag },
  { id: 4, label: 'Ручки/блокноты', icon: Pen },
];

export default function ExtrasSection({ language }: ExtrasSectionProps) {
  // пока текст статичный, но проп language оставляем для единообразия
  void language;

  return (
    <section
      id="extras"
      className="section-padding"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // дополнительный отступ снизу, чтобы контент не перекрывался нижней навигацией
        paddingBottom: 'clamp(6rem, 12vh, 7rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <SectionHeader
          number="07"
          title="Дополнительные материалы"
          subtitle="Примеры применения фирменного стиля на офлайн-носителях, мерче и корпоративных материалах"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          {extrasItems.map((item) => {
            const Icon = item.icon;
            return (
              <NeoCard
                key={item.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 3vw, 1.5rem)',
                  padding: 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  background: theme.colors.baseNavy,
                  border: `2px solid ${theme.colors.baseBlueGreen}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor =
                    theme.colors.accentPrimary;
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(22, 160, 133, 0.3), ${theme.shadows.neo}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor =
                    theme.colors.baseBlueGreen;
                  e.currentTarget.style.boxShadow = theme.shadows.neo;
                }}
              >
                <div
                  style={{
                    aspectRatio: '1 / 1',
                    width: '100%',
                    background: `radial-gradient(circle at center, ${theme.colors.baseBlueGreen} 0%, ${theme.colors.baseNavy} 70%)`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    borderBottom: `2px solid ${theme.colors.baseBlueGreen}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60%',
                      height: '60%',
                      background:
                        'radial-gradient(circle, rgba(22, 160, 133, 0.2) 0%, transparent 70%)',
                      borderRadius: '50%',
                    }}
                  />
                  <div
                    style={{
                      width: 'clamp(56px, 15vw, 72px)',
                      height: 'clamp(56px, 15vw, 72px)',
                      borderRadius: '50%',
                      background: theme.colors.baseNavy,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${theme.colors.accentPrimary}`,
                      boxShadow: '0 0 20px rgba(22, 160, 133, 0.4)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Icon
                      size={36}
                      color={theme.colors.accentPrimary}
                      style={{
                        width: 'clamp(28px, 8vw, 36px)',
                        height: 'clamp(28px, 8vw, 36px)',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                      color: theme.colors.mediumGray,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    Скоро появится
                  </p>
                </div>

                <div
                  style={{
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      fontWeight: '700',
                      color: theme.colors.white,
                      lineHeight: '1.4',
                      textAlign: 'center',
                    }}
                  >
                    {item.label}
                  </h3>
                </div>
              </NeoCard>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 'clamp(2rem, 5vw, 4rem)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            background: theme.colors.baseBlueGreen,
            borderRadius: theme.borderRadius.md,
            borderLeft: `4px solid ${theme.colors.accentPrimary}`,
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              color: theme.colors.lightGray,
              lineHeight: '1.8',
            }}
          >
            <strong style={{ color: theme.colors.white }}>Примечание:</strong>{' '}
            Все материалы разрабатываются в соответствии с фирменным стилем
            Rezzy. Цветовая палитра, типографика и визуальные элементы
            сохраняются на всех носителях для обеспечения целостного
            восприятия бренда. Фотографии реальных материалов будут добавлены
            после производства первой партии.
          </p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2.5rem, 7vh, 3.5rem)',
          right: 'clamp(2rem, 5vw, 4rem)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        07 / ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ
      </div>
    </section>
  );
}
