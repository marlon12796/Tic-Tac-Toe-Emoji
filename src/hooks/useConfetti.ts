import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const useConfetti = ({ shouldRun }: { shouldRun: boolean }) => {
  useEffect(() => {
    if (!shouldRun) return // No ejecutar el efecto si shouldRun es false

    const duration = 6 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)

    return () => clearInterval(interval)
  }, [shouldRun]) // El efecto se re-ejecuta solo si shouldRun cambia
}

export default useConfetti
