import { QuizDialog } from './quiz/QuizDialog'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
      <main className='container pt-8'>
        <header className='flex justify-between items-center'>
          <div>
            <h1 className='text-2xl font-bold'>Cuestionarios</h1>
            <p className='text-muted-foreground'>
              ¡Ve la lista de los cuestionarios creados!
            </p>
          </div>
          <div>
            <QuizDialog />
          </div>
        </header>
      </main>
      <Toaster />
    </>
  )
}

export default App
