import styled from 'styled-components'

import theme from '../../assets/styles/themes/default'

type ButtonProps = {
  variant?: 'primary' | 'link' | 'outline'
  color?: string
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  width: 100%;
  border-radius: 4px;
  border: none;
  font-size: ${theme.fonts.sizes.large};
  gap: 8px;

  ${({ variant, theme, color }) => {
    if (variant === 'primary') {
      return `
        height: 52px;
        box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.04);
        background-color:  ${
          color ? theme.colors[color].main : theme.colors.primary.main
        };
        color: white;

        &:hover {
          background-color:  ${
            color ? theme.colors[color].light : theme.colors.primary.light
          };
          opacity: 0.9;
        }

        &:active {
          background-color:  ${
            color ? theme.colors[color].dark : theme.colors.primary.dark
          };
        }

        &[disabled]{
          background: #ccc;
          cursor: default;
        }

      `
    }

    if (variant === 'link') {
      return `
      background: transparent;
        color:  ${
          color ? theme.colors[color].lighter : theme.colors.primary.main
        };
        &:hover {
          opacity: 0.8;
        }
      `
    }

    if (variant === 'outline') {
      return `
        height: 52px;
        background: transparent;
        color: ${theme.colors.primary.main};
        border: 2px solid ${theme.colors.primary.main};
        &:hover {
          background-color: ${theme.colors.primary.light};
          border-color: ${theme.colors.primary.light};
        }
      `
    }

    return ''
  }}
`
