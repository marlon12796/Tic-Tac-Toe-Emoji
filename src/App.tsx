import { Toaster } from 'react-hot-toast';
import { useGameStore } from './hooks/useGameStore';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/Spinner/Spinner';
const Start = lazy(() => import('./components/Start/Start'));
const SinglePlayer = lazy(() => import('./components/SinglePlayer/SinglePlayer'));
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
			{navigate === 'single-player' && (
				<Suspense fallback={<Spinner />}>
					<SinglePlayer />
				</Suspense>
			)}
		</>
	);
}

export default App;
