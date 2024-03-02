import { motion } from 'framer-motion'
import Result from '../core/result/result'
import { useGameStore, useMultiplayerStore } from '../../hooks'
import useConfetti from '../../hooks/useConfetti'
export default function MultiplayerResult() {
  const { multiplayerWinner, reset } = useMultiplayerStore()
  const { setNavigate, setGameNavigate } = useGameStore()
  useConfetti({ shouldRun: multiplayerWinner !== 'draw' && multiplayerWinner !== null })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
      <Result
        multiplayerWinner={multiplayerWinner}
        reset={reset}
        setNavigate={setNavigate}
        setGameNavigate={setGameNavigate}
        isMultiplayer={true}
        gameResult={null}
      />
    </motion.div>
  )
}
