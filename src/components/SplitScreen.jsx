import { useState, useCallback } from 'react';
import Avatar, { AvatarStack } from './Avatar';
import { USERS, SPLIT_PARTICIPANTS } from '../data';
import ConfirmModal from './ConfirmModal';

const BG = '#2d2b4e';
const CARD = '#353360';
const AMBER = '#f5a623';

const TRACK_COLORS = ['#5ac8fa', '#9b8ee0', '#ff9f7f'];

function fmt(n) {
  return `$${Number(n).toFixed(2)}`;
}

function AmountSlider({ participant, totalBill, value, onChange, trackColor }) {
  const user = USERS[participant.userId];
  const pct = Math.round((value / totalBill) * 100);

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar userId={participant.userId} size={38} />
          <span style={{ color: 'white', fontSize: 15, fontWeight: 600 }}>{user.name}</span>
        </div>
        <span style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>{fmt(value)}</span>
      </div>
      <div style={{ position: 'relative' }}>
        <input
          type="range"
          min={0}
          max={totalBill}
          step={0.01}
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
          style={{
            width: '100%',
            background: `linear-gradient(to right, ${trackColor} ${pct}%, #4a4870 ${pct}%)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SplitScreen({ onBack }) {
  const totalBill = 750.86;
  const initialAmounts = { me: 450.00, cody: 200.86, khalifa: 100.00 };

  const [amounts, setAmounts] = useState(initialAmounts);
  const [showConfirm, setShowConfirm] = useState(false);

  const participants = ['me', 'cody', 'khalifa'];

  const handleChange = useCallback((userId, newVal) => {
    const others = participants.filter(p => p !== userId);
    const remaining = Math.max(0, totalBill - newVal);

    const otherTotal = others.reduce((s, id) => s + amounts[id], 0);
    const newAmounts = { ...amounts, [userId]: newVal };

    if (otherTotal > 0) {
      others.forEach(id => {
        newAmounts[id] = parseFloat(((amounts[id] / otherTotal) * remaining).toFixed(2));
      });
    } else {
      const share = parseFloat((remaining / others.length).toFixed(2));
      others.forEach(id => { newAmounts[id] = share; });
    }

    // Fix rounding
    const sum = Object.values(newAmounts).reduce((a, b) => a + b, 0);
    const diff = parseFloat((totalBill - sum).toFixed(2));
    if (diff !== 0) newAmounts[participants[participants.length - 1]] += diff;

    setAmounts(newAmounts);
  }, [amounts, participants, totalBill]);

  const remaining = parseFloat((totalBill - Object.values(amounts).reduce((a, b) => a + b, 0)).toFixed(2));

  return (
    <>
      <div style={{ background: BG, minHeight: '100vh', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ padding: '56px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={onBack}
            style={{
              width: 40, height: 40, borderRadius: 12,
              background: '#4a4870', border: 'none',
              color: 'white', fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ‹
          </button>
          <h2 style={{ color: 'white', fontSize: 18, fontWeight: 700, margin: 0 }}>Split Now</h2>
          <button style={{
            background: 'transparent', border: 'none',
            color: '#a09fc0', fontSize: 22, cursor: 'pointer', padding: 0,
          }}>⋯</button>
        </div>

        {/* Receipt Card */}
        <div style={{ margin: '0 16px 16px' }}>
          <div style={{
            background: '#f5d99a',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {/* Ticket header */}
            <div style={{ padding: '0 0 0', textAlign: 'center' }}>
              <div style={{
                background: '#2d2b4e',
                margin: '0 20px',
                borderRadius: '0 0 12px 12px',
                padding: '10px 20px',
                display: 'inline-block',
              }}>
                <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>Receipt</span>
              </div>
            </div>

            {/* Dashed separator */}
            <div style={{ padding: '12px 16px 0' }}>
              <div style={{ borderBottom: '2px dashed #d4b870', marginBottom: 12 }} />
            </div>

            {/* Title & Total */}
            <div style={{ padding: '0 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{ color: '#7a6030', fontSize: 12, margin: '0 0 2px' }}>Title</p>
                <p style={{ color: '#2d2010', fontSize: 18, fontWeight: 700, margin: 0 }}>Team Dinner</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#7a6030', fontSize: 12, margin: '0 0 2px' }}>Total bill</p>
                <p style={{ color: '#2d2010', fontSize: 18, fontWeight: 700, margin: 0 }}>$750.86</p>
              </div>
            </div>

            {/* Splitting With */}
            <div style={{ margin: '0 16px 16px', background: '#ead88a', borderRadius: 14, padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <AvatarStack userIds={participants} size={32} />
              </div>
              <p style={{ color: '#5a4a20', fontSize: 13, fontWeight: 600, margin: 0, textAlign: 'center' }}>
                Splitting With
              </p>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div style={{ margin: '0 16px', background: CARD, borderRadius: 20, padding: '20px 16px' }}>
          {participants.map((id, i) => (
            <AmountSlider
              key={id}
              participant={{ userId: id }}
              totalBill={totalBill}
              value={amounts[id]}
              onChange={val => handleChange(id, val)}
              trackColor={TRACK_COLORS[i]}
            />
          ))}

          {Math.abs(remaining) > 0.01 && (
            <div style={{
              background: remaining < 0 ? '#ff4a4a22' : '#f5a62322',
              borderRadius: 10, padding: '8px 12px', marginTop: 4,
            }}>
              <p style={{ color: remaining < 0 ? '#ff6b6b' : AMBER, fontSize: 12, margin: 0, textAlign: 'center' }}>
                {remaining > 0 ? `$${remaining.toFixed(2)} unallocated` : `Over by $${Math.abs(remaining).toFixed(2)}`}
              </p>
            </div>
          )}
        </div>

        {/* Total summary */}
        <div style={{ margin: '12px 16px', display: 'flex', justifyContent: 'space-between' }}>
          {participants.map((id, i) => (
            <div key={id} style={{ textAlign: 'center' }}>
              <p style={{ color: TRACK_COLORS[i], fontSize: 11, margin: '0 0 2px', fontWeight: 600 }}>
                {USERS[id].name}
              </p>
              <p style={{ color: 'white', fontSize: 13, fontWeight: 700, margin: 0 }}>
                {fmt(amounts[id])}
              </p>
            </div>
          ))}
        </div>

        {/* Confirm Button */}
        <div style={{ margin: '8px 16px 40px' }}>
          <button
            onClick={() => setShowConfirm(true)}
            style={{
              width: '100%',
              background: '#252345',
              border: 'none',
              borderRadius: 18,
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <span style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>Confirm Split</span>
            <div style={{
              background: AMBER,
              borderRadius: 12,
              padding: '8px 14px',
              display: 'flex',
              gap: 3,
            }}>
              {[...Array(4)].map((_, i) => (
                <span key={i} style={{ color: 'white', fontSize: 14 }}>›</span>
              ))}
            </div>
          </button>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          amounts={amounts}
          participants={participants}
          totalBill={totalBill}
          onClose={() => setShowConfirm(false)}
          onConfirm={() => {
            setShowConfirm(false);
            setTimeout(onBack, 300);
          }}
        />
      )}
    </>
  );
}
