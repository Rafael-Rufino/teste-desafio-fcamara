import * as S from './styles'

interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return <S.Container>{children}</S.Container>
}
