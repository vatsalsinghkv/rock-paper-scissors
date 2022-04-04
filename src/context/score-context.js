import { createContext, useCallback, useState } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	const increaseScore = useCallback(
		() => setScore(prevScore => ++prevScore),
		[]
	);

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
