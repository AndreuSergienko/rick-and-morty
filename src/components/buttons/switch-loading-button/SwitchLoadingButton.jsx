import classNames from 'classnames/bind';
import styles from './SwitchLoadingButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCanDataLoadAC } from '../../../store/reducers';

export const SwitchLoadingButton = () => {
  const dispatch = useDispatch();
  const canDataLoad = useSelector((state) => state.switchers.canDataLoad);

  const handleClick = () => {
    dispatch(toggleCanDataLoadAC(!canDataLoad));
  };

  const buttonStyles = {
    button: styles.button,
    dataDisabled: styles.dataDisabled,
  };

  const cx = classNames.bind(buttonStyles);

  return (
    <button
      type='button'
      className={cx('button', { dataDisabled: !canDataLoad })}
      onClick={handleClick}
    >
      {canDataLoad ? 'Data loading is ON' : 'Data loading is OFF'}
    </button>
  );
};
