import { memo, useContext, useEffect, useState } from 'react';
import gameContext from '../../context/game-context';
import scoreContext from '../../context/score-context';
import { COMPUTER_PICK_TIME } from '../../helper/config';

import { getRandomType } from '../../helper/helper';
import { getResult } from '../../logic/logic';

import Disk from '../Disk/Disk';
import ResultText from '../ResultText/ResultText';
import Circle from '../UI/Circle/Circle';

import styles from './Playing.module.scss';

const Playing = () => {
	const [computerPicked, setComputerPicked] = useState(false);

	const {
		playing: { userPick, computerPick },
		result,
		setComputerPick,
		setResult,
	} = useContext(gameContext);

	const { increaseScore, reduceScore } = useContext(scoreContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			setComputerPicked(true);

			const pick = getRandomType();
			setComputerPick(pick);

			const { win, draw } = getResult(userPick, pick);
			if (draw) {
				setResult({ draw });
				return;
			}

			if (win !== undefined) {
				win ? increaseScore() : reduceScore();
				setResult({ win });
				return;
			}
		}, COMPUTER_PICK_TIME);

		return () => clearTimeout(timer);
	}, [setComputerPick, setResult, userPick, increaseScore, reduceScore]);

	return (
		<div
			className={`${styles.main} ${
				result.hasOwnProperty('win') || result.hasOwnProperty('draw')
					? styles['main--res']
					: ''
			}`}
		>
			<h3>You Picked</h3>
			<h3>The House Picked</h3>

			<Disk type={userPick} div="true" size="lg" active={result?.win} />

			{result.hasOwnProperty('draw') && (
				<ResultText text="match draw" className={styles.text} />
			)}

			{result.hasOwnProperty('win') && (
				<ResultText
					text={result.win ? 'you win' : 'you lose'}
					className={styles.text}
				/>
			)}

			{computerPicked && (
				<Disk
					type={computerPick}
					div="true"
					size="lg"
					active={!(result?.win ?? true)}
				/>
			)}

			{computerPicked || <Circle div="true" className={styles.circle} />}
		</div>
	);
};

/* 
Were using memo so this component doesn't get rerender when app gets rerender because ShowRules state changes

But now this component always get compared with its prev state if there is some change it will get rerendered
*/

export default memo(Playing);
