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
    <div className="w-full h-full flex flex-row">
      <div className="w-80 h-full p-2">
        <h5 className="text-white font-bold text-sm">SIDEBAR</h5>
      </div>
      <header className="flex bg-zinc-800 h-full w-full flex-col p-4 justify-center items-center">
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
        <button onClick={makeNotification} className="text-white font-bold text-xl">
          Try notification
        </button>
      </header>
    </div>
  );
}

export default App;
