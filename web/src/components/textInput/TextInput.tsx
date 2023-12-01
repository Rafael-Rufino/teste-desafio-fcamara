import React from 'react'

import * as S from './styles'

type TextInputProps = {
  label?: string
  name?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({ label, name, ...rest }: TextInputProps) => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input {...rest} />
    </S.Container>
  )
}
