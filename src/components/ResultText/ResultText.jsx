import styles from './ResultText.module.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import gameContext from '../../context/game-context';

const ResultText = ({ text, className }) => {
	const { restart } = useContext(gameContext);

	return (
		<div className={`${className} ${styles.main}`}>
			<h3 className={styles.text}>{text}</h3>
			<Button styleName="btn--solid" onClick={restart}>
				Play Again
			</Button>
		</div>
	);
};

export default ResultText;
