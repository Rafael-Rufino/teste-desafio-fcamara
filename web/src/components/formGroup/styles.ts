import styled from 'styled-components'
import theme from '../../assets/styles/themes/default'

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`

export const Error = styled.small`
  color: ${theme.colors.danger.main};
  font-size: 0.75rem;
  margin-top: 8px;
  display: block;
  padding-left: 4px;
`
