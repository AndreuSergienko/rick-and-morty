import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './InfoModal.module.css';
import { setCurrentCharacterAC } from '../../store/reducers';

export const InfoModal = () => {
	const dispatch = useDispatch();
	const currentCharacter = useSelector(
		(state) => state.characters.currentCharacter
	);

	const exceptionKeys = [
		'name',
		'status',
		'species',
		'gender',
		'episode',
		'origin',
	];

	const displayedFields = currentCharacter
		? Object.entries(currentCharacter)
				.filter(([key, _]) => exceptionKeys.includes(key))
				.map(([key, value]) => (
					<div key={key} className={styles.modalInfoItem}>
						<span className={styles.modalInfoParam}>{key}:</span>
						<span className={styles.modalInfoValue}>{value}</span>
					</div>
				))
		: null;

	const modalRef = useRef();

	const handleCloseModal = (e) => {
		if (!modalRef.current.contains(e.target)) {
			dispatch(setCurrentCharacterAC(null));
		}
	};

	return (
		currentCharacter && (
			<div className={styles.modalCanvas} onClick={handleCloseModal}>
				<div className={styles.modal} ref={modalRef}>
					<div className={styles.modalImage}>
						<img
							src={currentCharacter?.image}
							alt={currentCharacter?.name}
						/>
					</div>
					<div className={styles.modalInfo}>{displayedFields}</div>
				</div>
			</div>
		)
	);
};
