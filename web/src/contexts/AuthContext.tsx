import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { IAuth, IUser } from '../entities'

import { AuthService, UserService } from '../services/module'
import UserMapper from '../services/module/mappers/UserMapper'

interface IAuthContext {
  isAuthenticated: boolean
  user: IUser | null
  isLoading: boolean
  login(data: IAuth): Promise<void>
  logout(): void
  loggedInUser: IAuth | null
}

interface IAuthProvider {
  children: React.ReactNode
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null)

  const [loggedInUser, setLoggedInUser] = useState<IAuth | null>(null)

  const isAuthenticated = !!loggedInUser

  const [isLoading, setIsLoading] = useState(false)

  const router = useNavigate()

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storageUser = localStorage.getItem('@auth:user')

        if (storageUser) {
          setLoggedInUser(JSON.parse(storageUser))
        } else {
          router('/login')
        }
      } catch (error) {
        console.error('Erro ao carregar dados do armazenamento local:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStorageData()
  }, [router])

  const getUser = useMemo(
    () => async (userId: string) => {
      try {
        const response = await UserService.listUser(userId)
        const user = UserMapper.toDomain(response as IUser)
        setUser(user)
      } catch (error) {
        console.error('Erro ao carregar usuário:', error)
      }
    },
    [setUser]
  )

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) {
        router('/login')
      } else {
        getUser(String(loggedInUser.id))
        router('/')
      }
    }

    fetchData()
  }, [loggedInUser, isAuthenticated, router])

  const login = useCallback(
    async ({ password, username }: IAuth) => {
      try {
        setIsLoading(true)
        const response = await AuthService.login({ password, username })
        toast.success('Login realizado com sucesso!')
        setLoggedInUser(response as IAuth)

        localStorage.setItem('@auth:user', JSON.stringify(response))
        router('/')
      } catch (error) {
        toast.error('Usuário ou senha inválido!')
        console.error('Erro ao realizar login:', error)
      } finally {
        setIsLoading(false)
      }
    },
    [router, setLoggedInUser, setIsLoading]
  )

  const logout = () => {
    localStorage.removeItem('@auth:user')
    setLoggedInUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
        loggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)

  return context
}
