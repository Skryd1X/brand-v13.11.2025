import { theme } from '../theme';
import NeoCard from './NeoCard';

interface ColorItemProps {
  color: string;
  name: string;
  hex: string;
  usage: string;
}

function ColorItem({ color, name, hex, usage }: ColorItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 'clamp(120px, 28vw, 140px)',
          height: 'clamp(190px, 40vw, 240px)',
          borderRadius: 9999,
          background: color,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow =
            '0 12px 48px rgba(0, 0, 0, 0.45)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow =
            '0 8px 32px rgba(0, 0, 0, 0.35)';
        }}
      >
        <span
          style={{
            fontSize: 'clamp(0.85rem, 2.4vw, 1.1rem)',
            fontWeight: 700,
            color: theme.colors.white,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            letterSpacing: '0.06em',
          }}
        >
          {hex}
        </span>
      </div>

      <div style={{ maxWidth: '160px' }}>
        <div
          style={{
            fontSize: 'clamp(0.95rem, 2.4vw, 1.05rem)',
            fontWeight: 700,
            color: theme.colors.white,
            marginBottom: '0.25rem',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
            color: theme.colors.mediumGray,
            lineHeight: 1.5,
          }}
        >
          {usage}
        </div>
      </div>
    </div>
  );
}

export default function ColorPalette() {
  const backgrounds = [
    {
      color: theme.colors.baseDeep,
      name: 'Base Deep',
      hex: '#140C30',
      usage: 'Основной фон',
    },
    {
      color: theme.colors.baseNavy,
      name: 'Base Navy',
      hex: '#14253E',
      usage: 'Карточки, меню',
    },
    {
      color: theme.colors.baseBlueGreen,
      name: 'Base Blue Green',
      hex: '#153D4C',
      usage: 'Контейнеры',
    },
  ];

  const accents = [
    {
      color: theme.colors.accentMid,
      name: 'Accent Mid',
      hex: '#15565B',
      usage: 'Hover-состояния',
    },
    {
      color: theme.colors.accentSoft,
      name: 'Accent Soft',
      hex: '#156F69',
      usage: 'Второстепенные элементы',
    },
    {
      color: theme.colors.accentSecondary,
      name: 'Accent Secondary',
      hex: '#168777',
      usage: 'Градиенты',
    },
    {
      color: theme.colors.accentPrimary,
      name: 'Accent Primary',
      hex: '#16A085',
      usage: 'Кнопки, иконки',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(2.5rem, 5vw, 4rem)',
      }}
    >
      <NeoCard>
        <h3
          style={{
            fontSize: 'clamp(1.5rem, 3.2vw, 1.75rem)',
            fontWeight: 700,
            color: theme.colors.white,
            marginBottom: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          Фоновые цвета
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            justifyItems: 'center',
          }}
        >
          {backgrounds.map((bg) => (
            <ColorItem key={bg.hex} {...bg} />
          ))}
        </div>
      </NeoCard>

      <NeoCard>
        <h3
          style={{
            fontSize: 'clamp(1.5rem, 3.2vw, 1.75rem)',
            fontWeight: 700,
            color: theme.colors.white,
            marginBottom: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          Акцентные цвета
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            justifyItems: 'center',
          }}
        >
          {accents.map((accent) => (
            <ColorItem key={accent.hex} {...accent} />
          ))}
        </div>
      </NeoCard>
    </div>
  );
}
