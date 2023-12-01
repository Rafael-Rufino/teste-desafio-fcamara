import styled from 'styled-components'

import theme from '../../assets/styles/themes/default'

import { Button } from '../button'

export const Profile = styled.div`
  display: flex;
  gap: 8px;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Logo = styled.small`
  font-size: ${theme.fonts.sizes['2xlarge']};
  font-weight: ${theme.fonts.weight.extraBold};
  color: ${theme.colors.primary.main};

  @media (max-width: 520px) {
    font-size: ${theme.fonts.sizes.xLarge};
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;

  @media (max-width: 520px) {
    display: none;
  }
`

export const UserName = styled.small`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.sizes.small};
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.gray.main};
  padding-right: 12px;

  span {
    color: ${theme.colors.gray.main};
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.sizes.medium};
  }
`

export const LogoutButton = styled(Button)`
  width: 80px;
  height: 36px;
  font-size: ${theme.fonts.sizes.small};
`
