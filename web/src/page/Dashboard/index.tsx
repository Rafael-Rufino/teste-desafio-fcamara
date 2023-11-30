import { useAuth } from '../../providers/auth'

import * as S from './styles'

import { Header } from '../../components/header'
import { User } from './components/user'

export const Dashboard = () => {
  const { user, list } = useAuth()

  return (
    <S.Container>
      <Header />
      <S.Content>{user && <User list={list} />}</S.Content>
    </S.Container>
  )
}
