import { IUser } from '../../../../entities'

import * as S from './styles'

interface UserProps {
  list: IUser | null
}

export const User = ({ list }: UserProps) => {
  return (
    <S.Container>
      <S.Avatar src={list?.image} alt={list?.username} />
      <S.UserInfo>
        <S.InfoItem>
          Username:
          <span>{list?.username}</span>
        </S.InfoItem>
        <S.InfoItem>
          Email:
          <span>{list?.email}</span>
        </S.InfoItem>
        <S.InfoItem>
          First Name:
          <span>{list?.firstName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Last Name:
          <span>{list?.lastName}</span>
        </S.InfoItem>
        <S.InfoItem>
          Gender:
          <span>{list?.gender}</span>
        </S.InfoItem>
        <S.InfoItem>
          Age:
          <span>{list?.age}</span>
        </S.InfoItem>
        <S.InfoItem>
          Phone:
          <span>{list?.phone}</span>
        </S.InfoItem>
        <S.InfoItem>
          Birth Date:
          <span>{list?.birthDate}</span>
        </S.InfoItem>
        <S.InfoItem>
          University:
          <span>{list?.university}</span>
        </S.InfoItem>
      </S.UserInfo>
    </S.Container>
  )
}
