import * as S from './styles'

import { useFormik } from 'formik'
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

  const formik = useFormik({
    onSubmit: async ({ password, username }: IAuth) => {
      login({ password, username })
    },
    initialValues: {
      username: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: schema,
  })

  return (
    <S.Container>
      <S.Title>Faça seu login</S.Title>
      <S.Form onSubmit={formik.handleSubmit}>
        <FormGroup error={formik.touched.username && formik.errors.username}>
          <TextInput
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
          />
        </FormGroup>
        <FormGroup error={formik.touched.password && formik.errors.password}>
          <TextInput
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
          />
        </FormGroup>
        <Button type="submit" disabled={formik.isSubmitting || !formik.isValid}>
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
