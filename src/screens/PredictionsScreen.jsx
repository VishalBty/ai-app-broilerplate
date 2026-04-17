import { predictions } from '../data/mockData';

export default function PredictionsScreen() {
  return (
    <div className="scroll-content page-bg-gradient" style={{ minHeight: '100vh', padding: '0 16px' }}>
      <div style={{ paddingTop: 52, paddingBottom: 20 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--predecy-text)' }}>Predictions</h1>
        <p style={{ fontSize: 14, color: 'var(--predecy-muted)', marginTop: 4 }}>Browse & place your bets</p>
      </div>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}>
        {['All', 'Gaming', 'Sports', 'Tech', 'Finance'].map((cat, i) => (
          <button
            key={cat}
            style={{
              padding: '6px 16px', borderRadius: 99, border: 'none', cursor: 'pointer',
              background: i === 0 ? 'var(--predecy-purple)' : '#fff',
              color: i === 0 ? '#fff' : 'var(--predecy-muted)',
              fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap',
              boxShadow: '0 1px 6px rgba(108,71,255,0.08)',
            }}
          >{cat}</button>
        ))}
      </div>

      {predictions.map((pred) => (
        <div key={pred.id} className="predecy-card" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--predecy-text)', flex: 1, paddingRight: 8 }}>
              {pred.question}
            </p>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: 10, color: 'var(--predecy-muted)' }}>Ends in</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--predecy-purple)' }}>{pred.endsIn}</p>
            </div>
          </div>

          {pred.options.map((opt, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: 'var(--predecy-text)' }}>{opt.label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--predecy-purple)' }}>{opt.percentage}%</span>
              </div>
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${opt.percentage}%`, background: opt.isLeading ? 'var(--predecy-purple)' : 'var(--predecy-teal)' }}
                />
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <p style={{ fontSize: 11, color: 'var(--predecy-muted)' }}>{pred.votes.toLocaleString()} votes</p>
            <button className="btn-purple" style={{ width: 'auto', padding: '8px 20px', fontSize: 13 }}>
              Predict
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
