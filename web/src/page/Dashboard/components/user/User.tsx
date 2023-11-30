import { IUser } from '../../../../entities'

import * as S from './styles'

interface UserProps {
  loggedInUser: IUser | null
}

export const User = ({ loggedInUser }: UserProps) => {
  return (
    <S.Container>
      <S.Avatar src={loggedInUser?.image} alt={loggedInUser?.username} />
      <S.UserInfo>
        <S.InfoItem>
          Username:
          <span>{loggedInUser?.username}</span>
        </S.InfoItem>
        <S.InfoItem>
          Email:
          <span>{loggedInUser?.email}</span>
        </S.InfoItem>
        <S.InfoItem>
          First Name:
          <span>{loggedInUser?.firstName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Last Name:
          <span>{loggedInUser?.lastName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Gender:
          <span>{loggedInUser?.gender}</span>
        </S.InfoItem>
        <S.InfoItem>
          Age:
          <span>{loggedInUser?.age}</span>
        </S.InfoItem>
        <S.InfoItem>
          Phone:
          <span>{loggedInUser?.phone}</span>
        </S.InfoItem>
        <S.InfoItem>
          Birth Date:
          <span>{loggedInUser?.birthDate}</span>
        </S.InfoItem>
        <S.InfoItem>
          University:
          <span>{loggedInUser?.university}</span>
        </S.InfoItem>
      </S.UserInfo>
    </S.Container>
  )
}
