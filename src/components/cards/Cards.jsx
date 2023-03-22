import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApiService } from '../../services';
import { Card, ScrollToTopButton } from '..';
import { setCharactersAC, setIsLoadingAC } from '../../store/reducers';
import styles from './Cards.module.css';

export const Cards = () => {
	const dispatch = useDispatch();
	const characters = useSelector((state) => state.characters.allCharacters);
	const isDataLoading = useSelector((state) => state.switchers.isDataLoading);

	const [isBottom, setIsBottom] = useState(false);
	const [isScrollButton, setIsScrollButton] = useState(false);
	const [page, setPage] = useState(1);

	const getData = (page) => {
		dispatch(setIsLoadingAC(true));
		ApiService.getCharacters(page)
			.then((data) => {
				dispatch(setCharactersAC(data.results));
			})
			.finally(() => {
				dispatch(setIsLoadingAC(false));
			});
	};

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setIsScrollButton(true);
		} else {
			setIsScrollButton(false);
		}
		if (
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.body.offsetHeight
		) {
			setIsBottom(true);
		} else {
			setIsBottom(false);
		}
	};

	useEffect(() => {
		let ignore = false;

		if (!ignore && !characters && isDataLoading) {
			getData(page);
		}

		return () => {
			ignore = true;
		};
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isDataLoading) {
			getData(page);
		}
	}, [page]);

	useEffect(() => {
		if (isBottom) {
			setPage((prev) => prev + 1);
		}
	}, [isBottom]);

	const charactersCards = characters?.map((item) => (
		<Card key={item.id} {...item} />
	));

	return (
		<div className={styles.cardsLayout}>
			{charactersCards}
			{isScrollButton && <ScrollToTopButton />}
		</div>
	);
};
