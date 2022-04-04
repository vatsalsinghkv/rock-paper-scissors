import { TYPES } from './config';

const getRandomType = () => TYPES[Math.floor(Math.random() * 3)];

export { getRandomType };
