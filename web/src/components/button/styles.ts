import styled from 'styled-components'

import theme from '../../assets/styles/themes/default'

type ButtonProps = {
  variant?: 'primary' | 'link' | 'outline'
  background?: string
  color?: string
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.25rem;
  border: none;
  font-size: ${theme.fonts.sizes.large};
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;

  ${({ variant, theme, background, color }) => {
    if (variant === 'primary') {
      return `
        height: 52px;
        box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.04);
        background:  ${background ? [background] : theme.colors.primary.main};
        color: ${color ? [color] : theme.colors.white};

        &:hover {
          background:  ${
            background ? [background] : theme.colors.primary.light
          };
          opacity: 0.9;
        }

        &:active {
          background:  ${background ? [background] : theme.colors.primary.dark};
        }

        &[disabled]{
          background: ${background ? [background] : theme.colors.primary.light};
          cursor: default;
          opacity: 0.7;
        }

      `
    }

    if (variant === 'link') {
      return `
      background: transparent;
        color:  ${color ? [color] : theme.colors.primary.main};
        &:hover {
          opacity: 0.8;
        }
      `
    }

    if (variant === 'outline') {
      return `
        height: 52px;
        background: transparent;
        color: ${color ? [color] : theme.colors.primary.main};
        border: 2px solid ${color ? [color] : theme.colors.primary.main};
        &:hover {
          background: ${background ? [background] : theme.colors.primary.light};
          border-color: ${color ? [color] : theme.colors.primary.light};
        }
      `
    }

    return ''
  }}
`
