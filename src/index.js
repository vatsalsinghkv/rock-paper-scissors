import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { RulesProvider } from './context/rules-context';
import { GameStateProvider } from './context/game-context';
import { ScoreProvider } from './context/score-context';
memo();

ReactDOM.render(
	<React.StrictMode>
		<RulesProvider>
			<GameStateProvider>
				<ScoreProvider>
					<App />
				</ScoreProvider>
			</GameStateProvider>
		</RulesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
