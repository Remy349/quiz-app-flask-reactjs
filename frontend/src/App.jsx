import { QuizDialog } from './quiz/QuizDialog'
import { Toaster } from '@/components/ui/toaster'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useState } from 'react'
import { useEffect } from 'react'
import { QuizAlertDialog } from './quiz/QuizAlertDialog'

const QUIZAPP_API_URL = import.meta.env.VITE_QUIZAPP_API_URL

function App() {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    fetch(`${QUIZAPP_API_URL}/quizzes`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
  }, [quizzes])

  return (
    <>
      <main className='container pt-8 pb-16'>
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
        <section>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cuestionario</TableHead>
                <TableHead>Eliminar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell>{quiz.title}</TableCell>
                  <TableCell>
                    <QuizAlertDialog quizId={quiz.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
      <Toaster />
    </>
  )
}

export default App
