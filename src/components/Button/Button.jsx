import styles from './Button.module.scss';

const Button = ({ className, styleName, children, onClick }) => {
	return (
		<button
			className={`${styles.btn} ${styles[styleName]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
