import axios, { AxiosError, AxiosResponse } from 'axios'

class HttpClient {
  private readonly baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  get<T>(path: string): Promise<T> {
    return this.makeRequest<T>('GET', path)
  }

  post<T>(path: string, body: any): Promise<T> {
    return this.makeRequest<T>('POST', path, body)
  }

  async makeRequest<T>(method: string, path: string, body?: any): Promise<T> {
    const url = `${this.baseURL}${path}`

    try {
      const response: AxiosResponse<T> = await axios.request({
        url,
        method,
        data: body,
      })
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      const errorMessage = `Erro na requisição ${method} para ${url}: ${axiosError.message}`
      return Promise.reject(errorMessage)
    }
  }
}

export default HttpClient
