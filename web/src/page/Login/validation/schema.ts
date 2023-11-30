import * as yup from 'yup'

export const schema = yup.object({
  username: yup
    .string()
    .required('O nome de usuário é obrigatório.')
    .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres'),

  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
})
