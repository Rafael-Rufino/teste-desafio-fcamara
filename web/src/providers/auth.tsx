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
  loggedInUser: IUser | null
}

interface IAuthProvider {
  children: React.ReactNode
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IAuth | null>(null)

  const [loggedInUser, setLoggedInUser] = useState<IUser | null>(null)

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
      } catch (error) {
        console.error('Erro ao carregar dados do armazenamento local:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStorageData()
  }, [router])

  const getUser = async (userId: string) => {
    try {
      const response = await UserService.listUser(userId)
      setLoggedInUser(response)
    } catch (error) {
      console.error('Erro ao carregar usuário:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) {
        router('/login')
      } else {
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
      console.error('Erro ao realizar login:', error)
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
