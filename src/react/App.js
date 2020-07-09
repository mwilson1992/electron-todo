import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { channels } from '../shared/constants';
import TaskList from './pages/TaskList';
import NewTask from './pages/NewTask';
import logo from './logo.svg';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const { ipcRenderer } = window;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }
  render() {
    const { appName, appVersion } = this.state;
    return (
      <IonApp className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{appName} version {appVersion}</p>
        </header>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/taskList" component={TaskList} exact={true} />
            <Route path="/new" component={NewTask} />
            <Route exact path="/" render={() => <Redirect to="/taskList" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
