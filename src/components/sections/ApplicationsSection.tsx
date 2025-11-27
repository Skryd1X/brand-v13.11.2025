import { useState } from 'react';
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
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface ApplicationsSectionProps {
  language: Language;
}

// Ключи галерей = разделы
type GalleryKey =
  | 'vizit'
  | 'merch'
  | 'email'
  | 'pencAndBook'
  | 'buklet'
  | 'podarKard';

// Реальные картинки из public/... (только существующие файлы)
const galleries: Record<GalleryKey, string[]> = {
  vizit: ['/vizit/viz2.png', '/vizit/vizit1.png'],
  merch: [
    '/merch/fut.png',
    '/merch/hud.png',
    '/merch/kovrik.png',
    '/merch/paket.png',
    '/merch/svit.png',
    '/merch/kruj.png',
  ],
  email: ['/email/gmail.png'],
  pencAndBook: ['/penc and book/blok.png', '/penc and book/ruch.png'],
  buklet: ['/buklet/buklet.png', '/buklet/baner.png', '/buklet/baner2.png'],
  podarKard: ['/podar kard/podaroch.png'],
};

const galleryTitles: Record<GalleryKey, string> = {
  vizit: 'Визитки команды',
  merch: 'Мерч (футболки, кружки)',
  email: 'Email-рассылки',
  pencAndBook: 'Ручки/блокноты',
  buklet: 'Буклеты и плакаты',
  podarKard: 'Подарочные карты',
};

export default function ApplicationsSection({}: ApplicationsSectionProps) {
  const [activeGallery, setActiveGallery] = useState<GalleryKey | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openGallery = (key: GalleryKey) => {
    setActiveGallery(key);
    setLightboxIndex(null);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setLightboxIndex(null);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const currentImages =
    activeGallery !== null ? galleries[activeGallery] : [];

  const showPrev = () => {
    if (!activeGallery || currentImages.length === 0) return;
    setLightboxIndex(prev =>
      prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length,
    );
  };

  const showNext = () => {
    if (!activeGallery || currentImages.length === 0) return;
    setLightboxIndex(prev =>
      prev === null ? 0 : (prev + 1) % currentImages.length,
    );
  };

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
                border: '1px solid rgba(0,255,200,0.15)',
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
                border: '1px solid rgba(0,255,200,0.15)',
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
                border: '1px solid rgba(0,255,200,0.15)',
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
                border: '1px solid rgba(0,255,200,0.15)',
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

        {/* ДЛЯ ПАРТНЁРОВ */}
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
                    border: '1px solid rgba(0,255,200,0.15)',
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
              { id: 'vizit' as GalleryKey, icon: FileText, title: 'Визитки команды' },
              { id: 'merch' as GalleryKey, icon: Shirt, title: 'Мерч (футболки, кружки)' },
              { id: 'email' as GalleryKey, icon: Mail, title: 'Email-рассылки' },
              { id: 'pencAndBook' as GalleryKey, icon: FileText, title: 'Ручки/блокноты' },
              { id: 'buklet' as GalleryKey, icon: FileText, title: 'Буклеты и плакаты' },
              { id: 'podarKard' as GalleryKey, icon: FileText, title: 'Подарочные карты' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => openGallery(item.id)}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: '1px solid rgba(0,255,200,0.18)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition:
                      'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease',
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow =
                      '0 14px 30px rgba(0,0,0,0.5)';
                    el.style.borderColor = 'rgba(0,255,200,0.7)';
                    el.style.background = '#062d3f';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                    el.style.borderColor = 'rgba(0,255,200,0.18)';
                    el.style.background = theme.colors.baseBlueGreen;
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
                </button>
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
                    border: '1px solid rgba(0,255,200,0.08)',
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
              border: '1px solid rgba(0,255,200,0.15)',
            }}
          >
            <img
              src="/rezzy-logo-alt.png"
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
                    border: '1px solid rgba(0,255,200,0.12)',
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

      {/* МОДАЛЬНАЯ ГАЛЕРЕЯ: сетка превью */}
      {activeGallery && (
        <div
          onClick={closeGallery}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 8, 20, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 9998,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1100px',
              maxHeight: '90vh',
              background: theme.colors.baseBlueGreen,
              borderRadius: theme.borderRadius.lg || theme.borderRadius.md,
              boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid rgba(0,255,200,0.28)',
            }}
          >
            <div
              style={{
                padding: '0.9rem 1.6rem',
                borderBottom: `1px solid ${theme.colors.baseNavy}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: theme.colors.mediumGray,
                    marginBottom: '0.25rem',
                  }}
                >
                  Галерея материалов
                </div>
                <h4
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: theme.colors.white,
                  }}
                >
                  {galleryTitles[activeGallery]}
                </h4>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: theme.colors.lightGray,
                  cursor: 'pointer',
                  padding: '0.25rem',
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div
              style={{
                padding: '1.4rem 1.6rem 1.6rem',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1.1rem',
                  maxHeight: 'calc(90vh - 120px)',
                  overflowY: 'auto',
                  paddingRight: '0.2rem',
                }}
              >
                {currentImages.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => openLightbox(i)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      padding: 0,
                      borderRadius: theme.borderRadius.sm,
                      overflow: 'visible',
                      position: 'relative',
                      paddingInline: '2px',
                      paddingBlock: '2px',
                      boxShadow:
                        '0 0 0 1px rgba(0,255,200,0.18)',
                      transition:
                        'transform 0.18s ease, box-shadow 0.18s ease',
                      zIndex: 1,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.transform = 'translateY(-2px)';
                      el.style.boxShadow =
                        '0 0 0 2px rgba(0,255,200,0.95), 0 10px 24px rgba(0,0,0,0.55)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow =
                        '0 0 0 1px rgba(0,255,200,0.18)';
                    }}
                  >
                    <div
                      style={{
                        borderRadius: theme.borderRadius.sm,
                        overflow: 'hidden',
                        background: 'rgba(0,20,34,0.95)',
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        style={{
                          width: '100%',
                          height: '140px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ЛАЙТБОКС: большое фото + стрелки + нижний слайдер */}
      {activeGallery &&
        lightboxIndex !== null &&
        currentImages[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 5, 15, 0.94)',
              backdropFilter: 'blur(6px)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'clamp(0.5rem, 3vw, 1.5rem)',
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '960px',
                maxHeight: '88vh',
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.lg || theme.borderRadius.md,
                boxShadow: '0 28px 60px rgba(0,0,0,0.75)',
                border: '1px solid rgba(0,255,200,0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                overflow: 'hidden',
              }}
            >
              <button
                type="button"
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '0.6rem',
                  right: '0.8rem',
                  border: 'none',
                  background: 'rgba(0,0,0,0.35)',
                  borderRadius: '999px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.lightGray,
                  cursor: 'pointer',
                  zIndex: 2,
                }}
              >
                <X size={18} />
              </button>

              {/* Основное изображение */}
              <div
                style={{
                  flex: 1,
                  padding: 'clamp(1.2rem, 3vw, 1.8rem) clamp(1.4rem, 3vw, 2.1rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: theme.colors.baseNavy,
                }}
              >
                <img
                  src={currentImages[lightboxIndex]}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: theme.borderRadius.md,
                    boxShadow: '0 0 0 1px rgba(0,255,200,0.3)',
                  }}
                />
              </div>

              {/* Нижний слайдер превью */}
              {currentImages.length > 1 && (
                <div
                  style={{
                    padding: '0.7rem 1.4rem 1rem',
                    background: 'rgba(2, 30, 46, 0.98)',
                    borderTop: '1px solid rgba(0,255,200,0.18)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      overflowX: 'auto',
                      paddingBottom: '0.35rem',
                    }}
                  >
                    {currentImages.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          flex: '0 0 auto',
                          width: '80px',
                          height: '56px',
                          borderRadius: theme.borderRadius.sm,
                          overflow: 'hidden',
                          position: 'relative',
                          boxShadow:
                            i === lightboxIndex
                              ? '0 0 0 2px rgba(0,255,200,0.95)'
                              : '0 0 0 1px rgba(0,255,200,0.35)',
                          opacity: i === lightboxIndex ? 1 : 0.72,
                          transform:
                            i === lightboxIndex ? 'translateY(0)' : 'translateY(1px)',
                          transition:
                            'opacity 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease',
                          background: 'rgba(0,14,26,0.95)',
                        }}
                      >
                        <img
                          src={src}
                          alt=""
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </button>
                    ))}
                  </div>
                  <div
                    style={{
                      marginTop: '0.3rem',
                      fontSize: '0.75rem',
                      color: theme.colors.mediumGray,
                      textAlign: 'center',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {lightboxIndex + 1} / {currentImages.length}
                  </div>
                </div>
              )}

              {/* Стрелки навигации поверх */}
              {currentImages.length > 1 && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                    padding: '0 0.8rem',
                  }}
                >
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    style={{
                      pointerEvents: 'auto',
                      border: 'none',
                      background: 'rgba(0, 0, 0, 0.45)',
                      borderRadius: '999px',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      showNext();
                    }}
                    style={{
                      pointerEvents: 'auto',
                      border: 'none',
                      background: 'rgba(0, 0, 0, 0.45)',
                      borderRadius: '999px',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
    </section>
  );
}
