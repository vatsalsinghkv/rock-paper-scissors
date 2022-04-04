import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
// import closeIcon from '../../../assets/images/icon-close.svg';

const Overlay = ({ onClick }) => (
	<div className={styles.overlay} onClick={onClick}></div>
);

const ModalBody = ({ close, className, children }) => {
	return (
		<div className={`${styles.modal} ${className}`}>
			<button className={styles.modal__close} onClick={close}>
				{/* <img src={closeIcon} alt="close button" /> */}

				{/* &times; */}
				<span className="material-icons">close</span>
			</button>

			{children}
		</div>
	);
};

const Modal = ({ close, className, children }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Overlay onClick={close} />,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<ModalBody close={close} className={className}>
					{children}
				</ModalBody>,
				document.getElementById('modal')
			)}
		</>
	);
};

export default Modal;
