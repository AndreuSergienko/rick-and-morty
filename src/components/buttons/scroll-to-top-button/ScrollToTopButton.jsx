import { UpArrow } from '../../../assets';

import styles from './ScrollToTopButton.module.css';

export const ScrollToTopButton = () => {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<button type='button' className={styles.button} onClick={handleClick}>
			<UpArrow />
		</button>
	);
};
