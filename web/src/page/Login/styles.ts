import styled from 'styled-components'
import theme from '../../assets/styles/themes/default'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  > button {
    margin-top: 24px;
  }
`
export const Title = styled.h1`
  font-size: ${theme.fonts.sizes['3xlarge']};
  margin-bottom: 2rem;
  text-align: center;
  color: ${theme.colors.primary.main};
`
