import { Toaster } from 'react-hot-toast'
import { useGameStore } from './hooks/useGameStore'
import { Suspense, lazy } from 'react'
import { Spinner } from './components/Spinner/Spinner'
const Start = lazy(() => import('./components/Start/Start'))
const SinglePlayer = lazy(() => import('./components/SinglePlayer/SinglePlayer'))
const MultiPlayer = lazy(() => import('./components/MultiPlayer/MultiPlayer'))
function App() {
  const { navigate } = useGameStore()
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
      {navigate === 'multi-player' && (
        <Suspense fallback={<Spinner />}>
          <MultiPlayer />
        </Suspense>
      )}
    </>
  )
}

export default App
