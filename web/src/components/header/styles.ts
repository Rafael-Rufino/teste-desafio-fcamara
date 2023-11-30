import styled from 'styled-components'
import theme from '../../assets/styles/themes/default'
import { Button } from '../button'

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  background: ${theme.colors.white};
  padding: 0 16px;
  justify-content: space-between;
`
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
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
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
