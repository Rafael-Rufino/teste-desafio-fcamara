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
        {user && (
          <S.Avatar src={loggedInUser?.image} alt={loggedInUser?.username} />
        )}
        <S.Wrapper>
          {user && (
            <S.UserName>
              <span>Olá,</span>
              {loggedInUser?.username}
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
