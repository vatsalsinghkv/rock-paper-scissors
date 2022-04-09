import { TYPES } from '../helper/config';

/* const TYPES = ['rock', 'paper', 'scissors']; */

/**
 * Checks if user won or lost the match
 * @param {String} userPick rock, paper, scissors picked by user
 * @param {*} computerPick rock, paper, scissors picked by computer
 * @returns {Object} win: true or false or draw: true
 */

const getResult = (userPick, computerPick) => {
	// WINNING CONDITIONS

	// Rock vs Scissors
	if (userPick === TYPES[0] && computerPick === TYPES[2]) return { win: true };

	// Scissors vs Paper
	if (userPick === TYPES[2] && computerPick === TYPES[1]) return { win: true };

	// Paper vs Rock
	if (userPick === TYPES[1] && computerPick === TYPES[0]) return { win: true };

	//  DRAW CONDITIONS

	if (userPick === TYPES[0] && computerPick === TYPES[0]) return { draw: true };

	if (userPick === TYPES[1] && computerPick === TYPES[1]) return { draw: true };

	if (userPick === TYPES[2] && computerPick === TYPES[2]) return { draw: true };

	return { win: false };
};

export { getResult };
