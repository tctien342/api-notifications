import './index.scss';

import logo from '@assets/logo.svg';
import tauriCircles from '@assets/tauri.svg';
import tauriWord from '@assets/wordmark.svg';

function App() {
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
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
