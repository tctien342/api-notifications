import './index.scss';

import logo from '@assets/logo.svg';
import tauriCircles from '@assets/tauri.svg';
import tauriWord from '@assets/wordmark.svg';
import { CallSendNotification } from '@utils/rust';

function App() {
  return (
    <div className="w-full h-full flex flex-row">
      <header className="flex h-full w-full flex-col p-4 justify-center items-center dark:text-black bg-zinc-800">
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
        <button
          onClick={() => CallSendNotification('HELLO', 'This is sent from rust backend')}
          className="text-white font-bold text-xl">
          Make notification
        </button>
      </header>
    </div>
  );
}

export default App;
