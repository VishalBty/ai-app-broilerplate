import { useState } from 'react';
import Avatar from './Avatar';
import { USERS } from '../data';

const AMBER = '#f5a623';
const BG = '#2d2b4e';
const TRACK_COLORS = ['#5ac8fa', '#9b8ee0', '#ff9f7f'];

export default function ConfirmModal({ amounts, participants, totalBill, onClose, onConfirm }) {
  const [done, setDone] = useState(false);

  const handleConfirm = () => {
    setDone(true);
    setTimeout(onConfirm, 1200);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#353360',
          borderRadius: '24px 24px 0 0',
          padding: '24px 20px 40px',
          width: '100%',
          maxWidth: 390,
        }}
        onClick={e => e.stopPropagation()}
      >
        {done ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
            <h3 style={{ color: 'white', fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Split Confirmed!</h3>
            <p style={{ color: '#a09fc0', fontSize: 14, margin: 0 }}>Notifications sent to everyone</p>
          </div>
        ) : (
          <>
            <div style={{ width: 36, height: 4, background: '#4a4870', borderRadius: 2, margin: '0 auto 20px' }} />
            <h3 style={{ color: 'white', fontSize: 18, fontWeight: 700, margin: '0 0 4px' }}>Confirm Split</h3>
            <p style={{ color: '#a09fc0', fontSize: 13, margin: '0 0 20px' }}>Total: <strong style={{ color: 'white' }}>${totalBill.toFixed(2)}</strong></p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {participants.map((id, i) => (
                <div key={id} style={{
                  background: '#2d2b4e',
                  borderRadius: 14,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Avatar userId={id} size={36} />
                    <span style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>{USERS[id].name}</span>
                  </div>
                  <span style={{ color: TRACK_COLORS[i], fontSize: 16, fontWeight: 700 }}>
                    ${amounts[id].toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={onClose}
                style={{
                  flex: 1, background: '#4a4870', border: 'none',
                  borderRadius: 14, padding: '14px', color: 'white',
                  fontSize: 15, fontWeight: 600, cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                style={{
                  flex: 2, background: AMBER, border: 'none',
                  borderRadius: 14, padding: '14px', color: 'white',
                  fontSize: 15, fontWeight: 700, cursor: 'pointer',
                }}
              >
                Confirm & Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
