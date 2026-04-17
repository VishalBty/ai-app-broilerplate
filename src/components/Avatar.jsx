import { USERS } from '../data';

export default function Avatar({ userId, size = 44, showPlus = false, onAdd, className = '' }) {
  const user = USERS[userId];
  if (!user) return null;

  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    background: `${user.color}33`,
    border: `2px solid ${user.color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size * 0.45,
    flexShrink: 0,
    position: 'relative',
  };

  return (
    <div className={`relative inline-flex flex-col items-center gap-1 ${className}`}>
      <div style={style}>{user.emoji}</div>
      {showPlus && (
        <button
          onClick={onAdd}
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#f5a623',
            border: '2px solid #2d2b4e',
            color: 'white',
            fontSize: 11,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          +
        </button>
      )}
    </div>
  );
}

export function AvatarStack({ userIds, size = 36, maxShow = 4 }) {
  const shown = userIds.slice(0, maxShow);
  return (
    <div className="flex items-center">
      {shown.map((id, i) => (
        <div key={id} style={{ marginLeft: i === 0 ? 0 : -10, zIndex: shown.length - i }}>
          <Avatar userId={id} size={size} />
        </div>
      ))}
    </div>
  );
}
