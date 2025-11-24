import { useState, useEffect } from 'react';
import { theme } from './theme';
import Navigation from './components/Navigation';
import LanguageSwitcher from './components/LanguageSwitcher';
import IntroSection from './components/sections/IntroSection';
import IdeologySection from './components/sections/IdeologySection';
import AudienceSection from './components/sections/AudienceSection';
import ToneSection from './components/sections/ToneSection';
import VisualSection from './components/sections/VisualSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import UISystemSection from './components/sections/UISystemSection';
import ExtrasSection from './components/sections/ExtrasSection';
import { Language, translations } from './i18n/translations';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');

  useEffect(() => {
    const sectionIds = [
      'intro',
      'ideology',
      'audience',
      'tone',
      'visual',
      'applications',
      'ui', // без extras – навигация только по основным разделам
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // выставляем активный раздел при первой загрузке

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // сразу подсвечиваем пункт в навигации
    setActiveSection(sectionId);

    // аккуратный скролл с небольшим отступом сверху
    const rect = element.getBoundingClientRect();
    const offset = 80; // можно подправить, если нужно выше/ниже
    const targetY = rect.top + window.scrollY - offset;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <div
      style={{
        background: theme.gradients.primary,
        minHeight: '100vh',
        color: theme.colors.white,
        fontFamily:
          "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <LanguageSwitcher
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      <IntroSection language={currentLanguage} />
      <IdeologySection language={currentLanguage} />
      <AudienceSection language={currentLanguage} />
      <ToneSection language={currentLanguage} />
      <VisualSection language={currentLanguage} />
      <ApplicationsSection language={currentLanguage} />
      <UISystemSection language={currentLanguage} />
      <ExtrasSection language={currentLanguage} />

      <footer
        style={{
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 8rem)',
          textAlign: 'center',
          borderTop: `1px solid ${theme.colors.baseBlueGreen}`,
        }}
      >
        <div
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            background: theme.gradients.accent,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          Rezzy
        </div>
        <p
          style={{
            fontSize: '1rem',
            color: theme.colors.mediumGray,
          }}
        >
          {translations[currentLanguage].footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
