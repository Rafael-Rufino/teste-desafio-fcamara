import styled from 'styled-components'

import theme from '../../assets/styles/themes/default'

export const Container = styled.small`
  font-size: ${theme.fonts.sizes['2xlarge']};
  font-weight: ${theme.fonts.weight.extraBold};
  color: ${theme.colors.primary.main};

  @media (max-width: 520px) {
    font-size: ${theme.fonts.sizes.xLarge};
  }
`
