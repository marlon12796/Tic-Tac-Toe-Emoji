import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore, useMultiplayerStore } from '../../hooks';
import Banner from '../core/banner/banner';
import Board from '../core/board/board';

export default function MultiPlayerBoard() {
	const { setGameNavigate } = useGameStore();
	const { multiplayerBoard, multiplayerWinner, multiplayerHandleClick, emojiX, emojiO, multiplayerPlayerXIsNext } =
		useMultiplayerStore();

	const isDraw = multiplayerBoard.every((square) => square !== null);

	useEffect(() => {
		if (multiplayerWinner) {
			setTimeout(() => {
				setGameNavigate('multi-player-result');
			}, 1100);
		} else if (isDraw) {
			setTimeout(() => {
				setGameNavigate('multi-player-result');
			}, 500);
		}
	}, [multiplayerWinner, isDraw, setGameNavigate]);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
			<Banner isPlayerXNext={multiplayerPlayerXIsNext} playerSign={emojiX} otherPlayerSign={emojiO} />
			<Board squares={multiplayerBoard} onClick={multiplayerHandleClick} />
		</motion.div>
	);
}
