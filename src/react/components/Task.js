import React from 'react';
import { 
    IonItem, 
    IonCheckbox, 
    IonBadge, 
    IonLabel, 
    IonNote 
} from '@ionic/react';

class Task extends React.Component {
  render() {
    return (
        <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
                <h1>{this.props.name}</h1>
                <IonNote>{this.props.description}</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
                {this.props.daysLeft}
            </IonBadge>
        </IonItem>
    );
  };
};

export default Task;
