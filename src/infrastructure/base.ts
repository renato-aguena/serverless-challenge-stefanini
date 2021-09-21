import { HttpServerlessRequest, HttpResponse } from './interfaces/http'
import { InternalServerError } from './helpers/responses'

export default async (request: HttpServerlessRequest, Controller, method: string): Promise<HttpResponse> => {
  try {
    const entry = {
      body: request.body ? JSON.parse(request.body) : null,
      path: request.pathParameters
    }

    const controller = new Controller(entry)
    const response = await controller[method]()
    return response
  } catch (error) {
    console.error(error)
    return InternalServerError(error.message)
  }
}
