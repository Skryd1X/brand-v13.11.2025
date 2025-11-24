import { Language } from '../../i18n/translations';
import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import {
  Smartphone,
  Monitor,
  Share2,
  Users,
  ShoppingBag,
  FileText,
  Megaphone,
  QrCode,
  Mail,
  Shirt,
  Building,
  Car,
} from 'lucide-react';

interface ApplicationsSectionProps {
  language: Language;
}

export default function ApplicationsSection({}: ApplicationsSectionProps) {
  return (
    <section
      id="applications"
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
          number="05"
          title="Применение стиля"
          subtitle="Как бренд Rezzy проявляется в цифровой и офлайн-среде"
        />

        {/* DIGITAL */}
        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Digital и интерфейс
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Smartphone
                  size={24}
                  color={theme.colors.accentPrimary}
                />
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                  }}
                >
                  Мобильное приложение
                </h4>
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                  lineHeight: '1.6',
                }}
              >
                Основная платформа для бронирования с неоморфным
                дизайном.
              </p>
            </div>
            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Monitor
                  size={24}
                  color={theme.colors.accentPrimary}
                />
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                  }}
                >
                  Веб-платформа
                </h4>
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                  lineHeight: '1.6',
                }}
              >
                Десктопная версия с расширенными возможностями.
              </p>
            </div>
          </div>
        </NeoCard>

        {/* КОММУНИКАЦИИ */}
        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Megaphone size={28} color={theme.colors.accentPrimary} />
            Коммуникации
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Share2
                  size={24}
                  color={theme.colors.accentPrimary}
                />
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                  }}
                >
                  Социальные сети
                </h4>
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                }}
              >
                Визуал, отзывы, видео. Примеры постов:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '5 причин бронировать через Rezzy',
                  'Топ кафе недели',
                  'Отзывы пользователей',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.accentPrimary,
                      marginBottom: '0.5rem',
                      paddingLeft: '1rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{ position: 'absolute', left: 0 }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <Megaphone
                  size={24}
                  color={theme.colors.accentPrimary}
                />
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                  }}
                >
                  Реклама
                </h4>
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: theme.colors.lightGray,
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                }}
              >
                Баннеры Instagram/Google Ads + офлайн QR-коды.
              </p>
            </div>
          </div>
        </NeoCard>

        {/* ДЛЯ ПАРТНЕРОВ */}
        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Users size={28} color={theme.colors.accentPrimary} />
            Для партнёров
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            {[
              {
                icon: QrCode,
                title: 'Наклейки «Мы в Rezzy»',
                desc: 'Фирменные стикеры на входе в заведение.',
              },
              {
                icon: QrCode,
                title: 'QR-коды на столах',
                desc: 'Для быстрого бронирования в приложении.',
              },
              {
                icon: FileText,
                title: 'POS-материалы',
                desc: 'Меню-холдеры, флаеры, таблички.',
              },
              {
                icon: FileText,
                title: 'Гайд для партнёров',
                desc: 'Как рассказать клиентам про Rezzy.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <Icon
                    size={24}
                    color={theme.colors.accentPrimary}
                    style={{ flexShrink: 0 }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: theme.colors.white,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: theme.colors.lightGray,
                        marginTop: '0.5rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </NeoCard>

        {/* ДОП. МАТЕРИАЛЫ */}
        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <ShoppingBag
              size={28}
              color={theme.colors.accentPrimary}
            />
            Дополнительные материалы
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
              gap: 'clamp(1.25rem, 3vw, 1.75rem)',
            }}
          >
            {[
              { icon: FileText, title: 'Визитки команды' },
              { icon: Shirt, title: 'Мерч (футболки, кружки)' },
              { icon: Mail, title: 'Email-рассылки' },
              { icon: FileText, title: 'Ручки/блокноты' },
              { icon: FileText, title: 'Буклеты и плакаты' },
              { icon: FileText, title: 'Подарочные карты' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <Icon
                    size={20}
                    color={theme.colors.accentPrimary}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: theme.colors.white,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </NeoCard>

        {/* КЛАССИЧЕСКИЕ ЭЛЕМЕНТЫ */}
        <NeoCard>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Классические элементы брендбука
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: 'clamp(1.25rem, 3vw, 1.75rem)',
            }}
          >
            {[
              { icon: FileText, title: 'Деловая документация' },
              { icon: Monitor, title: 'Фирменная презентация' },
              { icon: FileText, title: 'Полиграфия' },
              { icon: ShoppingBag, title: 'Сувенирная продукция' },
              { icon: Shirt, title: 'Имиджевая продукция' },
              { icon: Building, title: 'Наружная реклама' },
              { icon: Shirt, title: 'Спецодежда' },
              { icon: Building, title: 'Интерьер' },
              { icon: Car, title: 'Корпоративный транспорт' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Icon
                    size={18}
                    color={theme.colors.mediumGray}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.lightGray,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </NeoCard>

        {/* МОКАП + РАЗМЕРЫ НОСИТЕЛЕЙ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '3rem',
          }}
        >
          <NeoCard
            style={{
              background: theme.colors.baseNavy,
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/src/assets/{148DCD25-7111-42CF-AFEF-36A4C8400F43}.png"
              alt="Rezzy App Mockup"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '500px',
                objectFit: 'contain',
                borderRadius: theme.borderRadius.md,
              }}
            />
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
              Примеры носителей
            </h3>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}
            >
              Фирменный стиль Rezzy адаптируется под различные
              носители, сохраняя узнаваемость и современный вид.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Иконка приложения', value: '1024×1024 px' },
                { label: 'App Store скриншоты', value: '1242×2688 px' },
                { label: 'Баннеры соцсетей', value: '1200×628 px' },
                { label: 'Визитки', value: '90×50 mm' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      color: theme.colors.white,
                      fontWeight: '600',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.accentPrimary,
                      fontWeight: '700',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(2rem, 5vw, 4rem)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        05 / ПРИМЕНЕНИЕ СТИЛЯ
      </div>
    </section>
  );
}
