import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItemDivider,
    IonItem,
    IonInput,
    IonList,
    IonButton,
    IonFooter,
    IonDatetime
  } from '@ionic/react';
  
  class NewTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        description: '',
        dueDate: ''
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleDueDateChange = this.handleDueDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {    
      this.setState({
        name: event.target.value
      }); 
    }

    handleDescriptionChange(event) {    
      this.setState({
        description: event.target.value
      }); 
    }

    handleDueDateChange(event) {    
      this.setState({
        dueDate: event.target.value
      }); 
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log("name: " + this.state.name);
      console.log("description: " + this.state.description);
      console.log("dueDate: " + this.state.dueDate);
      //save
      this.props.history.goBack()
    }

    render() {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/taskList" />
              </IonButtons>
              <IonTitle style={{width: "100%", position: "absolute", left: "0", height: "0"}}>Create New Task</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItemDivider>Name:</IonItemDivider>
              <IonItem>
                <IonInput placeholder="Enter Input" clearInput value={this.state.name} onInput={this.handleNameChange}></IonInput>
              </IonItem>

              <IonItemDivider>Description:</IonItemDivider>
              <IonItem>
                <IonInput placeholder="Enter Input" clearInput value={this.state.description} onInput={this.handleDescriptionChange}></IonInput>
              </IonItem>

              <IonItemDivider>Due Date</IonItemDivider>
              <IonItem>
                <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date" max="2012-12-09" value={this.state.dueDate} onIonChange={this.handleDueDateChange}></IonDatetime>
              </IonItem>
            </IonList>
          </IonContent>

          <IonFooter>
            <IonToolbar>
              <IonButton expand="block" type="submit" class="ion-no-margin" onClick={this.handleSubmit}>Create task</IonButton>
            </IonToolbar>
          </IonFooter>
        </IonPage>
      )
    };
  };
  export default NewTask;