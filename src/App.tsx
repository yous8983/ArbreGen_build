import React from 'react';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { homeOutline } from 'ionicons/icons';
import { defineCustomElements } from '@ionic/core/loader';
import './theme/variables.css';
import { HomePage } from './pages/HomePage';

defineCustomElements(window);
setupIonicReact({ mode: 'ios' });

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/"><Redirect to="/home" /></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
export default App;
