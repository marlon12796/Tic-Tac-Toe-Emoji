import { Button, ButtonsContainer, Footer, FooterLink, Wrapper, Emoji, Square, Title } from './Styles'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useGameStore } from '../../hooks/useGameStore'
import { getRandomEmoji } from '../../utils/getRandomEmoji'

export default function Start() {
  const { setNavigate, setGameNavigate } = useGameStore()
  const [emoji, setEmoji] = useState(getRandomEmoji())

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(getRandomEmoji())
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleOnClick = () => {
    setNavigate('multi-player')
    setGameNavigate('multi-player')
  }

  const handleOnSinglePlayerClick = () => {
    setNavigate('single-player')
    setGameNavigate('select-box')
  }

  return (
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
      <Square
        className='container'
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <Emoji>{emoji}</Emoji>
      </Square>
      <Title>
        Tic Tac&nbsp;
        <TypeAnimation sequence={['Toe', 2000, 'Emoji', 2000]} wrapper='span' speed={5} repeat={Infinity} />
      </Title>
      <ButtonsContainer>
        <Button onClick={handleOnSinglePlayerClick}>Single Player</Button>
        <Button onClick={handleOnClick}>Multi Player</Button>
      </ButtonsContainer>
      <Footer>
        <FooterLink href='https://github.com/marlon12796/Tic-Tac-Toe-Emoji' target='_blank' rel='noopener noreferrer'>
          Made by Marlon
        </FooterLink>
      </Footer>
    </Wrapper>
  )
}
