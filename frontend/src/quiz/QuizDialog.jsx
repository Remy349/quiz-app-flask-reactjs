import { Button } from '@/components/ui/button'
import { PlusSquare } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'

const QUIZAPP_API_URL = import.meta.env.VITE_QUIZAPP_API_URL

export function QuizDialog() {
  const [] = useState()

  const handleCreateQuiz = async () => {
    const res = await fetch(`${QUIZAPP_API_URL}/quizzes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusSquare className='mr-2 h-4 w-4' />
          Agregar Cuestionario
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Cuestionario</DialogTitle>
          <DialogDescription>
            Pon a prueba el conocimiento de tus usuarios.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-y-4'>
          <Input
            name='title'
            id='title'
            placeholder='Titulo del Cuestionario'
            autoComplete='off'
          />
          <Textarea
            name='description'
            id='description'
            rows='6'
            className='resize-none'
            placeholder='Descripcíon del Cuestionario'
          />
        </div>
        <DialogFooter>
          <Button onClick={handleCreateQuiz}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
