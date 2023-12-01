import React from 'react'

import * as S from './styles'

type TextInputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input {...rest} />
    </S.Container>
  )
}
