import { IUser } from '../../entities'

import HttpClient from '../utils/HttpClient'

class UsersService {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://dummyjson.com')
  }

  async listUser(userId: string): Promise<IUser | null> {
    return this.httpClient.get<IUser>(`/users/${userId}`)
  }
}

export default new UsersService()
