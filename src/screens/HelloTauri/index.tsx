import './index.scss';

import logo from '@assets/logo.svg';
import tauriCircles from '@assets/tauri.svg';
import tauriWord from '@assets/wordmark.svg';
import { invoke } from '@tauri-apps/api/tauri';

function App() {
  const makeNotification = () => {
    void invoke('send_notification', { title: 'Hello', body: 'This is hello content!' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <a
          className={`App-link`}
          href="https://tauri.studio"
          target="_blank"
          rel="noopener noreferrer">
          Learn Tauri Here
        </a>
        <img src={logo} className="App-logo rotate" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={makeNotification}>Try notification</button>
      </header>
    </div>
  );
}

export default App;
