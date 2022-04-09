import { createContext, useCallback, useState } from 'react';

const GameStateContext = createContext();

const GameStateProvider = ({ children }) => {
	const [gameState, setGameState] = useState({
		initial: true,
		playing: false,
		result: false,
	});

	/**
	 * Updates user's pick in the state
	 * @param {Object} userPick set the this object as new game state
	 */
	const setUserPick = useCallback(
		userPick => {
			setGameState({ initial: false, playing: { userPick }, result: false });
		},
		[setGameState]
	);

	/**
	 * Updates computer's pick in the state
	 * @param {Object} computerPick set the this object as new game state
	 */
	const setComputerPick = useCallback(
		computerPick => {
			setGameState(prevState => ({
				...prevState,
				playing: { ...prevState.playing, computerPick },
			}));
		},
		[setGameState]
	);

	/**
	 * Updates result in the state
	 * @param {Boolean} res user's result (win | lose)
	 */
	const setResult = useCallback(res => {
		setGameState(prev => ({ ...prev, result: res }));
	}, []);

	const restart = useCallback(
		() =>
			setGameState({
				initial: true,
				playing: false,
				result: false,
			}),
		[]
	);

	return (
		<GameStateContext.Provider
			value={{
				...gameState,
				setUserPick,
				setComputerPick,
				setResult,
				restart,
			}}
		>
			{children}
		</GameStateContext.Provider>
	);
};

export { GameStateContext as default, GameStateProvider };
