import { useGameStore } from '../../hooks';
import MultiPlayerBoard from './MultiPlayerBoard';
import MultiplayerResult from './MultiPlayerResult';

export default function MultiPlayer() {
	const { gameNavigate } = useGameStore();

	return (
		<>
			{gameNavigate === 'multi-player' && <MultiPlayerBoard />}
			{gameNavigate === 'multi-player-result' && <MultiplayerResult />}
		</>
	);
}
