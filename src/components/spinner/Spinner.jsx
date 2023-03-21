import styles from './Spinner.module.css';

export const Spinner = () => {
	return (
		<div className={styles.spinnerCanvas}>
			<div className={styles.spinner}>&nbsp;</div>
		</div>
	);
};
