import styles from './Circle.module.scss';

const Circle = ({ children, className, div = false, onClick }) => {
	if (div)
		return <div className={`${styles.circle} ${className}`}>{children}</div>;

	return (
		<button className={`${styles.circle} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Circle;
