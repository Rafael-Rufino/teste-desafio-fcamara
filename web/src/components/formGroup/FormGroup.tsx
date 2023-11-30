import * as S from './styles'

type FormGroupProps = {
  children: React.ReactNode
  error?: string | null | boolean
}

export function FormGroup({ children, error }: FormGroupProps) {
  return (
    <S.Container>
      {children}
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
