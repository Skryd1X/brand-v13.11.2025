import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Palette, Zap, Layers, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import BookingNotification from '../BookingNotification';
import { Language, translations } from '../../i18n/translations';

interface UISystemSectionProps {
  language: Language;
}

export default function UISystemSection({ language }: UISystemSectionProps) {
  const t = translations[language].ui;
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const tables = [
    { id: 1, number: 'A1', seats: 2, status: 'available' },
    { id: 2, number: 'A2', seats: 4, status: 'occupied' },
    { id: 3, number: 'A3', seats: 2, status: 'available' },
    { id: 4, number: 'B1', seats: 6, status: 'available' },
    { id: 5, number: 'B2', seats: 4, status: 'occupied' },
    { id: 6, number: 'B3', seats: 2, status: 'available' },
    { id: 7, number: 'C1', seats: 8, status: 'available' },
    { id: 8, number: 'C2', seats: 4, status: 'available' },
  ];

  const timeSlots = [
    { time: '18:00', available: true },
    { time: '18:30', available: false },
    { time: '19:00', available: true },
    { time: '19:30', available: true },
    { time: '20:00', available: false },
    { time: '20:30', available: true },
    { time: '21:00', available: true },
    { time: '21:30', available: false },
  ];

  const handleBooking = () => {
    if (selectedTable && selectedTime) {
      setShowNotification(true);
    }
  };

  return (
    <section
      id="ui"
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
        <SectionHeader number="06" title={t.title} subtitle={t.subtitle} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {t.principles.map((principle, index) => {
            const icons = [Palette, Zap, Layers, Clock];
            const gradients = [
              theme.gradients.accent,
              theme.gradients.vibrant,
              theme.gradients.purple,
              theme.gradients.accent,
            ];

            const Icon = icons[index] || Palette;
            const background = gradients[index] || theme.gradients.accent;

            return (
              <NeoCard key={principle.title} hover>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: 'clamp(1.25rem, 3vw, 1.5rem)',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(48px, 9vw, 56px)',
                      height: 'clamp(48px, 9vw, 56px)',
                      borderRadius: theme.borderRadius.sm,
                      background,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon
                      size={28}
                      color={theme.colors.white}
                      style={{
                        width: 'clamp(22px, 5.5vw, 28px)',
                        height: 'clamp(22px, 5.5vw, 28px)',
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                      fontWeight: '700',
                      color: theme.colors.white,
                    }}
                  >
                    {principle.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 'clamp(0.975rem, 2.4vw, 1.125rem)',
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

        <NeoCard
          style={{
            marginBottom: 'clamp(2.25rem, 4.5vw, 3rem)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 1.75rem)',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            {t.components.title}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                {t.components.buttons}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                }}
              >
                <button
                  style={{
                    padding: '0.875rem 1.75rem',
                    borderRadius: theme.borderRadius.md,
                    background: theme.gradients.accent,
                    color: theme.colors.white,
                    border: 'none',
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 16px rgba(22, 160, 133, 0.3)',
                  }}
                >
                  {t.components.primary}
                </button>

                <button
                  style={{
                    padding: '0.875rem 1.75rem',
                    borderRadius: theme.borderRadius.md,
                    background: theme.colors.baseBlueGreen,
                    color: theme.colors.white,
                    border: `1px solid rgba(22, 160, 133, 0.3)`,
                    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {t.components.secondary}
                </button>
              </div>
            </div>
          </div>
        </NeoCard>

        <div
          style={{
            marginBottom: 'clamp(2.25rem, 4.5vw, 3rem)',
          }}
        >
          <NeoCard>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 1.75rem)',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              {t.booking.title}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Users size={20} color={theme.colors.accentPrimary} />
                  {t.booking.selectTable}
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(80px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() =>
                        table.status === 'available' &&
                        setSelectedTable(table.id)
                      }
                      disabled={table.status === 'occupied'}
                      style={{
                        padding: '0.875rem',
                        borderRadius: theme.borderRadius.sm,
                        border:
                          selectedTable === table.id
                            ? `2px solid ${theme.colors.accentPrimary}`
                            : table.status === 'available'
                            ? `1px solid rgba(22, 160, 133, 0.3)`
                            : 'none',
                        cursor:
                          table.status === 'available'
                            ? 'pointer'
                            : 'not-allowed',
                        background:
                          selectedTable === table.id
                            ? theme.gradients.accent
                            : table.status === 'occupied'
                            ? 'rgba(32, 44, 72, 0.6)'
                            : theme.colors.baseBlueGreen,
                        color:
                          table.status === 'occupied'
                            ? theme.colors.mediumGray
                            : theme.colors.white,
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s',
                        opacity: table.status === 'occupied' ? 0.7 : 1,
                        boxShadow:
                          selectedTable === table.id
                            ? '0 4px 16px rgba(22, 160, 133, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : table.status === 'available'
                            ? '0 2px 8px rgba(22, 160, 133, 0.15), inset 0 1px 0 rgba(22, 160, 133, 0.1)'
                            : '0 0 8px rgba(255, 82, 82, 0.3), inset 0 0 16px rgba(255, 82, 82, 0.1)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.95rem',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {table.number}
                      </div>
                      <div
                        style={{ fontSize: '0.75rem', opacity: 0.8 }}
                      >{`${table.seats} ${t.booking.seats}`}</div>
                    </button>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.875rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '4px',
                        background: theme.colors.baseBlueGreen,
                      }}
                    />
                    <span style={{ color: theme.colors.lightGray }}>
                      {t.booking.available}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '4px',
                        background: 'rgba(32, 44, 72, 0.6)',
                        opacity: 0.7,
                        boxShadow: '0 0 8px rgba(255, 82, 82, 0.3)',
                      }}
                    />
                    <span style={{ color: theme.colors.lightGray }}>
                      {t.booking.occupied}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '4px',
                        background: theme.gradients.accent,
                      }}
                    />
                    <span style={{ color: theme.colors.lightGray }}>
                      {t.booking.selected}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Clock size={20} color={theme.colors.accentPrimary} />
                  {t.booking.selectTime}
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(80px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        slot.available && setSelectedTime(slot.time)
                      }
                      disabled={!slot.available}
                      style={{
                        padding: '0.75rem',
                        borderRadius: theme.borderRadius.sm,
                        border:
                          selectedTime === slot.time
                            ? `2px solid ${theme.colors.accentPrimary}`
                            : slot.available
                            ? `1px solid rgba(22, 160, 133, 0.3)`
                            : 'none',
                        cursor: slot.available ? 'pointer' : 'not-allowed',
                        background:
                          selectedTime === slot.time
                            ? theme.gradients.accent
                            : slot.available
                            ? theme.colors.baseBlueGreen
                            : theme.colors.baseNavy,
                        color: slot.available
                          ? theme.colors.white
                          : theme.colors.mediumGray,
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s',
                        opacity: slot.available ? 1 : 0.5,
                        boxShadow:
                          selectedTime === slot.time
                            ? '0 4px 16px rgba(22, 160, 133, 0.5)'
                            : slot.available
                            ? '0 2px 8px rgba(22, 160, 133, 0.15)'
                            : 'none',
                      }}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedTable || !selectedTime}
              style={{
                marginTop: '2rem',
                width: '100%',
                padding: '0.9rem 2rem',
                borderRadius: theme.borderRadius.md,
                background:
                  selectedTable && selectedTime
                    ? theme.gradients.accent
                    : theme.colors.baseNavy,
                color:
                  selectedTable && selectedTime
                    ? theme.colors.white
                    : theme.colors.mediumGray,
                border: 'none',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                fontWeight: '700',
                cursor:
                  selectedTable && selectedTime ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                opacity: selectedTable && selectedTime ? 1 : 0.5,
                boxShadow:
                  selectedTable && selectedTime
                    ? '0 4px 16px rgba(22, 160, 133, 0.3)'
                    : 'none',
              }}
            >
              {t.booking.bookBtn}
            </button>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
              }}
            >
              <p
                style={{
                  fontSize: '0.875rem',
                  color: theme.colors.lightGray,
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ color: theme.colors.white }}>
                  {t.booking.important}
                </strong>{' '}
                {t.booking.importantText}
              </p>
            </div>
          </NeoCard>
        </div>
      </div>

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
        06 / {t.label}
      </div>

      <BookingNotification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        restaurant={t.booking.restaurant}
        time={selectedTime || ''}
        guests={2}
        language={language}
      />
    </section>
  );
}
