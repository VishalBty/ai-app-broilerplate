export const COLORS = {
  bg: '#2d2b4e',
  bgLight: '#3a3860',
  bgCard: '#3d3b64',
  amber: '#f5a623',
  amberLight: '#f7c05a',
  purple: '#7c6fcd',
  purpleLight: '#9b8ee0',
  text: '#ffffff',
  textMuted: '#a09fc0',
  green: '#4cd964',
  teal: '#5ac8fa',
  coral: '#ff6b6b',
};

export const USERS = {
  sajon: { id: 'sajon', name: 'Sajon', color: '#e8a87c', emoji: '🧔' },
  me:    { id: 'me',    name: 'Me',    color: '#7c6fcd', emoji: '😎' },
  cody:  { id: 'cody',  name: 'Cody',  color: '#4a90d9', emoji: '🧑' },
  khalifa: { id: 'khalifa', name: 'Khalifa', color: '#e8a87c', emoji: '🧑‍🦱' },
  anna:  { id: 'anna',  name: 'Anna',  color: '#e8748a', emoji: '👩' },
  lisa:  { id: 'lisa',  name: 'Lisa',  color: '#9b8ee0', emoji: '👩‍🦰' },
  sing:  { id: 'sing',  name: 'Sing',  color: '#e8a87c', emoji: '🧑‍🦲' },
  alex:  { id: 'alex',  name: 'Alex',  color: '#4cd964', emoji: '🧑‍🦱' },
  bryan: { id: 'bryan', name: 'Bryan', color: '#5ac8fa', emoji: '👨' },
  mike:  { id: 'mike',  name: 'Mike',  color: '#9b8ee0', emoji: '🧑' },
};

export const RECENT_SPLITS = [
  { id: 1, title: 'Team Dinner', total: 750.86, date: '2024-04-10', members: ['me', 'cody', 'khalifa'] },
  { id: 2, title: 'Weekend Trip', total: 678.56, date: '2024-04-05', members: ['me', 'anna', 'lisa'] },
  { id: 3, title: 'Grocery Run', total: 124.30, date: '2024-04-01', members: ['me', 'cody'] },
];

export const NEARBY_FRIENDS = ['anna', 'khalifa', 'lisa'];
export const RECENTLY_SPLIT_WITH = ['sing', 'alex', 'bryan', 'mike'];

export const SPLIT_PARTICIPANTS = [
  { userId: 'me',     amount: 450.00,  color: '#5ac8fa' },
  { userId: 'cody',   amount: 200.86,  color: '#9b8ee0' },
  { userId: 'khalifa',amount: 100.00,  color: '#ff9f7f' },
];
