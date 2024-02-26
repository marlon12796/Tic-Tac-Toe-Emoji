import { create } from 'zustand';
import { getRandomEmoji } from '../utils/getRandomEmoji';
import { checkMultiPlayerWinner } from '../utils/caculateWinner';

const localStorageKey = 'multiplayer-game-data';

type MultiplayerStateType = {
	multiplayerBoard: ('X' | 'O' | null)[];
	multiplayerPlayerXIsNext: boolean;
	multiplayerWinner: 'X' | 'O' | 'draw' | null;
	multiplayerHandleClick: (index: number) => void;
	reset: () => void;
	emojiX: string;
	emojiO: string;
	saveGame: () => void;
	clearGame: () => void;
};

export const useMultiplayerStore = create<MultiplayerStateType>((set) => {
	const storedGameData = localStorage.getItem(localStorageKey);
	const initialState = storedGameData
		? JSON.parse(storedGameData)
		: {
				multiplayerBoard: Array(9).fill(null),
				multiplayerPlayerXIsNext: true,
				multiplayerWinner: null,
				emojiX: getRandomEmoji(),
				emojiO: getRandomEmoji(),
		  };

	return {
		...initialState,
		multiplayerHandleClick: (index) =>
			set((state: any) => {
				if (state.multiplayerWinner || state.multiplayerBoard[index]) {
					return state;
				}
				const newBoard = [...state.multiplayerBoard];
				const emoji = state.multiplayerPlayerXIsNext ? state.emojiX : state.emojiO;

				newBoard[index] = emoji;

				const winner = checkMultiPlayerWinner(newBoard);

				const newState = {
					...state,
					multiplayerBoard: newBoard,
					multiplayerPlayerXIsNext: !state.multiplayerPlayerXIsNext,
					multiplayerWinner: winner,
				};

				localStorage.setItem(localStorageKey, JSON.stringify(newState));

				return newState;
			}),
		reset: () => {
			localStorage.removeItem(localStorageKey);
			set({
				multiplayerBoard: Array(9).fill(null),
				multiplayerPlayerXIsNext: true,
				multiplayerWinner: null,
				emojiX: getRandomEmoji(),
				emojiO: getRandomEmoji(),
			});
		},
	};
});
