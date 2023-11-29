import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link'
  children?: React.ReactNode
}

export const Button = ({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      {children}
    </S.Container>
  )
}
