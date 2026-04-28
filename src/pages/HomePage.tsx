import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
export const HomePage: React.FC = () => (
  <IonPage>
    <IonHeader translucent>
      <IonToolbar><IonTitle>ArbreGen</IonTitle></IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar><IonTitle size="large">ArbreGen</IonTitle></IonToolbar>
      </IonHeader>
    </IonContent>
  </IonPage>
);
