import Score from '../Score/Score';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import { useContext } from 'react';
import scoreContext from '../../context/score-context';

const Header = () => {
	const { score } = useContext(scoreContext);

	return (
		<header className={styles.header}>
			<img src={logo} alt="Rock Paper Scissors" />
			<Score value={score} />
		</header>
	);
};

export default Header;
