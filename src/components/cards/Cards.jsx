import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApiService } from '../../services';
import { Card } from '..';
import styles from './Cards.module.css';
import { setCharactersAC, setIsLoadingAC } from '../../store/reducers';

export const Cards = () => {
	const dispatch = useDispatch();
	const characters = useSelector((state) => state.characters.allCharacters);

	useEffect(() => {
		let ignore = false;

		if (!ignore && !characters) {
			dispatch(setIsLoadingAC(true));
			ApiService.getCharacters(1)
				.then((data) => {
					console.log(data);
					dispatch(setCharactersAC(data.results));
				})
				.finally(() => dispatch(setIsLoadingAC(false)));
		}

		return () => {
			ignore = true;
		};
	}, [characters, dispatch]);

	const charactersCards = characters?.map((item) => (
		<Card key={item.id} {...item} />
	));

	return <div className={styles.cardsLayout}>{charactersCards}</div>;
};
