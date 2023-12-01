import { IAuth } from '../../entities/IAuth'

import HttpClient from '../utils/HttpClient'

class AuthService {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://dummyjson.com')
  }

  async login({ username, password }: IAuth) {
    return this.httpClient.post('/auth/login', {
      username,
      password,
    })
  }
}

export default new AuthService()
