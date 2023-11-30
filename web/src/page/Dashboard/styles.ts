import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
