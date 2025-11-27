import { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Sparkles,
  Heart,
  Users,
  Car,
  MapPin,
  PhoneOff,
  Coffee,
  Settings,
  Monitor,
  Scissors,
  Music,
  MousePointer,
} from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';

interface AudienceSectionProps {
  language: Language;
}

type AudienceKey =
  | 'b2c_youngPros'
  | 'b2c_activeCitizens'
  | 'b2c_couplesFriends'
  | 'b2c_families'
  | 'b2c_carServices'
  | 'b2c_tourists'
  | 'b2c_avoidCalls'
  | 'b2b_horeca'
  | 'b2b_carwash'
  | 'b2b_pcClubs'
  | 'b2b_beauty'
  | 'b2b_entertainment';

type AudienceDetails = Record<AudienceKey, Partial<Record<Language, string>>>;

// Полные тексты модалок (строго по ПДФ, RU)
const audienceDetails: AudienceDetails = {
  b2c_youngPros: {
    ru: `B2C АУДИТОРИЯ

1. Молодые профессионалы (основная и наиболее платёжная ЦА)

Возраст: 20–35
Кто это: IT, маркетинг, офис, HR, дизайнеры, проектные менеджеры.

Сценарии
• бизнес-ланчи
• встречи с коллегами
• after-work ужины
• планирование деловых активностей

Инсайты
• ненавидят звонки
• всё планируют через смартфон
• ценят скорость и удобство
• хотят выглядеть собранными и организованными

Боли
• “занято… перезвоните через 10 минут”
• потерянные брони в мессенджере
• неясно, подтвердили ли стол
• нет статуса и гарантии`,
  },
  b2c_activeCitizens: {
    ru: `B2C АУДИТОРИЯ

2. Активные горожане / lifestyle-пользователи

Возраст: 18–30
Кто это: любители кофеен, лаунжей, баров, событий.

Сценарии
• бронирование “на сейчас”
• поиск места для вечерних вылазок
• спонтанные планы с друзьями

Инсайты
• хотят сравнить места за секунды
• ценят технологичность сервиса
• предпочитают всё делать в 2 тапа

Боли
• заведения не отвечают
• сложно понять, где есть свободные столы
• неудобно ждать подтверждения`,
  },
  b2c_couplesFriends: {
    ru: `B2C АУДИТОРИЯ

3. Пары и компании друзей

Возраст: 20–45
Кто это: пары, мини-группы, коллеги.

Сценарии
• совместные ужины
• кофейные встречи
• бронирование ПК-клубов

Инсайты
• удобно видеть свободные слоты
• важно избежать путаницы по времени

Боли
• долго согласовывают время
• сложно понять, что реально доступно
• неприятные ситуации с “ой, ваш столик не готов”`,
  },
  b2c_families: {
    ru: `B2C АУДИТОРИЯ

4. Семьи и взрослые пользователи

Возраст: 28–50
Кто это: родители, семейные пары.

Сценарии
• семейные кафе
• завтраки
• планирование выходных

Инсайты
• нужна надёжность
• ценят напоминания
• минимум стресса и хаоса

Боли
• “мы забыли о брони”
• нет чёткой фиксации
• тяжёлые переписки с администраторами`,
  },
  b2c_carServices: {
    ru: `B2C АУДИТОРИЯ

5. Автовладельцы и бытовые сервисы

Возраст: 22–55
Кто это: пользователи автомоек, детейлинга, сервисов.

Сценарии
• запись на мойку
• детейлинг
• сервисное обслуживание

Инсайты
• важно чёткое время
• бесит очередь

Боли
• отсутствие структуры
• хаотичная запись в Telegram
• опоздания и срывы`,
  },
  b2c_tourists: {
    ru: `B2C АУДИТОРИЯ

6. Туристы и приезжие (сильный конверсионный сегмент)

Возраст: 20–55
Кто это: иностранцы и приезжие в город.

Инсайты
• не знают город
• нет желания звонить
• языковой барьер
• хотят сравнить всё мгновенно

Боли
• тяжело ориентироваться
• многие заведения не ведут соцсети
• отсутствие понятных цен и описаний

Этот сегмент — один из самых активных в онлайн-бронированиях.`,
  },
  b2c_avoidCalls: {
    ru: `B2C АУДИТОРИЯ

7. Люди, которые избегают звонков

Возраст: 18–45
Кто это: интроверты, люди с социальной тревожностью, поколение Z.

Инсайты
• психологически избегают звонков
• хотят минимизировать общение
• любят автоматизацию

Боли
• стресс от необходимости звонка
• страх, что «не поймут»
• опасение переплатить или ошибиться`,
  },
  b2b_horeca: {
    ru: `B2B АУДИТОРИЯ

1. Horeca — основа партнёрской сети Rezzy

• рестораны
• кафе
• кофейни
• лаунжи
• бары

Что им нужно
• заполненные столы
• меньше пропущенных звонков
• меньше человеческого фактора
• автоматизация брони
• аналитика по загрузке

Боли
• хаос в заявках
• потерянные сообщения
• нет единой системы брони`,
  },
  b2b_carwash: {
    ru: `B2B АУДИТОРИЯ

2. Автомойки и сервисы

Нужды
• запись по времени
• контроль очередей
• понятная загрузка

Боли
• опоздания и отмены
• отсутствие CRM
• ручные таблицы`,
  },
  b2b_pcClubs: {
    ru: `B2B АУДИТОРИЯ

3. Компьютерные клубы

Нужды
• бронирование ПК/комнат
• управление слотами

Боли
• неструктурированный поток
• нет аналитики`,
  },
  b2b_beauty: {
    ru: `B2B АУДИТОРИЯ

4. Бьюти-сфера

• салоны
• барбершопы
• студии

Нужды
• онлайн-запись
• распределение мастеров

Боли
• бесконечные переписки
• неявки`,
  },
  b2b_entertainment: {
    ru: `B2B АУДИТОРИЯ

5. Развлечения

• квесты
• VR
• банкетные залы
• караоке
• банные комплексы

Нужды
• бронирование по времени
• планирование загрузки

Боли
• отсутствие автоматизации
• много ручной работы`,
  },
};

type AudienceGroup = 'B2C' | 'B2B';

interface AudienceCard {
  key: AudienceKey;
  group: AudienceGroup;
  title: string;
  age?: string;
  teaser: string;
  icon: LucideIcon;
  gradient: string;
}

const cards: AudienceCard[] = [
  // B2C
  {
    key: 'b2c_youngPros',
    group: 'B2C',
    title: 'Молодые профессионалы',
    age: '20–35 лет',
    teaser:
      'Основная и наиболее платёжная ЦА: IT, маркетинг, офис, HR, дизайнеры, проектные менеджеры.',
    icon: Briefcase,
    gradient: theme.gradients.accent,
  },
  {
    key: 'b2c_activeCitizens',
    group: 'B2C',
    title: 'Активные горожане / lifestyle-пользователи',
    age: '18–30 лет',
    teaser:
      'Любители кофеен, лаунжей, баров и событий, часто бронирующие “на сейчас”.',
    icon: Sparkles,
    gradient: theme.gradients.vibrant,
  },
  {
    key: 'b2c_couplesFriends',
    group: 'B2C',
    title: 'Пары и компании друзей',
    age: '20–45 лет',
    teaser:
      'Пары, мини-группы и коллеги для совместных ужинов, кофе и ПК-клубов.',
    icon: Heart,
    gradient: theme.gradients.warm,
  },
  {
    key: 'b2c_families',
    group: 'B2C',
    title: 'Семьи и взрослые пользователи',
    age: '28–50 лет',
    teaser:
      'Родители и семейные пары, которым важны надёжность и минимум стресса.',
    icon: Users,
    gradient: theme.gradients.purple,
  },
  {
    key: 'b2c_carServices',
    group: 'B2C',
    title: 'Автовладельцы и бытовые сервисы',
    age: '22–55 лет',
    teaser:
      'Пользователи автомоек, детейлинга и сервисов — им нужно чёткое время без очередей.',
    icon: Car,
    gradient: theme.gradients.accent,
  },
  {
    key: 'b2c_tourists',
    group: 'B2C',
    title: 'Туристы и приезжие',
    age: '20–55 лет',
    teaser:
      'Иностранцы и гости города, один из самых активных сегментов онлайн-бронирований.',
    icon: MapPin,
    gradient: theme.gradients.vibrant,
  },
  {
    key: 'b2c_avoidCalls',
    group: 'B2C',
    title: 'Люди, которые избегают звонков',
    age: '18–45 лет',
    teaser:
      'Интроверты и пользователи с социальной тревожностью, предпочитающие автоматизацию.',
    icon: PhoneOff,
    gradient: theme.gradients.warm,
  },

  // B2B
  {
    key: 'b2b_horeca',
    group: 'B2B',
    title: 'Horeca — основа партнёрской сети',
    teaser:
      'Рестораны, кафе, кофейни, лаунжи и бары — им нужны заполненные столы и аналитика загрузки.',
    icon: Coffee,
    gradient: theme.gradients.purple,
  },
  {
    key: 'b2b_carwash',
    group: 'B2B',
    title: 'Автомойки и сервисы',
    teaser:
      'Точки с записью по времени, контролем очередей и понятной загрузкой вместо хаоса в заявках.',
    icon: Settings,
    gradient: theme.gradients.accent,
  },
  {
    key: 'b2b_pcClubs',
    group: 'B2B',
    title: 'Компьютерные клубы',
    teaser:
      'Нужна система бронирования ПК/комнат и управление слотами, чтобы убрать неструктурированный поток.',
    icon: Monitor,
    gradient: theme.gradients.vibrant,
  },
  {
    key: 'b2b_beauty',
    group: 'B2B',
    title: 'Бьюти-сфера',
    teaser:
      'Салоны, барбершопы и студии с онлайн-записью и распределением мастеров вместо бесконечных переписок.',
    icon: Scissors,
    gradient: theme.gradients.warm,
  },
  {
    key: 'b2b_entertainment',
    group: 'B2B',
    title: 'Развлечения',
    teaser:
      'Квесты, VR, банкетные залы, караоке и банные комплексы — нужен контроль загрузки и автоматизация.',
    icon: Music,
    gradient: theme.gradients.purple,
  },
];

export default function AudienceSection({ language }: AudienceSectionProps) {
  const t = translations[language].audience;
  const [activeKey, setActiveKey] = useState<AudienceKey | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState<AudienceKey | null>(null);

  // детект мобилки
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Лочим скролл фона + прячем навигацию слева, пока открыта модалка
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    const prevOverflow = body.style.overflow;

    if (activeKey) {
      body.style.overflow = 'hidden';
      body.classList.add('brandbook-modal-open');
    }

    return () => {
      body.style.overflow = prevOverflow || '';
      body.classList.remove('brandbook-modal-open');
    };
  }, [activeKey]);

  const handleOpen = (key: AudienceKey) => setActiveKey(key);
  const handleClose = () => setActiveKey(null);

  const b2cCards = cards.filter((c) => c.group === 'B2C');
  const b2bCards = cards.filter((c) => c.group === 'B2B');

  const renderModal = () => {
    if (!activeKey) return null;

    const activeCard = cards.find((c) => c.key === activeKey);
    if (!activeCard) return null;

    const raw =
      audienceDetails[activeKey][language] ??
      audienceDetails[activeKey].ru ??
      '';

    const Icon = activeCard.icon;
    const groupLabel =
      activeCard.group === 'B2C'
        ? 'B2C аудитория Rezzy'
        : 'B2B аудитория Rezzy';

    // разбиваем на строки, чтобы подсветить подзаголовки
    const lines = raw.split('\n');
    const highlightSet = new Set([
      'B2C АУДИТОРИЯ',
      'B2B АУДИТОРИЯ',
      'Сценарии',
      'Инсайты',
      'Боли',
      'Нужды',
      'Что им нужно',
    ]);

    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'center',
          padding: isMobile
            ? '1.5rem 0.75rem 2rem'
            : 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        {/* затемнение фона */}
        <div
          onClick={handleClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.88)',
            backdropFilter: isMobile ? 'none' : 'blur(12px)',
          }}
        />

        {/* большой разворот в стиле "Идеологии" */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: isMobile ? '520px' : '1040px',
            maxHeight: isMobile ? '90vh' : '84vh',
            overflow: 'visible',
            borderRadius: '32px',
            padding: isMobile
              ? '1.5rem 1.25rem 1.75rem'
              : 'clamp(2rem, 3vw, 2.5rem)',
            boxShadow: '0 42px 120px rgba(15, 23, 42, 0.9)',
            background:
              'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18) 0, transparent 45%), radial-gradient(circle at 100% 0%, rgba(244,114,182,0.12) 0, transparent 40%), #020617',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* кнопка закрытия */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.75rem',
              border: 'none',
              background: 'transparent',
              color: theme.colors.mediumGray,
              fontSize: '1.4rem',
              lineHeight: 1,
              cursor: 'pointer',
            }}
            aria-label="Закрыть"
          >
            ×
          </button>

          {/* иконка сверху по центру с неоновой подсветкой */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 80,
                height: 80,
                borderRadius: '999px',
                background:
                  'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 55%)',
                boxShadow:
                  '0 0 0 6px rgba(2,6,23,0.95), 0 22px 60px rgba(15,23,42,0.95), 0 0 40px rgba(34,211,238,0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '999px',
                  background: activeCard.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(15,23,42,0.9)',
                }}
              >
                <Icon size={30} color={theme.colors.white} />
              </div>
            </div>
          </div>

          {/* заголовок + подзаголовок */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '1.9rem',
              marginBottom: '1.75rem',
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(148, 163, 184, 0.9)',
                marginBottom: '0.5rem',
              }}
            >
              {groupLabel}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.1rem)',
                fontWeight: 800,
                color: theme.colors.white,
                marginBottom: '0.35rem',
              }}
            >
              {activeCard.title}
            </h2>
            {activeCard.age && (
              <div
                style={{
                  fontSize: '0.95rem',
                  color: theme.colors.accentPrimary,
                  fontWeight: 600,
                }}
              >
                {activeCard.age}
              </div>
            )}
          </div>

          {/* внутренний тёмный блок со скроллом */}
          <div
            className="audience-modal-scroll"
            style={{
              flex: 1,
              overflowY: 'auto',
              marginTop: '0.5rem',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              background: 'rgba(15, 23, 42, 0.96)',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
            }}
          >
            <div
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: theme.colors.white,
              }}
            >
              {lines.map((line, idx) => {
                const trimmed = line.trim();

                if (!trimmed) {
                  return (
                    <div
                      key={idx}
                      style={{
                        height: '0.7rem',
                      }}
                    />
                  );
                }

                const isHighlight = highlightSet.has(trimmed);

                return (
                  <div
                    key={idx}
                    style={{
                      whiteSpace: 'pre-wrap',
                      fontWeight: isHighlight ? 700 : 400,
                      color: isHighlight
                        ? 'rgba(248, 250, 252, 0.98)'
                        : 'rgba(226, 232, 240, 0.96)',
                      letterSpacing: isHighlight ? '0.04em' : undefined,
                      textTransform: isHighlight ? 'uppercase' : undefined,
                      marginTop: isHighlight ? '0.35rem' : 0,
                    }}
                  >
                    {trimmed}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const borderBase = 'rgba(45, 212, 191, 0.22)';
  const borderHover = 'rgba(45, 212, 191, 0.7)';

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

        {/* B2C */}
        <div style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(45, 212, 191, 0.85)',
              marginBottom: '0.75rem',
            }}
          >
            B2C АУДИТОРИЯ
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {b2cCards.map((segment) => {
              const Icon = segment.icon;
              const isHovered = hovered === segment.key;

              return (
                <NeoCard
                  key={segment.key}
                  hover
                  onClick={() => handleOpen(segment.key)}
                  onMouseEnter={() => setHovered(segment.key)}
                  onMouseLeave={() =>
                    setHovered((prev) =>
                      prev === segment.key ? null : prev,
                    )
                  }
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: `1px solid ${
                      isHovered ? borderHover : borderBase
                    }`,
                    boxShadow: isHovered
                      ? '0 26px 80px rgba(15,23,42,0.95)'
                      : '0 18px 50px rgba(15,23,42,0.85)',
                    transition:
                      'border-color 160ms ease-out, box-shadow 160ms ease-out',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background: segment.gradient,
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

                  {segment.age && (
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
                  )}

                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      color: theme.colors.lightGray,
                      lineHeight: '1.7',
                    }}
                  >
                    {segment.teaser}
                  </p>

                  {/* курсор-указатель только при ховере */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '1.3rem',
                      bottom: '1.1rem',
                      pointerEvents: 'none',
                      opacity: isHovered ? 0.98 : 0,
                      transform: isHovered
                        ? 'translate(0, 0)'
                        : 'translate(4px, 4px)',
                      transition:
                        'opacity 150ms ease-out, transform 150ms ease-out',
                      filter: isHovered
                        ? 'drop-shadow(0 0 8px rgba(45,212,191,0.55))'
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
        </div>

        {/* B2B */}
        <div style={{ marginTop: 'clamp(1rem, 2vw, 1.5rem)' }}>
          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(96, 165, 250, 0.9)',
              marginBottom: '0.75rem',
            }}
          >
            B2B АУДИТОРИЯ
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            {b2bCards.map((segment) => {
              const Icon = segment.icon;
              const isHovered = hovered === segment.key;

              return (
                <NeoCard
                  key={segment.key}
                  hover
                  onClick={() => handleOpen(segment.key)}
                  onMouseEnter={() => setHovered(segment.key)}
                  onMouseLeave={() =>
                    setHovered((prev) =>
                      prev === segment.key ? null : prev,
                    )
                  }
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: `1px solid ${
                      isHovered ? borderHover : borderBase
                    }`,
                    boxShadow: isHovered
                      ? '0 26px 80px rgba(15,23,42,0.95)'
                      : '0 18px 50px rgba(15,23,42,0.85)',
                    transition:
                      'border-color 160ms ease-out, box-shadow 160ms ease-out',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background: segment.gradient,
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

                  {segment.age && (
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
                  )}

                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      color: theme.colors.lightGray,
                      lineHeight: '1.7',
                    }}
                  >
                    {segment.teaser}
                  </p>

                  {/* курсор-указатель только при ховере */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '1.3rem',
                      bottom: '1.1rem',
                      pointerEvents: 'none',
                      opacity: isHovered ? 0.98 : 0,
                      transform: isHovered
                        ? 'translate(0, 0)'
                        : 'translate(4px, 4px)',
                      transition:
                        'opacity 150ms ease-out, transform 150ms ease-out',
                      filter: isHovered
                        ? 'drop-shadow(0 0 8px rgba(45,212,191,0.55))'
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
        </div>
      </div>

      {/* Нижний лейбл секции */}
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

      {renderModal()}
    </section>
  );
}
