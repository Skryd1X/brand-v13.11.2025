import { useState } from 'react';
import { Language } from '../../i18n/translations';
import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Clock, Target, TrendingUp, Users, MousePointer } from 'lucide-react';

interface IdeologySectionProps {
  language: Language;
}

type IdeologyKey =
  | 'whatIs'
  | 'history'
  | 'mission'
  | 'visionValues'
  | 'positioning';

// Полные тексты из PDF (ru)
const details: Record<IdeologyKey, Partial<Record<Language, string>>> = {
  whatIs: {
    ru: `Rezzy — это универсальный агрегатор онлайн и офлайн-бронирований.
В одном приложении собраны все сферы, где людям нужно бронировать услуги:
рестораны, кофейни, лаундж-бары, компьютерные клубы, развлекательные места,
автомойки, салоны красоты, студии, услуги и многое другое.
Мы упрощаем процесс бронирования для клиентов и помогаем бизнесу управлять
загрузкой, автоматизировать процессы и исключать человеческий фактор.`,
  },
  history: {
    ru: `Rezzy появился как ответ на хаос с бронированиями через звонки, мессенджеры и ручные записи.
Мы создаём единый стандарт бронирования в Узбекистане и СНГ — простой, быстрый и
технологичный, как заказ такси или доставки.`,
  },
  mission: {
    ru: `Дать людям один универсальный инструмент для бронирования всего, что связано с услугами.
Помогать бизнесу цифровизировать процессы, повышать эффективность и сокращать ошибки.`,
  },
  visionValues: {
    ru: `Наше видение — построить суперапп, который объединит все сервисы, связанные с
временем, посещениями и досугом.
Ценности Rezzy: удобство, прозрачность, технологичность, надёжность, универсальность.`,
  },
  positioning: {
    ru: `Rezzy — это удобная экосистема, объединяющая все форматы бронирований в одном приложении.
Мы делаем бронирование быстрым, универсальным и современным для пользователей и бизнеса.
Слоган: «Rezzy — бронируй, а не жди».`,
  },
};

// Карточки для RU — названия + краткие описания
const ruCards: {
  key: IdeologyKey;
  title: string;
  short: string;
  icon: typeof Clock;
  color: string;
}[] = [
  {
    key: 'whatIs',
    title: 'Что такое Rezzy',
    short:
      'Универсальный агрегатор онлайн и офлайн-бронирований, который собирает все форматы услуг в одном приложении.',
    icon: Users,
    color: '#16a085',
  },
  {
    key: 'history',
    title: 'История и контекст',
    short:
      'Ответ на хаос с бронированиями через звонки и мессенджеры. Переход к единому стандарту бронирования.',
    icon: Clock,
    color: '#1abc9c',
  },
  {
    key: 'mission',
    title: 'Миссия',
    short:
      'Дать людям один инструмент для бронирования всего, что связано с услугами, и помочь бизнесу стать эффективнее.',
    icon: Target,
    color: '#f1c40f',
  },
  {
    key: 'visionValues',
    title: 'Видение и ценности',
    short:
      'Суперапп для времени и досуга. Удобство, прозрачность, технологичность, надёжность и универсальность.',
    icon: TrendingUp,
    color: '#e74c3c',
  },
  {
    key: 'positioning',
    title: 'Позиционирование',
    short:
      'Экосистема бронирований: быстрый, современный и понятный стандарт для пользователей и бизнеса.',
    icon: Target,
    color: '#9b59b6',
  },
];

export default function IdeologySection({ language }: IdeologySectionProps) {
  const [opened, setOpened] = useState<IdeologyKey | null>(null);
  const [hovered, setHovered] = useState<IdeologyKey | null>(null);

  // пока только RU-сценарий
  const cards = ruCards;

  const handleClose = () => setOpened(null);

  const getDetailsText = (key: IdeologyKey): string => {
    const fromMap = details[key]?.[language];
    if (fromMap) return fromMap;
    const fallback = cards.find((c) => c.key === key)?.short ?? '';
    return fallback;
  };

  // разбиваем как в старой версии:
  const firstRow = cards.slice(0, 4);
  const secondRow = cards.slice(4);

  const openedCard = opened
    ? cards.find((c) => c.key === opened) ?? null
    : null;
  const OpenedIcon = openedCard?.icon;

  return (
    <>
      {/* адаптация модалки под мобилку */}
      <style>
        {`
          @media (max-width: 768px) {
            .rezzy-ideology-modal-card {
              width: 100%;
              max-height: none;
              margin-top: 3.5rem;
              margin-bottom: 3.5rem;
              border-radius: 24px;
            }
            .rezzy-ideology-modal-icon {
              top: -34px;
              width: 64px;
              height: 64px;
            }
          }
        `}
      </style>

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
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <SectionHeader
            number="01"
            title="Идеология бренда"
            subtitle="Основы бренда Rezzy: суть продукта, миссия, ценности и позиционирование"
          />

          {/* РЯД 1 — 4 вытянутые карточки как раньше */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 'clamp(1.75rem, 3vw, 2.25rem)',
              marginBottom: 'clamp(1.75rem, 3vw, 2.25rem)',
            }}
          >
            {firstRow.map(({ key, icon: Icon, color, title, short }) => {
              const isHovered = hovered === key;
              const borderColorBase = 'rgba(45, 212, 191, 0.22)';
              const borderColorHover = 'rgba(45, 212, 191, 0.6)';

              return (
                <NeoCard
                  key={key}
                  hover
                  onClick={() => setOpened(key)}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() =>
                    setHovered((prev) => (prev === key ? null : prev))
                  }
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    minHeight: 260,
                    padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                    position: 'relative',
                    border: `1px solid ${
                      isHovered ? borderColorHover : borderColorBase
                    }`,
                    boxShadow: isHovered
                      ? '0 26px 80px rgba(15,23,42,0.95)'
                      : '0 18px 50px rgba(15,23,42,0.8)',
                    transition:
                      'border-color 180ms ease-out, box-shadow 180ms ease-out',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 24,
                        background: color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={30} color="#ffffff" />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: theme.colors.white,
                      }}
                    >
                      {title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: '1rem',
                      color: theme.colors.lightGray,
                      lineHeight: 1.7,
                      maxWidth: '26rem',
                    }}
                  >
                    {short}
                  </p>

                  {/* курсор-подсказка внизу справа — только при ховере */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '1.6rem',
                      bottom: '1.5rem',
                      pointerEvents: 'none',
                      opacity: isHovered ? 0.95 : 0,
                      transform: isHovered
                        ? 'translate(0, 0)'
                        : 'translate(4px, 4px)',
                      transition:
                        'opacity 160ms ease-out, transform 160ms ease-out',
                      filter: isHovered
                        ? 'drop-shadow(0 0 8px rgba(45,212,191,0.5))'
                        : 'none',
                    }}
                  >
                    <MousePointer
                      size={18}
                      color={theme.colors.accentPrimary}
                    />
                  </div>
                </NeoCard>
              );
            })}
          </div>

          {/* РЯД 2 — одна вытянутая карточка позиционирования */}
          {secondRow.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
                gap: 'clamp(1.75rem, 3vw, 2.25rem)',
                maxWidth: '520px',
              }}
            >
              {secondRow.map(({ key, icon: Icon, color, title, short }) => {
                const isHovered = hovered === key;
                const borderColorBase = 'rgba(45, 212, 191, 0.22)';
                const borderColorHover = 'rgba(45, 212, 191, 0.6)';

                return (
                  <NeoCard
                    key={key}
                    hover
                    onClick={() => setOpened(key)}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() =>
                      setHovered((prev) => (prev === key ? null : prev))
                    }
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      minHeight: 260,
                      padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                      position: 'relative',
                      border: `1px solid ${
                        isHovered ? borderColorHover : borderColorBase
                      }`,
                      boxShadow: isHovered
                        ? '0 26px 80px rgba(15,23,42,0.95)'
                        : '0 18px 50px rgba(15,23,42,0.8)',
                      transition:
                        'border-color 180ms ease-out, box-shadow 180ms ease-out',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 24,
                          background: color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={30} color="#ffffff" />
                      </div>
                      <h3
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: theme.colors.white,
                        }}
                      >
                        {title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: theme.colors.lightGray,
                        lineHeight: 1.7,
                        maxWidth: '26rem',
                      }}
                    >
                      {short}
                    </p>

                    {/* курсор-подсказка внизу справа — только при ховере */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '1.6rem',
                        bottom: '1.5rem',
                        pointerEvents: 'none',
                        opacity: isHovered ? 0.95 : 0,
                        transform: isHovered
                          ? 'translate(0, 0)'
                          : 'translate(4px, 4px)',
                        transition:
                          'opacity 160ms ease-out, transform 160ms ease-out',
                        filter: isHovered
                          ? 'drop-shadow(0 0 8px rgba(45,212,191,0.5))'
                          : 'none',
                      }}
                    >
                      <MousePointer
                        size={18}
                        color={theme.colors.accentPrimary}
                      />
                    </div>
                  </NeoCard>
                );
              })}
            </div>
          )}
        </div>

        {/* подпись внизу секции */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: 'clamp(2rem, 5vw, 4rem)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: theme.colors.mediumGray,
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          01 / ИДЕОЛОГИЯ БРЕНДА
        </div>

        {/* модалка с развёрнутым текстом (по клику на любую карточку) */}
        {opened && openedCard && (
          <div
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999, // поверх всего, включая навигацию
              background: 'rgba(3, 5, 16, 0.96)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              overflowY: 'auto',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="rezzy-ideology-modal-card"
              style={{
                width: 'min(960px, 100%)',
                marginTop: '3.5rem',
                marginBottom: '3.5rem',
                borderRadius: 32,
                background: `radial-gradient(circle at top, rgba(22,160,133,0.22), transparent 55%), ${theme.colors.baseNavy}`,
                boxShadow: '0 32px 90px rgba(0,0,0,0.8)',
                padding: 'clamp(2.75rem, 5vw, 3.25rem)',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* круглая иконка сверху по центру */}
              {OpenedIcon && (
                <div
                  className="rezzy-ideology-modal-icon"
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: openedCard.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow:
                      '0 24px 60px rgba(0,0,0,0.75), 0 0 0 12px rgba(22,160,133,0.18)',
                    border: '3px solid #081220',
                  }}
                >
                  <OpenedIcon size={36} color="#ffffff" />
                </div>
              )}

              {/* крестик */}
              <button
                type="button"
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.75rem',
                  border: 'none',
                  background: 'transparent',
                  color: theme.colors.mediumGray,
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                }}
              >
                ×
              </button>

              {/* заголовок + краткое описание по центру */}
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '2.25rem',
                  marginBottom: '2rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.9rem',
                    fontWeight: 800,
                    color: theme.colors.white,
                    marginBottom: '0.9rem',
                  }}
                >
                  {openedCard.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.mediumGray,
                    maxWidth: '38rem',
                    margin: '0 auto',
                    lineHeight: 1.7,
                  }}
                >
                  {openedCard.short}
                </p>
              </div>

              {/* основной развёрнутый текст (с PDF) */}
              <div
                style={{
                  background: 'rgba(5, 19, 35, 0.9)',
                  borderRadius: 24,
                  padding: '1.9rem 2.1rem',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <p
                  style={{
                    whiteSpace: 'pre-line',
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    lineHeight: 1.8,
                    textAlign: 'left',
                  }}
                >
                  {getDetailsText(opened)}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
