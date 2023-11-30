import { yupResolver } from '@hookform/resolvers/yup'

import * as S from './styles'

import { useForm } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'

import { Button } from '../../components'
import { FormGroup } from '../../components/formGroup/FormGroup'
import { Loader } from '../../components/loader'
import { TextInput } from '../../components/textInput'

import { IAuth } from '../../entities'

import { useAuth } from '../../providers/auth'
import { schema } from './validation/schema'
export const Login = () => {
  const { login, isLoading } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ password, username }: IAuth) => {
    try {
      login({ password, username })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      throw new Error(error as string)
    }
  }
  return (
    <S.Container>
      <S.Title>Faça seu login</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup error={errors.username?.message}>
          <TextInput
            {...register('username')}
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
          />
        </FormGroup>
        <FormGroup error={errors.password?.message}>
          <TextInput
            {...register('password')}
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
          />
        </FormGroup>
        <Button type="submit">
          {isLoading ? (
            <Loader isLoading={isLoading} />
          ) : (
            <>
              <FiLogIn />
              Entrar
            </>
          )}
        </Button>
      </S.Form>
    </S.Container>
  )
}
