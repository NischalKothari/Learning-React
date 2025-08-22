
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='flex justify-center p-5 bg-gray-300 text-4xl'>
      User: {userid}
    </div>
  )
}

export default User
