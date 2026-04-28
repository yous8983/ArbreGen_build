import React from 'react';
import {
  IonApp, IonRouterOutlet, IonTabBar, IonTabButton,
  IonTabs, IonIcon, IonLabel, setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { homeOutline } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

import { HomePage } from './pages/HomePage';

setupIonicReact({ mode: 'ios' });

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* @ts-ignore */}
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
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
