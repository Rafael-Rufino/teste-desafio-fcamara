import { IUser } from '../../../../entities'

import * as S from './styles'

interface UserProps {
  user: IUser | null
}

export const User = ({ user }: UserProps) => {
  return (
    <S.Container>
      <S.Avatar src={user?.image} alt={user?.username} />
      <S.UserInfo>
        <S.InfoItem>
          Username:
          <span>{user?.username}</span>
        </S.InfoItem>
        <S.InfoItem>
          Email:
          <span>{user?.email}</span>
        </S.InfoItem>
        <S.InfoItem>
          First Name:
          <span>{user?.firstName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Last Name:
          <span>{user?.lastName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Gender:
          <span>{user?.gender}</span>
        </S.InfoItem>
        <S.InfoItem>
          Age:
          <span>{user?.age}</span>
        </S.InfoItem>
        <S.InfoItem>
          Phone:
          <span>{user?.phone}</span>
        </S.InfoItem>
        <S.InfoItem>
          Birth Date:
          <span>{user?.birthDate}</span>
        </S.InfoItem>
        <S.InfoItem>
          University:
          <span>{user?.university}</span>
        </S.InfoItem>
      </S.UserInfo>
    </S.Container>
  )
}
