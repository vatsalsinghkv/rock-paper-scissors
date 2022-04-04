import { useContext } from 'react';
import styles from './App.module.scss';
import Rules from './components/Rules/Rules';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Initial from './components/GameState/Initial';
import Playing from './components/GameState/Playing';
import gameContext from './context/game-context';
import rulesContext from './context/rules-context';

function App() {
	const { showRules, openRules, closeRules } = useContext(rulesContext);

	const { initial, playing } = useContext(gameContext);

	return (
		<>
			{showRules && <Rules onClose={closeRules} />}

			<div className={styles.App}>
				<Header />

				{initial && <Initial />}
				{playing && <Playing />}

				<Button
					className={styles.btn}
					styleName="btn--outline"
					onClick={openRules}
				>
					Rules
				</Button>

				<Footer name="Vatsal Singh" github="https://github.com/vatsalsinghkv" />
			</div>
		</>
	);
}

export default App;
