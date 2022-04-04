import { createContext, useCallback, useState } from 'react';

const GameStateContext = createContext();

const GameStateProvider = ({ children }) => {
	const [gameState, setGameState] = useState({
		initial: true,
		playing: false,
		result: false,
	});

	const setUserPick = useCallback(
		userPick => {
			setGameState({ initial: false, playing: { userPick }, result: false });
		},
		[setGameState]
	);

	const setComputerPick = useCallback(
		computerPick => {
			setGameState(prevState => ({
				...prevState,
				playing: { ...prevState.playing, computerPick },
			}));
		},
		[setGameState]
	);

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
