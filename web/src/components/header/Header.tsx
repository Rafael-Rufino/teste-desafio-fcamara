import { useAuth } from '../../providers/auth'

import * as S from './styles'

export const Header = () => {
  const { logout, list, user } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <S.Container>
      <S.Logo>FCamara</S.Logo>
      <S.Profile>
        <S.Avatar src={list?.image} />
        <S.Wrapper>
          {user && (
            <S.UserName>
              <span>Olá,</span>
              {list?.username}
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
