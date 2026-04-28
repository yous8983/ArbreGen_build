import React from 'react';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { homeOutline } from 'ionicons/icons';
import './theme/variables.css';
import { HomePage } from './pages/HomePage';

setupIonicReact({ mode: 'ios' });

const Tab1: React.FC = () => <IonTabButton tab="home" href="/home">
  <IonIcon icon={homeOutline} />
  <IonLabel>Accueil</IonLabel>
</IonTabButton>;

const App: React.FC = () => (
  <IonApp>
    {/* @ts-ignore */}
    <IonReactRouter>
      {/* @ts-ignore */}
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        {/* @ts-ignore */}
        <IonTabBar slot="bottom">
          {/* @ts-ignore */}
          <Tab1 />
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
