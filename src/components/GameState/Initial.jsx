import { useContext } from 'react';
import gameContext from '../../context/game-context';
import Disk from '../Disk/Disk';
import styles from './Initial.module.scss';

const Initial = () => {
	const { setUserPick } = useContext(gameContext);

	const clickHandler = type => {
		setUserPick(type);
	};

	return (
		<div className={styles.main}>
			<Disk type="paper" onClick={clickHandler.bind(null, 'paper')} />
			<Disk type="scissors" onClick={clickHandler.bind(null, 'scissors')} />
			<Disk
				type="rock"
				className={styles.child}
				onClick={clickHandler.bind(null, 'rock')}
			/>
		</div>
	);
};

export default Initial;
