import styles from './Footer.module.scss';

const Footer = ({ name, github }) => {
	return (
		<div className={styles.attribution}>
			Challenge by
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.frontendmentor.io?ref=challenge"
			>
				{' Frontend Mentor'}
			</a>
			. {' Coded by '}
			<a rel="noreferrer" target="_blank" href={github}>
				{name}
			</a>
			.
		</div>
	);
};

export default Footer;
