import React from 'react'
import * as S from './styles'

type SearchInputProps = {
  label?: string
  inputRef?: React.Ref<HTMLInputElement>
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <S.Container>
        {label && <S.Label>{label}</S.Label>}
        <S.Input ref={ref} {...rest} />
      </S.Container>
    )
  }
)
