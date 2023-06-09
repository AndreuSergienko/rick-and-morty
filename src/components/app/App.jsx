import { useSelector } from 'react-redux';
import { Layout, Cards, InfoModal, Spinner, SwitchLoadingButton } from '..';
import './App.css';

export const App = () => {
	const isLoading = useSelector((state) => state.spinner.isLoading);

	return (
		<div className='app'>
			<Layout>
				<SwitchLoadingButton />
				<Cards />
				<InfoModal />
				{isLoading && <Spinner />}
			</Layout>
		</div>
	);
};
