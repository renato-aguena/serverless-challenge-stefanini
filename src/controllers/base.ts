import EmployeesController from './employees.controller'
import { InternalServerError } from './helpers/responses'
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
    console.error(error)
    return InternalServerError(error.message)
  }
}

export default {
  postEmployee: async (request: HttpRequest) => await execute(request, EmployeesController, 'postEmployee'),
  putEmployee: async (request: HttpRequest) => await execute(request, EmployeesController, 'putEmployee'),
  deleteEmployee: async (request: HttpRequest) => await execute(request, EmployeesController, 'deleteEmployee'),
  getEmployee: async (request: HttpRequest) => await execute(request, EmployeesController, 'getEmployee')
}
