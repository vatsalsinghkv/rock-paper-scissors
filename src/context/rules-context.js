import { createContext, useState } from 'react';

const RulesContext = createContext({
	showRules: false,
	closeRules: () => {},
	openRules: () => {},
});

// !Component

const RulesProvider = ({ children }) => {
	const [showRules, setShowRules] = useState(false);

	/**
	 * Opens the show rules modal
	 */
	const openRules = () => setShowRules(true);

	/**
	 * Closes the show rules modal
	 */
	const closeRules = () => setShowRules(false);

	return (
		<RulesContext.Provider value={{ showRules, closeRules, openRules }}>
			{children}
		</RulesContext.Provider>
	);
};

export { RulesContext as default, RulesProvider };
