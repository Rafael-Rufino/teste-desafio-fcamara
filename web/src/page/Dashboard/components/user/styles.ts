import styled from 'styled-components'
import theme from '../../../../assets/styles/themes/default'

export const Container = styled.div`
  display: flex;
  background: ${theme.colors.primary.lighter};
  max-width: 500px;
  border-radius: 8px;
  align-items: center;
  padding: 32px 16px;
  gap: 1rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`

export const Avatar = styled.img`
  display: flex;
  width: 160px;
  height: 155px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${theme.colors.primary.main};
`

export const InfoItem = styled.small`
  display: flex;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.gray.dark};
  font-size: ${theme.fonts.sizes.small};

  span {
    margin-left: 4px;
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.primary.dark};
    font-size: ${theme.fonts.sizes.small};
  }
`
