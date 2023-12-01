import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link'
  children?: React.ReactNode
  color?: string
  background?: string
}

export const Button = ({
  variant = 'primary',
  color,
  background,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      variant={variant}
      color={color}
      background={background}
      {...rest}
    >
      {children}
    </S.Container>
  )
}
