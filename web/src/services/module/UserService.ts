import { IUser } from '../../entities'
import HttpClient from '../utils/HttpClient'
import UserMapper from './mappers/UserMapper'

class UsersService {
  private readonly httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('https://dummyjson.com')
  }

  async listUser(userId: string): Promise<IUser | null> {
    try {
      const response = await this.httpClient.get<IUser>(`/users/${userId}`)
      const user = UserMapper.toDomain(response)
      return user
    } catch (error) {
      console.error('Erro ao listar o usuário:', error)
      return null
    }
  }
}

export default new UsersService()
