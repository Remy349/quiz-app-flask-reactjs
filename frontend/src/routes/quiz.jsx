import { ChevronsLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import {buttonVariants} from '@/components/ui/button'

export function Quiz() {
  return (
    <>
      <div>
        <Link to='/' className={buttonVariants({'variant': 'outline'})}>
          <ChevronsLeft className='mr-2 h-5 w-5' />
          Volver
        </Link>
      </div>
    </>
  )
}
