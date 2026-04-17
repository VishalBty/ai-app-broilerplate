import { useState } from 'react';
import Avatar, { AvatarStack } from './Avatar';
import { USERS, NEARBY_FRIENDS, RECENTLY_SPLIT_WITH, RECENT_SPLITS, SPLIT_PARTICIPANTS } from '../data';

const BG = '#2d2b4e';
const BG2 = '#252345';
const CARD = '#353360';
const AMBER = '#f5a623';

export default function HomeScreen({ onSplitNow }) {
  const [selectedFriends, setSelectedFriends] = useState(['cody', 'khalifa', 'anna']);

  const toggleFriend = (id) => {
    setSelectedFriends(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ background: BG, minHeight: '100vh', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ padding: '56px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: '#a09fc0', fontSize: 14, margin: 0 }}>Orix</p>
          <h1 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0 }}>Bill Splitter</h1>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar userId="sajon" size={48} />
          <p style={{ color: '#a09fc0', fontSize: 11, margin: '4px 0 0', textAlign: 'center' }}>Sajon</p>
        </div>
      </div>

      {/* Bill Card */}
      <div style={{ margin: '0 16px', background: '#f5d99a', borderRadius: 20, padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: '#5a4a2a', fontSize: 14, margin: '0 0 4px' }}>Total Bill</p>
          <h2 style={{ color: '#2d2010', fontSize: 32, fontWeight: 800, margin: '0 0 16px' }}>$750.86</h2>
          <button
            onClick={onSplitNow}
            style={{
              background: '#2d2b4e',
              color: 'white',
              border: 'none',
              borderRadius: 14,
              padding: '12px 24px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: 0.3,
            }}
          >
            Split Now
          </button>
        </div>

        {/* Split With vertical list */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <p style={{ color: '#5a4a2a', fontSize: 12, margin: '0 0 8px', fontWeight: 600 }}>Split With</p>
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: '10px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            {selectedFriends.slice(0, 3).map(id => (
              <Avatar key={id} userId={id} size={36} />
            ))}
            <button
              onClick={() => {}}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: AMBER, border: 'none',
                color: 'white', fontSize: 20, fontWeight: 300,
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Previous Split */}
      <div style={{ margin: '12px 16px', background: CARD, borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#4a4870', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#a09fc0', fontSize: 16 }}>ℹ</span>
        </div>
        <div>
          <p style={{ color: '#a09fc0', fontSize: 13, margin: 0 }}>Your previous split</p>
          <p style={{ color: 'white', fontSize: 15, fontWeight: 600, margin: '2px 0 0' }}>$678.56</p>
        </div>
      </div>

      {/* Search + Nearby Friends */}
      <div style={{ margin: '12px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        {/* Search button */}
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: '#f5d99a', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, cursor: 'pointer',
        }}>
          <span style={{ fontSize: 22 }}>🔍</span>
        </div>

        {/* Nearby Friends */}
        <div style={{ flex: 1, background: CARD, borderRadius: 16, padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <p style={{ color: 'white', fontSize: 14, fontWeight: 600, margin: 0 }}>Nearby Friends</p>
            <span style={{ color: AMBER, fontSize: 12, cursor: 'pointer' }}>See all</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {NEARBY_FRIENDS.map(id => (
              <div key={id} style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <Avatar userId={id} size={44} />
                  <button
                    onClick={() => toggleFriend(id)}
                    style={{
                      position: 'absolute', bottom: -2, right: -2,
                      width: 18, height: 18, borderRadius: '50%',
                      background: selectedFriends.includes(id) ? '#4cd964' : AMBER,
                      border: `2px solid ${BG}`,
                      color: 'white', fontSize: 11,
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', cursor: 'pointer', padding: 0,
                    }}
                  >
                    {selectedFriends.includes(id) ? '✓' : '+'}
                  </button>
                </div>
                <p style={{ color: '#a09fc0', fontSize: 11, margin: '4px 0 0' }}>{USERS[id].name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Split */}
      <div style={{ margin: '12px 16px 32px' }}>
        <p style={{ color: 'white', fontSize: 14, fontWeight: 600, margin: '0 0 12px' }}>Recently Split</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {RECENTLY_SPLIT_WITH.map(id => (
            <div key={id} style={{ textAlign: 'center' }}>
              <Avatar userId={id} size={48} />
              <p style={{ color: '#a09fc0', fontSize: 11, margin: '6px 0 0' }}>{USERS[id].name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
