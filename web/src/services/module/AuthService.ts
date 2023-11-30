import { AxiosError } from 'axios'

import { IAuth } from '../../entities/IAuth'

import HttpClient from '../utils/HttpClient'

class AuthService {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://dummyjson.com')
  }

  async login({ username, password }: IAuth) {
    try {
      const response = await this.httpClient.post('/auth/login', {
        username,
        password,
      })
      return response
    } catch (error) {
      const axiosError = error as AxiosError
      return Promise.reject(`Erro ao fazer login: ${axiosError.message}`)
    }
  }
}

export default new AuthService()
