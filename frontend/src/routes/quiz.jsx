import { ChevronsLeft, PlusSquare, Trash } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const QUIZAPP_API_URL = import.meta.env.VITE_QUIZAPP_API_URL

export async function loader({ params }) {
  const res = await fetch(`${QUIZAPP_API_URL}/quizzes/${params.quizId}`)
  const quiz = await res.json()

  return { quiz }
}

export default function Quiz() {
  const { quiz } = useLoaderData()
  const [questionOptionFields, setQuestionOptionFields] = useState([''])

  const handleAddQuestionOptionField = () => {
    setQuestionOptionFields([...questionOptionFields, ''])
  }

  const handleDeleteQuestionOptionField = (index) => {
    const newQuestionoptionFields = [...questionOptionFields]
    newQuestionoptionFields.splice(index, 1)

    setQuestionOptionFields(newQuestionoptionFields)
  }

  return (
    <>
      <div>
        <Link to='/' className={buttonVariants({ variant: 'outline' })}>
          <ChevronsLeft className='mr-2 h-5 w-5' />
          Volver
        </Link>
      </div>
      <section className='pt-8'>
        <Card>
          <CardHeader>
            <CardTitle className='mb-2'>{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <form className='grid w-full gap-y-6'>
                <div className='flex flex-col space-y-2'>
                  <Label className='text-base' htmlFor='questionTitle'>
                    Pregunta
                  </Label>
                  <Input
                    type='text'
                    id='questionTitle'
                    name='questionTitle'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className='grid gap-y-6'>
                  {questionOptionFields.map((field, index) => (
                    <div key={index} className='grid gap-y-4'>
                      <div className='flex flex-col space-y-2'>
                        <Label className='text-base' htmlFor='questionOption'>
                          Opción
                        </Label>
                        <Textarea
                          id='questionOption'
                          name='questionOption'
                          rows='2'
                          required
                        />
                      </div>
                      <div>
                        <Button
                          type='submit'
                          variant='destructive'
                          onClick={() => handleDeleteQuestionOptionField(index)}
                        >
                          <Trash className='mr-2 w-4 h-4' />
                          Eliminar Opción
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  type='button'
                  variant='outline'
                  onClick={handleAddQuestionOptionField}
                >
                  <PlusSquare className='mr-2 w-4 h-4' />
                  Agregar Opción
                </Button>
                <Button type='submit'>Confirmar</Button>
              </form>
            </div>
            <Separator orientation='vertical' />
            <div></div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
