import styles from './Rules.module.scss';
import iconRules from '../../assets/images/image-rules.svg';
import Modal from '../UI/Modal/Modal';

const Rules = ({ onClose }) => {
	return (
		<Modal className={styles.rules} close={onClose}>
			<h1>Rules</h1>
			<div>
				<img src={iconRules} alt="game rules" />
			</div>
		</Modal>
	);
};

export default Rules;
