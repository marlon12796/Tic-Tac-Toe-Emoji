import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Square = styled(motion.div)`
	width: 150px;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30px;
	background: white;
	margin: 0 auto;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Emoji = styled(motion.span)`
	font-size: 80px;
	rotate: 180deg;
`;

export const Title = styled(motion.h1)`
	color: #3f3f3f;
	font-size: 40px;
	padding: 30px 0;
	font-weight: 800;

	@media screen and (min-width: 500px) {
		font-size: 60px;
	}
`;

export const ButtonsContainer = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 400px;
	@media screen and (min-width: 500px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export const Button = styled.button<{ $isMulti?: boolean }>`
	--😀: #644dff;
	--😀😀: #4836bb;
	--😀😀😀: #654dff63;
	cursor: pointer;
	width: 184px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 1.125em;
	font-weight: 800;
	letter-spacing: 2px;
	color: #fff;
	background: var(--😀);
	border: 2px solid var(--😀😀);
	border-radius: 0.75rem;
	box-shadow: 0 8px 0 var(--😀😀);
	transform: skew(-10deg);
	transition: all 0.1s ease;
	filter: drop-shadow(0 15px 20px var(--😀😀😀));

	&:hover {
		opacity: 0.9;
	}

	&:active {
		letter-spacing: 0px;
		transform: skew(-10deg) translateY(8px);
		box-shadow: 0 0 0 var(--😀😀😀);
	}

	@media screen and (max-width: 500px) {
		font-size: 1.05rem;
		width: 80%;
	}
`;

export const Footer = styled.footer`
	text-align: center;
	padding-top: 60px;
`;

export const FooterLink = styled.a`
	color: #3f3f3f;
	text-decoration: underline;

	&:hover {
		text-decoration: underline;
	}
`;
