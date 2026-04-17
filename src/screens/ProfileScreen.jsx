import { ChevronRight, MenuIcon } from '../components/Icons';
import { user, menuItems } from '../data/mockData';

export default function ProfileScreen() {
  return (
    <div className="scroll-content page-bg-gradient" style={{ minHeight: '100vh', padding: '0 16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 52, paddingBottom: 24 }}>
        <div>
          <p style={{ fontSize: 22, color: 'var(--predecy-text)', fontWeight: 400 }}>Hi!</p>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.name}</h1>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff' }}
        />
      </div>

      {/* Rank card */}
      <div className="predecy-card" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 11, color: 'var(--predecy-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Rank</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'linear-gradient(135deg, #e8e0ff, #d0c0ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26
          }}>
            {user.rankIcon}
          </div>
          <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.rank}</p>
        </div>

        {/* Progress to next rank */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--predecy-text)' }}>{user.nextRank}</span>
          <span style={{ fontSize: 12, color: 'var(--predecy-muted)' }}>{user.correctPredictions} correct predictions</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${(user.correctPredictions / user.nextRankThreshold) * 100}%` }}
          />
        </div>
      </div>

      {/* Menu list */}
      <div className="predecy-card">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-row">
            <div className="menu-row-left">
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'var(--predecy-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.id === 'logout' ? '#ff4d6d' : 'var(--predecy-purple)',
              }}>
                <MenuIcon type={item.icon} />
              </div>
              <span style={{ color: item.id === 'logout' ? '#ff4d6d' : 'var(--predecy-text)' }}>
                {item.label}
              </span>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
}
