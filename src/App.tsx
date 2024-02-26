import { Toaster } from 'react-hot-toast';
import { useGameStore } from './hooks/useGameStore';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/Spinner/Spinner';

const Start = lazy(() => import('./components/Start/Start'));
function App() {
	const { navigate } = useGameStore();
	console.log(navigate);
	return (
		<>
			<Toaster />
			{navigate === 'start' && (
				<Suspense fallback={<Spinner />}>
					<Start />
				</Suspense>
			)}
		</>
	);
}

export default App;
