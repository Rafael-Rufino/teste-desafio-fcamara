import * as S from './styles'

type LoadingProps = {
  isLoading: boolean
}

export const Loader = ({ isLoading }: LoadingProps) => {
  if (!isLoading) {
    return null
  }
  return (
    <S.Container>
      <S.Spinner>
        <S.SpinnerDot />
      </S.Spinner>
    </S.Container>
  )
}
