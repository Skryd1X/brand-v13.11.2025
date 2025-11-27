import { useEffect, useState } from 'react';
import {
  MessageSquare,
  Smile,
  Zap,
  Shield,
  Smartphone,
  Share2,
  Megaphone,
  Briefcase,
  MousePointer,
} from 'lucide-react';
import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Language, translations } from '../../i18n/translations';

interface ToneSectionProps {
  language: Language;
}

type ToneGroup = 'B2C' | 'B2B';

type ToneKey =
  | 'rezzy_base'
  | 'b2c_voice'
  | 'b2b_voice'
  | 'situations'
  | 'app'
  | 'social'
  | 'ads_b2c'
  | 'ads_b2b';

type ToneDetails = Record<ToneKey, Partial<Record<Language, string>>>;

// Полные тексты по ПДФ (ru)
const toneDetails: ToneDetails = {
  rezzy_base: {
    ru: `Tone of Voice Rezzy

Как звучит Rezzy
Rezzy говорит просто, уверенно и по-человечески.
Мы экономим время людей и упрощаем работу бизнеса — и это слышно в каждом сообщении.

Наш голос:
короткий, дружелюбный, современный, уверенный, технологичный, заботливый.

Основные принципы

1. Простой и понятный
Мы не пишем сложно. Никакого канцелярита, длинных конструкций и «оформите заявку».
Фразы короткие, говорим так, как общаются живые люди.

Примеры:
• «Забронируй за 10 секунд»
• «Столик уже ждёт тебя»

2. Дружелюбный, но не фамильярный
Rezzy — сервис, который поддерживает.
Мы на стороне пользователя и не поучаем.

Примеры:
• «Если что-то пошло не так — мы поможем»
• «Выбери место — остальное сделаем мы»

3. Уверенный и современный
Мы технологичный продукт.
Говорим чётко, без воды, уверенно формулируем статусы и действия.

Примеры:
• «Бронь подтверждена»
• «Свободные слоты обновлены»

4. Заботливый и ненавязчивый
Мы напоминаем, предупреждаем, подсказываем — но не раздражаем.
У Rezzy нет агрессии, давления и лишних уведомлений.

Примеры:
• «Мы напомним за 1 час до начала»
• «Можно отменить бронь в один клик — без звонков»

Как пишем (Do)
• Коротко, ясно и по делу.
• Только живой язык.
• CTA понятные: «забронируй», «выбери», «подтверди».
• Показываем выгоды: экономим время, убираем хаос, избавляем от звонков.
• На «ты» — с молодой аудиторией.
• На «вы» — в деловых и B2B-коммуникациях.

Чего избегаем (Don't)
• Канцелярита: «осуществите бронирование», «заполните форму».
• Сухих обращений: «Уважаемый пользователь».
• Лишних абзацев и сложных оборотов.
• Технического жаргона, если он не нужен.
• Навязчивого тона.`,
  },
  b2c_voice: {
    ru: `Tone of Voice B2C (пользователи)

Как мы звучим:
• коротко
• дружелюбно
• спокойно
• современно
• технологично

Главная мысль:
Rezzy экономит твоё время и делает жизнь проще.

Пример:
«Столик забронирован — отдыхай, мы всё организовали».`,
  },
  b2b_voice: {
    ru: `Tone of Voice B2B (заведения и бизнес)

Как мы звучим:
• чётко
• делово
• с уважением
• акцент на выгоде и эффективности

Главная мысль:
Rezzy помогает увеличивать загрузку и снижать хаос в управлении бронированиями.

Пример:
«Rezzy помогает увеличить заполняемость и сократить ошибки персонала».`,
  },
  situations: {
    ru: `Коммуникации в ситуациях

Если произошла ошибка
— честно
— спокойно
— с решением

Пример:
«Извиняемся за задержку. Уже решаем — всё заработает в ближайшие минуты».

Если пользователь опаздывает
— вежливо
— без давления
— с понятными правилами

Пример:
«Мы держим столик 15 минут. Если задерживаешься — отметь это в приложении».

Если пользователь отменяет бронь
— спокойно
— уважительно

Пример:
«Бронь отменена. Ждём тебя снова!».`,
  },
  app: {
    ru: `1. TOV в приложении Rezzy

Как звучим:
• коротко, максимально чётко
• никаких лишних слов
• уверенно и технологично
• нейтрально-дружелюбно (без «эмоций», без сюсюканья)
• подсвечиваем действие: что сделать сейчас
• подсказываем, но не давим

Задача тона в приложении:
помогать действовать быстро и уверенно.

Примеры phrasing:
• «Выбери время»
• «Бронь подтверждена»
• «Места обновлены»
• «До начала 1 час — напомнить?»
• «Столик удерживается 15 минут»
• «Отменить бронь?»

Чего НЕ делаем:
• длинные тексты в интерфейсе
• юмор там, где нужна точность
• сложные термины
• эмоциональные обращения.`,
  },
  social: {
    ru: `2. TOV в соцсетях

Как звучим:
• живо, дружелюбно, легко
• современно
• ближе к пользователю («мы с тобой» эффект)
• на «ты» (кроме B2B-контента)
• добавляем лёгкий lifestyle-тон
• короткие, цепляющие фразы

Задача тона в соцсетях:
создавать ощущение удобного сервиса и формировать привычку бронировать через Rezzy.

Примеры phrasing:
• «Не ищи столик — ищи настроение. Остальное мы сделаем»
• «Ужин? Кофе? Лаунж? Бронируй за 10 секунд»
• «Хватит ловить “занято” — всё свободное уже на Rezzy»
• «Свободные места там, где ты хочешь быть сегодня»
• «Новое место в списке — бронируй, пока не заняли»

Чего НЕ делаем:
• чрезмерная фамильярность
• эмоциональный накал
• слишком пафосные фразы
• сленг, который быстро устареет.`,
  },
  ads_b2c: {
    ru: `3. TOV в рекламе (перформанс + имидж)

Реклама должна звучать как:
• очень коротко
• очень выгодно
• очень понятно

В рекламе мы говорим ещё рациональнее:
проблема → решение → быстрый CTA.

Задача тона в рекламе:
мотивировать человека попробовать Rezzy прямо сейчас.

Примеры phrasing:
• «Бронируй за 10 секунд — без звонков»
• «Свободные столики в любимых местах»
• «Хватит писать в директ — бронируй в один тап»
• «Все заведения города — в одном приложении»
• «Удобнее и быстрее, чем звонить».`,
  },
  ads_b2b: {
    ru: `TOV в рекламе для B2B

Для B2B-рекламы:
• «Сократите пропущенные звонки на 40%»
• «Автоматизация бронирований без сложных систем»
• «Rezzy увеличивает загрузку и даёт аналитику»
• «Меньше хаоса — больше клиентов»

Чего НЕ делаем:
• длинные рекламные абзацы
• общие слова («мы улучшаем качество обслуживания» — не конкретно)
• юмор, который снижает доверие к технологичности.`,
  },
};

interface ToneCard {
  key: ToneKey;
  group: ToneGroup;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  gradient: string;
}

const toneCards: ToneCard[] = [
  {
    key: 'rezzy_base',
    group: 'B2C',
    title: 'Tone of Voice Rezzy',
    tagline: 'Как звучит Rezzy и базовые принципы голоса.',
    icon: MessageSquare,
    gradient: theme.gradients.accent,
  },
  {
    key: 'b2c_voice',
    group: 'B2C',
    title: 'Tone of Voice B2C (пользователи)',
    tagline: 'Как мы звучим для пользователей и главная мысль коммуникации.',
    icon: Smile,
    gradient: theme.gradients.vibrant,
  },
  {
    key: 'situations',
    group: 'B2C',
    title: 'Коммуникации в ситуациях',
    tagline: 'Готовые формулировки на случаи ошибок, опозданий и отмены брони.',
    icon: Shield,
    gradient: theme.gradients.purple,
  },
  {
    key: 'app',
    group: 'B2C',
    title: 'TOV в приложении Rezzy',
    tagline: 'Тон интерфейса, статусов и системных сообщений.',
    icon: Smartphone,
    gradient: theme.gradients.accent,
  },
  {
    key: 'social',
    group: 'B2C',
    title: 'TOV в соцсетях',
    tagline:
      'Как звучим в соцсетях, чтобы формировать привычку бронировать через Rezzy.',
    icon: Share2,
    gradient: theme.gradients.vibrant,
  },
  {
    key: 'ads_b2c',
    group: 'B2C',
    title: 'TOV в рекламе (пользователи)',
    tagline: 'Перформанс и имидж-реклама, примеры формулировок.',
    icon: Megaphone,
    gradient: theme.gradients.warm,
  },
  {
    key: 'b2b_voice',
    group: 'B2B',
    title: 'Tone of Voice B2B (заведения и бизнес)',
    tagline: 'Как мы звучим для партнёров, заведений и бизнеса.',
    icon: Briefcase,
    gradient: theme.gradients.accent,
  },
  {
    key: 'ads_b2b',
    group: 'B2B',
    title: 'TOV в рекламе (B2B)',
    tagline: 'Сообщения про выгоду и эффективность для владельцев бизнеса.',
    icon: Megaphone,
    gradient: theme.gradients.purple,
  },
];

// форматтер текста в модалке
const renderToneText = (raw: string) => {
  const headingCandidates = new Set<string>([
    'Tone of Voice Rezzy',
    'Tone of Voice B2C (пользователи)',
    'Tone of Voice B2B (заведения и бизнес)',
    'Коммуникации в ситуациях',
    'Как звучит Rezzy',
    'Наш голос:',
    'Основные принципы',
    'Простой и понятный',
    'Дружелюбный, но не фамильярный',
    'Уверенный и современный',
    'Заботливый и ненавязчивый',
    'Как пишем (Do)',
    "Чего избегаем (Don't)",
    'Как мы звучим:',
    'Главная мысль:',
    'Пример:',
    'Если произошла ошибка',
    'Если пользователь опаздывает',
    'Если пользователь отменяет бронь',
    'TOV в приложении Rezzy',
    'TOV в соцсетях',
    'TOV в рекламе (перформанс + имидж)',
    'TOV в рекламе для B2B',
  ]);

  const bulletPrefixes = ['•', '-', '—', '–'];

  return raw.split('\n').map((line, i) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return <div key={i} style={{ height: '0.6rem' }} />;
    }

    let text = trimmed;
    let isHeading = false;

    // убираем нумерацию "1. ...", "2. ..."
    const numMatch = trimmed.match(/^(\d+)\.\s*(.+)$/);
    if (numMatch) {
      isHeading = true;
      text = numMatch[2];
    }

    if (headingCandidates.has(trimmed)) {
      isHeading = true;
    }

    if (
      !isHeading &&
      trimmed.endsWith(':') &&
      !bulletPrefixes.some((p) => trimmed.startsWith(p)) &&
      trimmed.length <= 80
    ) {
      isHeading = true;
    }

    return (
      <div
        key={i}
        style={{
          fontSize: '0.98rem',
          lineHeight: 1.7,
          fontWeight: isHeading ? 700 : 400,
          color: isHeading ? theme.colors.white : 'rgba(226, 232, 240, 0.9)',
          textTransform: 'none',
          letterSpacing: isHeading ? '0.02em' : undefined,
          marginTop: isHeading ? '0.75rem' : 0,
        }}
      >
        {text}
      </div>
    );
  });
};

export default function ToneSection({ language }: ToneSectionProps) {
  const t = translations[language].tone;
  const [activeKey, setActiveKey] = useState<ToneKey | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<ToneKey | null>(null);

  // детект мобилки
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Лочим скролл фона + прячем навигацию, пока открыта модалка
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

  const handleOpen = (key: ToneKey) => setActiveKey(key);
  const handleClose = () => setActiveKey(null);

  const b2cCards = toneCards.filter((c) => c.group === 'B2C');
  const b2bCards = toneCards.filter((c) => c.group === 'B2B');

  const renderModal = () => {
    if (!activeKey) return null;

    const activeCard = toneCards.find((c) => c.key === activeKey);
    if (!activeCard) return null;

    const raw =
      toneDetails[activeKey][language] ?? toneDetails[activeKey].ru ?? '';

    const Icon = activeCard.icon;

    let groupLabel: string;
    if (activeKey === 'rezzy_base') {
      groupLabel = 'Tone of Voice Rezzy';
    } else {
      groupLabel =
        activeCard.group === 'B2C' ? 'Tone of Voice B2C' : 'Tone of Voice B2B';
    }

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

        {/* модальное окно */}
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

          {/* заголовки */}
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
            {activeCard.tagline && (
              <div
                style={{
                  fontSize: '0.95rem',
                  color: theme.colors.accentPrimary,
                  fontWeight: 600,
                  marginTop: '0.2rem',
                }}
              >
                {activeCard.tagline}
              </div>
            )}
          </div>

          {/* контент со скроллом */}
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
            {renderToneText(raw)}
          </div>
        </div>
      </div>
    );
  };

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

        {/* Верхние 4 карточки-принципы (как было) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {t.principles.map((principle: any, index: number) => {
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

        {/* Tone of Voice B2C */}
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
            TONE OF VOICE / B2C
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
            {b2cCards.map((card) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === card.key;
              const borderColorBase = 'rgba(45, 212, 191, 0.24)';
              const borderColorHover = 'rgba(45, 212, 191, 0.55)';

              return (
                <NeoCard
                  key={card.key}
                  hover
                  onClick={() => handleOpen(card.key)}
                  onMouseEnter={() => setHoveredCard(card.key)}
                  onMouseLeave={() =>
                    setHoveredCard((prev) => (prev === card.key ? null : prev))
                  }
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: `1px solid ${
                      isHovered ? borderColorHover : borderColorBase
                    }`,
                    transition:
                      'border-color 180ms ease-out, box-shadow 180ms ease-out',
                    boxShadow: isHovered
                      ? '0 26px 80px rgba(15,23,42,0.95)'
                      : '0 18px 50px rgba(15,23,42,0.8)',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background: card.gradient,
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
                      fontWeight: 700,
                      color: theme.colors.white,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      color: theme.colors.lightGray,
                      lineHeight: 1.7,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* курсор в правом нижнем углу — только при ховере */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '1.1rem',
                      bottom: '1rem',
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
        </div>

        {/* Tone of Voice B2B */}
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
            TONE OF VOICE / B2B
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
            {b2bCards.map((card) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === card.key;
              const borderColorBase = 'rgba(96, 165, 250, 0.24)';
              const borderColorHover = 'rgba(96, 165, 250, 0.6)';

              return (
                <NeoCard
                  key={card.key}
                  hover
                  onClick={() => handleOpen(card.key)}
                  onMouseEnter={() => setHoveredCard(card.key)}
                  onMouseLeave={() =>
                    setHoveredCard((prev) => (prev === card.key ? null : prev))
                  }
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: `1px solid ${
                      isHovered ? borderColorHover : borderColorBase
                    }`,
                    transition:
                      'border-color 180ms ease-out, box-shadow 180ms ease-out',
                    boxShadow: isHovered
                      ? '0 26px 80px rgba(15,23,42,0.95)'
                      : '0 18px 50px rgba(15,23,42,0.8)',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background: card.gradient,
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
                      fontWeight: 700,
                      color: theme.colors.white,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                      color: theme.colors.lightGray,
                      lineHeight: 1.7,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* курсор-указатель — только при ховере */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '1.1rem',
                      bottom: '1rem',
                      pointerEvents: 'none',
                      opacity: isHovered ? 0.95 : 0,
                      transform: isHovered
                        ? 'translate(0, 0)'
                        : 'translate(4px, 4px)',
                      transition:
                        'opacity 160ms ease-out, transform 160ms ease-out',
                      filter: isHovered
                        ? 'drop-shadow(0 0 8px rgba(56,189,248,0.5))'
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

        {/* Чек-лист Do / Don't */}
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
              {t.examples.do.items.map((item: string, i: number) => (
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
              {t.examples.dont.items.map((item: string, i: number) => (
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
        03 / {t.label}
      </div>

      {renderModal()}
    </section>
  );
}
