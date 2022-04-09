import { TYPES } from './config';

/**
 * Returns random type from Rock, Paper, Scissors
 * @returns {String} Rock or Paper or Scissors
 */

const getRandomType = () => TYPES[Math.floor(Math.random() * 3)];

export { getRandomType };
