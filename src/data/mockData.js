export const user = {
  id: 1,
  name: 'Leonardo',
  avatar: 'https://i.pravatar.cc/80?img=3',
  rank: 'Magician',
  rankIcon: '🧙',
  nextRank: 'Nostradamus',
  correctPredictions: 34,
  nextRankThreshold: 50,
  totalPredictions: 54,
  totalCorrect: 15,
  accuracy: 35,
  totalEarned: 542,
};

export const predictions = [
  {
    id: 1,
    question: 'Which game will be the GOTY?',
    endsIn: '20:03',
    votes: 1960,
    options: [
      { label: 'The Last of Us Part II', percentage: 54, isLeading: true },
      { label: 'Ghost of Tsushima', percentage: 46, isLeading: false },
    ],
  },
  {
    id: 2,
    question: 'Who wins the Champions League?',
    endsIn: '04:30',
    votes: 3450,
    options: [
      { label: 'Manchester City', percentage: 61, isLeading: true },
      { label: 'Real Madrid', percentage: 39, isLeading: false },
    ],
  },
  {
    id: 3,
    question: 'Next Apple CEO?',
    endsIn: '11:00',
    votes: 890,
    options: [
      { label: 'Tim Cook stays', percentage: 78, isLeading: true },
      { label: 'New appointment', percentage: 22, isLeading: false },
    ],
  },
];

export const earningsData = [
  { month: 'JAN', amount: 120 },
  { month: 'FEB', amount: 300 },
  { month: 'MAR', amount: 480 },
  { month: 'APR', amount: 200 },
  { month: 'MAY', amount: 620 },
  { month: 'JUN', amount: 390 },
];

export const menuItems = [
  { id: 'notifications', label: 'Notifications', icon: 'bell' },
  { id: 'general', label: 'General', icon: 'settings' },
  { id: 'account', label: 'Account', icon: 'person' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'transfer', label: 'Transfer Money', icon: 'transfer' },
  { id: 'logout', label: 'Log out', icon: 'logout' },
  { id: 'help', label: 'Help', icon: 'help' },
];
