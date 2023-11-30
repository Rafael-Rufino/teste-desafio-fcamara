import { IUser } from '../../../entities'

class UserMapper {
  toDomain(persistenceUser: IUser): IUser {
    return {
      id: persistenceUser.id,
      username: persistenceUser.username,
      email: persistenceUser.email,
      firstName: persistenceUser.firstName,
      lastName: persistenceUser.lastName,
      gender: persistenceUser.gender,
      image: persistenceUser.image,
      age: persistenceUser.age,
      phone: persistenceUser.phone,
      birthDate: persistenceUser.birthDate,
      university: persistenceUser.university,
    }
  }
}

export default new UserMapper()
