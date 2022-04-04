import { useContext } from 'react';
import rulesContext from '../../context/rules-context';
import Circle from '../UI/Circle/Circle';
import styles from './Disk.module.scss';

import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import iconRock from '../../assets/images/icon-rock.svg';

const icons = {
	rock: iconRock,
	paper: iconPaper,
	scissors: iconScissors,
};

const Disk = ({ type, className, onClick, size, div, active }) => {
	const { showRules } = useContext(rulesContext);

	const diskClasses = `${styles[`disk--${size}`]}  ${
		styles[`${active ? 'disk--active' : ''}`]
	} ${className}`;

	const outerClasses = `${styles.circle} ${styles['circle__outer']} ${
		styles[`circle__outer--${type}`]
	}  ${styles[`circle__outer--${size}`]} `;

	const innerClasses = `${styles.circle} ${styles['circle__inner']} ${
		styles[`circle__inner--${type}`]
	} ${styles[`circle__inner--${size}`]}`;

	return (
		<div className={diskClasses}>
			<span></span>
			<Circle
				className={outerClasses}
				div={div || showRules}
				type={type}
				onClick={onClick}
			>
				<Circle className={innerClasses} div={true}>
					<img src={icons[type]} alt={`${type}'s button`} />
				</Circle>
			</Circle>
		</div>
	);
};

export default Disk;
