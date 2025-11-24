import { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { theme } from '../theme';
import { Language, translations } from '../i18n/translations';

interface BookingNotificationProps {
  show: boolean;
  onClose: () => void;
  restaurant: string;
  time: string;
  guests: number;
  language: Language;
}

export default function BookingNotification({
  show,
  onClose,
  restaurant,
  time,
  guests,
  language,
}: BookingNotificationProps) {
  const t = translations[language].notification;

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <>
      {/* затемнённый фон */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(20, 12, 48, 0.85)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998,
        }}
      />

      {/* контейнер модалки */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        {/* локальный keyframes, чтобы не лезть в global css */}
        <style>
          {`
            @keyframes bookingSlideIn {
              from {
                opacity: 0;
                transform: translateY(16px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div
          style={{
            background: theme.colors.baseNavy,
            borderRadius: theme.borderRadius.lg,
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            boxShadow: `
              0 20px 60px rgba(0, 0, 0, 0.8),
              inset 0 1px 0 rgba(22, 160, 133, 0.2),
              0 0 0 1px ${theme.colors.baseBlueGreen}
            `,
            border: `2px solid ${theme.colors.accentPrimary}`,
            width: 'min(420px, 92vw)',
            maxWidth: '500px',
            position: 'relative',
            animation: 'bookingSlideIn 0.25s ease-out',
          }}
        >
          {/* крестик */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: theme.colors.mediumGray,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.mediumGray;
            }}
          >
            <X size={22} />
          </button>

          {/* иконка-галочка */}
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: theme.gradients.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 8px 32px rgba(22, 160, 133, 0.4)',
            }}
          >
            <Check size={36} color={theme.colors.white} strokeWidth={3} />
          </div>

          {/* заголовок */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '800',
              color: theme.colors.white,
              textAlign: 'center',
              marginBottom: '0.75rem',
            }}
          >
            {t.success}
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2.6vw, 1rem)',
              color: theme.colors.lightGray,
              textAlign: 'center',
              marginBottom: '1.75rem',
              lineHeight: 1.6,
            }}
          >
            {t.confirmation}
          </p>

          {/* блок с деталями брони */}
          <div
            style={{
              background: theme.colors.baseBlueGreen,
              borderRadius: theme.borderRadius.md,
              padding: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: theme.colors.mediumGray,
                  marginBottom: '0.25rem',
                }}
              >
                Ресторан
              </div>
              <div
                style={{
                  fontSize: '1.2rem',
                  color: theme.colors.white,
                  fontWeight: '700',
                }}
              >
                {restaurant}
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: theme.colors.mediumGray,
                    marginBottom: '0.25rem',
                  }}
                >
                  Время
                </div>
                <div
                  style={{
                    fontSize: '1.05rem',
                    color: theme.colors.accentPrimary,
                    fontWeight: '700',
                  }}
                >
                  {time}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: theme.colors.mediumGray,
                    marginBottom: '0.25rem',
                  }}
                >
                  Гостей
                </div>
                <div
                  style={{
                    fontSize: '1.05rem',
                    color: theme.colors.accentPrimary,
                    fontWeight: '700',
                  }}
                >
                  {guests}
                </div>
              </div>
            </div>

            <div
              style={{
                background: theme.colors.baseNavy,
                borderRadius: theme.borderRadius.sm,
                padding: '1rem',
                borderLeft: `3px solid ${theme.colors.accentPrimary}`,
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  color: theme.colors.mediumGray,
                  marginBottom: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Забронировано на
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: theme.colors.white,
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                }}
              >
                {t.name}
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: theme.colors.mediumGray,
                  marginBottom: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Номер бронирования
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: theme.colors.accentPrimary,
                  fontWeight: '700',
                  fontFamily: 'monospace',
                }}
              >
                RZ-1337
              </div>
            </div>
          </div>

          {/* кнопка закрытия */}
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '0.9rem 1rem',
              borderRadius: theme.borderRadius.md,
              background: theme.gradients.accent,
              border: 'none',
              color: theme.colors.white,
              fontSize: 'clamp(1rem, 2.8vw, 1.125rem)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 16px rgba(22, 160, 133, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 24px rgba(22, 160, 133, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 16px rgba(22, 160, 133, 0.3)';
            }}
          >
            Отлично
          </button>
        </div>
      </div>
    </>
  );
}
