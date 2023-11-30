import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { IAuth, IUser } from '../entities'

import { AuthService, UserService } from '../services/module'

interface IAuthContext {
  isAuthenticated: boolean
  user: IAuth | null
  isLoading: boolean
  login(data: IAuth): Promise<void>
  logout(): void
  list: IUser | null
}

interface IAuthProvider {
  children: React.ReactNode
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IAuth | null>(null)
  const [list, setList] = useState<IUser | null>(null)

  const isAuthenticated = !!user

  const [isLoading, setIsLoading] = useState(false)
  const router = useNavigate()

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storageUser = localStorage.getItem('@auth:user')

        if (storageUser) {
          setUser(JSON.parse(storageUser))
        } else {
          router('/login')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadStorageData()
  }, [router])

  const getUser = async (userId: string) => {
    try {
      const response = await UserService.listUser(userId)
      setList(response)
    } catch (error) {
      throw new Error('Erro ao carregar usuário!')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) {
        router('/login')
      } else {
        localStorage.getItem('@auth:user')
        getUser(String(user.id))
        router('/')
      }
    }

    fetchData()
  }, [user, isAuthenticated, router])

  const login = async ({ password, username }: IAuth) => {
    try {
      setIsLoading(true)
      const response = await AuthService.login({ password, username })
      toast.success('Login realizado com sucesso!')

      setUser(response as IAuth)

      localStorage.setItem('@auth:user', JSON.stringify(response))
      router('/')
    } catch (error) {
      toast.error('Usuário ou senha inválido!')
      throw new Error(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    localStorage.removeItem('@auth:user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
        list,
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
