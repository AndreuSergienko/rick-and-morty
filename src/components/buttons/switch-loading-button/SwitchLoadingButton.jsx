import classNames from 'classnames/bind';
import styles from './SwitchLoadingButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDataLoadingAC } from '../../../store/reducers';

export const SwitchLoadingButton = () => {
	const dispatch = useDispatch();
	const isDataLoading = useSelector((state) => state.switchers.isDataLoading);

	const handleClick = () => {
		dispatch(toggleDataLoadingAC(!isDataLoading));
	};

	const buttonStyles = {
		button: styles.button,
		dataDisabled: styles.dataDisabled,
	};

	const cx = classNames.bind(buttonStyles);

	return (
		<button
			type='button'
			className={cx('button', { dataDisabled: !isDataLoading })}
			onClick={handleClick}
		>
			{isDataLoading ? 'Data loading is ON' : 'Data loading is OFF'}
		</button>
	);
};
