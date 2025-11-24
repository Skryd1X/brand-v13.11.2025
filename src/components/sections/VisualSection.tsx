import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import ColorPalette from '../ColorPalette';
import { Check, X } from 'lucide-react';
import { Language } from '../../i18n/translations';

interface VisualSectionProps {
  language: Language;
}

export default function VisualSection({}: VisualSectionProps) {
  return (
    <section
      id="visual"
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
          number="04"
          title="Визуальная айдентика"
          subtitle="Логотип, цветовая палитра и фирменный стиль Rezzy"
        />

        {/* ЛОГОТИП + ОПИСАНИЕ — адаптивная сетка */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '3rem',
          }}
        >
          <NeoCard
            gradient={theme.gradients.accent}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '320px',
            }}
          >
            <img
              src="/rezzy-logo-alt.png"
              alt="Rezzy Logo"
              style={{
                width: '220px',
                height: '220px',
                objectFit: 'contain',
                marginBottom: '1.5rem',
                filter:
                  'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              }}
            />
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: theme.colors.white,
                textAlign: 'center',
              }}
            >
              Основной логотип
            </div>
          </NeoCard>

          <NeoCard>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Символика логотипа
            </h3>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}
            >
              Логотип Rezzy представляет собой стилизованную букву «R»,
              которая символизирует динамичность, движение вперёд и
              стремление к экономии времени. Главные линии отражают
              простоту использования платформы.
            </p>

            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <h4
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                  marginBottom: '1rem',
                }}
              >
                Варианты логотипа
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {[
                  'Основная версия: фирменный градиент от пурпурного к винному',
                  'Монохром: чёрный или белый для печати и особых случаев',
                  'Инверт: белый логотип на тёмном фоне',
                ].map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: theme.colors.accentPrimary,
                      }}
                    />
                    <span
                      style={{
                        color: theme.colors.lightGray,
                        fontSize: '1rem',
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </NeoCard>
        </div>

        {/* ПРАВИЛА / ЗАПРЕЩЕНО — тоже адаптивная сетка */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '3rem',
          }}
        >
          <NeoCard>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Check size={28} color={theme.colors.accentPrimary} />
              Правила использования
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Минимальный размер: 32px в высоту для digital, 15 mm для print',
                'Охранная зона: размер равен высоте буквы «R» со всех сторон',
                'Использовать только на контрастных фонах',
                'Сохранять пропорции при масштабировании',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <X size={28} color="#FF6B6B" />
              Запрещено
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Искажать пропорции, изменять фирменные цвета, добавлять эффекты',
                'Размещать на пёстрых или низкоконтрастных фонах',
                'Использовать размытие, лишние тени или фильтры',
                'Изменять расположение элементов логотипа',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#FF6B6B',
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>

        {/* ПАЛИТРА */}
        <div style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Цветовая палитра Rezzy
          </h3>
          <ColorPalette />
        </div>

        {/* ТИПОГРАФИКА — адаптивные 2 колонки */}
        <NeoCard>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '1.5rem',
            }}
          >
            Типографика
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Основной шрифт
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                }}
              >
                Montserrat Bold
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                }}
              >
                Для заголовков и акцентов.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Текстовый шрифт
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                }}
              >
                Montserrat Regular
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                }}
              >
                Для основного текста и описаний.
              </p>
            </div>
          </div>
        </NeoCard>

        {/* ИКОНОГРАФИКА / ПАТТЕРНЫ / ФОТОСТИЛЬ — адаптивная сетка */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '3rem',
          }}
        >
          <NeoCard hover>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Иконографика
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '1rem',
              }}
            >
              Иконки заведений выполнены в минималистичном стиле
              с акцентным цветом:
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {['Ресторан', 'Кофейня', 'ПК-клуб', 'Автомойка'].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '0.5rem 1rem',
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    fontSize: '0.875rem',
                    color: theme.colors.lightGray,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </NeoCard>

          <NeoCard hover>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Паттерны
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Сеточные паттерны и линии, ассоциирующиеся с планом
              заведения. Используются как фоновые элементы.
            </p>
          </NeoCard>

          <NeoCard hover>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Фото-стиль
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Минимализм, акцент на смартфон с приложением,
              светлые точки света и тёплая атмосфера заведений.
            </p>
          </NeoCard>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(2rem, 5vw, 4rem)',
          fontSize: '1rem',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        04 / ВИЗУАЛЬНАЯ АЙДЕНТИКА
      </div>
    </section>
  );
}
