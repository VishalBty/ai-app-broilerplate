import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import SplitScreen from './components/SplitScreen';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {screen === 'home' && (
        <HomeScreen onSplitNow={() => setScreen('split')} />
      )}
      {screen === 'split' && (
        <SplitScreen onBack={() => setScreen('home')} />
      )}
    </div>
  );
}
