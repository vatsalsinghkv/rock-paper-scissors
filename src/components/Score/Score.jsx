import { useState, useEffect } from 'react';
import styles from './Score.module.scss';

const Score = ({ value }) => {
	const [bump, setBump] = useState(false);

	useEffect(() => {
		if (!value) return;

		setBump(true);
		const timer = setTimeout(() => setBump(false), 300);
		return () => clearTimeout(timer);
	}, [value]);

	return (
		<div className={`${styles.score} ${bump ? styles.bump : ''}`}>
			<div>
				<h3 className={styles['score__heading']}>Score</h3>
				<p className={styles['score__value']}>{value}</p>
			</div>
		</div>
	);
};

export default Score;
