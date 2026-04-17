import { useState } from 'react';
import { App, View, Page } from 'framework7-react';
import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import PredictionsScreen from './screens/PredictionsScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';

const f7params = {
  name: 'Predecy',
  theme: 'ios',
  routes: [{ path: '/', component: () => null }],
};

const screens = {
  home: HomeScreen,
  predictions: PredictionsScreen,
  activity: ActivityScreen,
  profile: ProfileScreen,
};

function AppInner() {
  const [activeTab, setActiveTab] = useState('home');
  const Screen = screens[activeTab];

  return (
    <div style={{ maxWidth: 430, margin: '0 auto', height: '100vh', position: 'relative', background: 'var(--predecy-bg)' }}>
      <Screen />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default function AppRoot() {
  return (
    <App {...f7params}>
      <View main>
        <Page>
          <AppInner />
        </Page>
      </View>
    </App>
  );
}
