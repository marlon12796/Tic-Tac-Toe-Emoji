import { emojis } from '../../utils/types';
import Banner from '../core/banner/banner';

export default function SinglePlayerBanner({
	isPlayerXNext,
	playerSign,
}: {
	isPlayerXNext: boolean;
	playerSign: emojis | null;
}) {
	return <Banner isPlayerXNext={isPlayerXNext} playerSign={playerSign} />;
}
