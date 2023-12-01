import * as S from './styles'

import { Logo } from '../../components'
import { Header } from '../../components/header'
import { Profile } from '../../components/profile'
import { useAuth } from '../../contexts/AuthContext'
import { User } from './components/user'

export const Dashboard = () => {
  const { user, loggedInUser } = useAuth()

  return (
    <S.Container>
      <Header>
        <Logo />
        <Profile />
      </Header>
      <S.Content>{loggedInUser && <User user={user} />}</S.Content>
    </S.Container>
  )
}
