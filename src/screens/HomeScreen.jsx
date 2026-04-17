import { BellIcon } from '../components/Icons';
import CircleProgress from '../components/CircleProgress';
import { user, predictions } from '../data/mockData';

export default function HomeScreen() {
  return (
    <div className="scroll-content page-bg-gradient" style={{ minHeight: '100vh', padding: '0 16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 52, paddingBottom: 20 }}>
        <div>
          <p style={{ fontSize: 18, color: 'var(--predecy-text)', fontWeight: 400 }}>Welcome to</p>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--predecy-text)' }}>Predecy</h1>
        </div>
        <div style={{
          width: 42, height: 42, borderRadius: 12, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(108,71,255,0.12)',
          color: 'var(--predecy-purple)', cursor: 'pointer'
        }}>
          <BellIcon />
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <div className="stat-card" style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.totalPredictions}</p>
            <p style={{ fontSize: 12, color: 'var(--predecy-muted)', marginTop: 2 }}>Predictions Made</p>
          </div>
          <div className="stat-card">
            <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.totalCorrect}</p>
            <p style={{ fontSize: 12, color: 'var(--predecy-muted)', marginTop: 2 }}>Times you were correct</p>
          </div>
        </div>

        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 100 }}>
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircleProgress percentage={user.accuracy} size={76} />
            <span style={{
              position: 'absolute', fontSize: 14, fontWeight: 700,
              color: 'var(--predecy-purple)'
            }}>{user.accuracy}%</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--predecy-muted)', marginTop: 8, textAlign: 'center' }}>Predictions<br />Accuracy</p>
        </div>
      </div>

      {/* Popular Predictions */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--predecy-text)', marginBottom: 14 }}>Popular Predictions</h2>

      {predictions.map((pred) => (
        <div key={pred.id} className="predecy-card" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--predecy-text)', flex: 1, paddingRight: 8 }}>
              {pred.question}
            </p>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: 10, color: 'var(--predecy-muted)' }}>Ends in</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--predecy-purple)' }}>{pred.endsIn}</p>
            </div>
          </div>

          {pred.options.map((opt, i) => (
            <div
              key={i}
              className={`prediction-option ${opt.isLeading ? 'purple' : 'light'}`}
            >
              <span>{opt.label}</span>
              <span style={{ fontWeight: 700 }}>{opt.percentage}%</span>
            </div>
          ))}

          <p style={{ fontSize: 11, color: 'var(--predecy-muted)', marginTop: 8 }}>{pred.votes.toLocaleString()} votes</p>
        </div>
      ))}
    </div>
  );
}
