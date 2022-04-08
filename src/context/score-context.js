import { createContext, useCallback, useEffect, useState } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	/**
	 * Saves Score in local storage
	 */
	const saveScore = () => {
		localStorage.setItem('score', `${score}`);
	};

	/**
	 * Loads Score from local storage and update in state
	 */
	const loadScore = () => {
		const savedScore = +localStorage.getItem('score');
		console.log(savedScore);
		if (savedScore) setScore(savedScore);
	};

	useEffect(loadScore, []);
	useEffect(saveScore, [score]);

	/**
	 * Increase score in the state
	 */
	const increaseScore = useCallback(
		() => setScore(prevScore => ++prevScore),
		[]
	);

	/**
	 * Decrease score in the state
	 */
	const reduceScore = useCallback(
		() => setScore(prevScore => (--prevScore < 0 ? 0 : prevScore)),
		[]
	);

	return (
		<ScoreContext.Provider
			value={{
				score,
				increaseScore,
				reduceScore,
			}}
		>
			{children}
		</ScoreContext.Provider>
	);
};

export { ScoreContext as default, ScoreProvider };
