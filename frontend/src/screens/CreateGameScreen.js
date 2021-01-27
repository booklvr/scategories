import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

const CreateGameScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      console.log('logged in user')
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return <div>Create the game screen</div>
}

export default CreateGameScreen
