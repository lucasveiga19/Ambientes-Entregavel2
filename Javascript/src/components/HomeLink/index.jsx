import {AiFillHome} from 'react-icons/ai'
import {Button} from './styles'
import Link from 'next/link'

export default function HomeLink() {
  return (
    <Link href="/" passHref>
        <Button>
            <AiFillHome size={30}/>
        </Button>
    </Link>
  )
}
