import EmployeesController from './employees.controller'
import { HttpRequest, HttpResponse } from './interfaces/http'

const execute = async (request: HttpRequest, Controller, method: string): Promise<HttpResponse> => {
  try {
    const entry = {
      body: request.body ? JSON.parse(request.body) : null,
      path: request.pathParameters
    }

    const controller = new Controller(entry)
    const response = await controller[method]()
    return response
  } catch (error) {
    return {
      body: JSON.stringify(error),
      statusCode: 500
    }
  }
}

export default {
  postEmployee: async (request: HttpRequest) => await execute(request, EmployeesController, 'postEmployee')
}
