import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { TrophyIcon, EyeIcon, CheckIcon } from '../components/Icons';
import CircleProgress from '../components/CircleProgress';
import { user, earningsData } from '../data/mockData';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#fff', borderRadius: 10, padding: '6px 12px',
        boxShadow: '0 2px 12px rgba(108,71,255,0.15)', fontSize: 13,
        fontWeight: 600, color: 'var(--predecy-purple)',
      }}>
        ${payload[0].value}
      </div>
    );
  }
  return null;
};

export default function ActivityScreen() {
  return (
    <div className="scroll-content page-bg-gradient" style={{ minHeight: '100vh', padding: '0 16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: 52, paddingBottom: 20 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--predecy-text)', lineHeight: 1.2 }}>
          Your<br />Activity
        </h1>
        <div style={{ color: 'var(--predecy-purple)', marginTop: 4 }}>
          <TrophyIcon />
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div className="stat-card" style={{ flex: 1 }}>
          <div style={{ color: 'var(--predecy-purple)', marginBottom: 8 }}><EyeIcon /></div>
          <p style={{ fontSize: 12, color: 'var(--predecy-muted)' }}>Predictions Made</p>
          <p style={{ fontSize: 26, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.totalPredictions}</p>
        </div>
        <div className="stat-card" style={{ flex: 1 }}>
          <div style={{ color: 'var(--predecy-teal)', marginBottom: 8 }}><CheckIcon /></div>
          <p style={{ fontSize: 12, color: 'var(--predecy-muted)' }}>Times you were correct</p>
          <p style={{ fontSize: 26, fontWeight: 700, color: 'var(--predecy-text)' }}>{user.totalCorrect}</p>
        </div>
      </div>

      {/* Earnings chart */}
      <div className="predecy-card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--predecy-text)' }}>
              ${user.totalEarned} Total Earn
            </p>
            <p style={{ fontSize: 12, color: 'var(--predecy-muted)', marginTop: 2 }}>15 April - 21 April</p>
          </div>
          <button style={{
            background: 'none', border: '1px solid var(--predecy-border)', borderRadius: 8,
            padding: '4px 10px', fontSize: 12, color: 'var(--predecy-muted)', cursor: 'pointer'
          }}>Weekly ▾</button>
        </div>

        <div style={{ height: 160, marginTop: 12, marginLeft: -16, marginRight: -16 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsData} margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6c47ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6c47ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00c9a7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#00c9a7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0ecff" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9090b0' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#6c47ff"
                strokeWidth={2.5}
                fill="url(#purpleGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{ textAlign: 'right', marginTop: 4 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--predecy-text)', background: '#f5f2ff', padding: '3px 8px', borderRadius: 6 }}>
            $202 Money Earned
          </span>
        </div>
      </div>

      {/* Accuracy */}
      <div className="predecy-card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--predecy-text)' }}>Predictions Accuracy</p>
          <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--predecy-purple)' }}>{user.accuracy}%</p>
        </div>
        <div className="progress-bar-track" style={{ height: 8 }}>
          <div className="progress-bar-fill" style={{ width: `${user.accuracy}%` }} />
        </div>
      </div>
    </div>
  );
}
