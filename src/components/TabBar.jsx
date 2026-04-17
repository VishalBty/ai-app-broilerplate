import { HomeIcon, PredictionsIcon, ActivityIcon, ProfileIcon } from './Icons';

const tabs = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'predictions', label: 'Predictions', Icon: PredictionsIcon },
  { id: 'activity', label: 'Activity', Icon: ActivityIcon },
  { id: 'profile', label: 'Profile', Icon: ProfileIcon },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="predecy-tabbar">
      {tabs.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`tab-item ${activeTab === id ? 'active' : ''}`}
          onClick={() => onTabChange(id)}
        >
          <Icon filled={activeTab === id} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
