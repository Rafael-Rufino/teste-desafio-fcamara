import { useAuth } from '../../contexts/AuthContext'
import * as S from './styles'

export const Profile = () => {
  const { user, loggedInUser, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }
  return (
    <>
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
    </>
  )
}
