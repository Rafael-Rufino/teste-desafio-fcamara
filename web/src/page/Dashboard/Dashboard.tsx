import { useAuth } from '../../providers/auth'

import * as S from './styles'

import { Logo } from '../../components'
import { Header } from '../../components/header'
import { Profile } from '../../components/profile'
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
