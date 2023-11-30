import { useAuth } from '../../providers/auth'

import * as S from './styles'

import { Header } from '../../components/header'
import { User } from './components/user'

export const Dashboard = () => {
  const { user, loggedInUser } = useAuth()

  return (
    <S.Container>
      <Header />
      <S.Content>{loggedInUser && <User user={user} />}</S.Content>
    </S.Container>
  )
}
