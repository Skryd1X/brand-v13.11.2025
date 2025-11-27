export const theme = {
  colors: {
    baseDeep: '#140C30',
    baseNavy: '#14253E',
    baseBlueGreen: '#153D4C',

    // Tiffany Blue акценты
    accentPrimary: '#0ABAB5',   // основной цвет для кнопок/иконок/подсветок
    accentSecondary: '#089F9A', // чуть темнее — hover/active
    accentSoft: '#35D6D2',      // более светлый — фоны/чипсы/легкие плашки
    accentMid: '#057F7A',       // промежуточный для бордеров/тонких линий

    white: '#FFFFFF',
    lightGray: '#E0E6F0',
    mediumGray: '#A8B2C1',
  },
  gradients: {
    primary:
      'linear-gradient(180deg, #140C30 0%, #14253E 40%, #153D4C 100%)',

    // Градиент в Tiffany Blue для всех плашек / полос / круглых иконок
    accent:
      'linear-gradient(135deg, #057F7A 0%, #0ABAB5 45%, #35D6D2 100%)',

    warm: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
    vibrant: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
    purple: 'linear-gradient(135deg, #A55EEA 0%, #6C5CE7 100%)',
  },
  borderRadius: {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
  },
  shadows: {
    neo:
      '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)',
    neoInset:
      'inset 8px 8px 16px rgba(0, 0, 0, 0.4), inset -8px -8px 16px rgba(255, 255, 255, 0.05)',

    // Неоновая подсветка в Tiffany Blue
    glow: '0 0 20px rgba(10, 186, 181, 0.55)',
    glowStrong: '0 0 40px rgba(10, 186, 181, 0.85)',
  },
};
