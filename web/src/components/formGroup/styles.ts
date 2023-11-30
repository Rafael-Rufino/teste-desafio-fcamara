import styled from 'styled-components'
import theme from '../../assets/styles/themes/default'

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`

export const Error = styled.small`
  display: block;
  color: ${theme.colors.danger.main};
  font-size: ${theme.fonts.sizes.xSmall};
  margin-top: 8px;
  padding-left: 4px;
`
