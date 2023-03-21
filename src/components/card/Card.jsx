import { useDispatch } from 'react-redux';
import styles from './Card.module.css';
import { setCurrentCharacterAC } from '../../store/reducers';

export const Card = (props) => {
	const dispatch = useDispatch();

	const handleOpenCard = () => {
		dispatch(setCurrentCharacterAC(props));
	};

	return (
		<div className={styles.card} role='button' onClick={handleOpenCard}>
			<div className={styles.cardImage}>
				<img src={props.image} alt={props.name} />
			</div>
			<h4 className={styles.cardTitle}>{props.name}</h4>
		</div>
	);
};
