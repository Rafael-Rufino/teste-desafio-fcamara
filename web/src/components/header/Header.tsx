import { useAuth } from '../../providers/auth'

import * as S from './styles'

export const Header = () => {
  const { logout, loggedInUser, user } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <S.Container>
      <S.Logo>FCamara</S.Logo>
      <S.Profile>
        {loggedInUser && <S.Avatar src={user?.image} alt={user?.username} />}
        <S.Wrapper>
          {loggedInUser && (
            <S.UserName>
              <span>Olá,</span>
              {user?.username}
            </S.UserName>
          )}
          <S.LogoutButton variant="outline" onClick={handleLogout}>
            Sair
          </S.LogoutButton>
        </S.Wrapper>
      </S.Profile>
    </S.Container>
  )
}
