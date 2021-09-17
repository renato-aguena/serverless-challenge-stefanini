import { HttpRequest, HttpResponse } from './interfaces/http'
import { employeesService } from './../services'
import { Ok } from './helpers/responses'

class EmployeesController {
  private readonly request: HttpRequest

  constructor (request: HttpRequest) {
    this.request = request
  }

  async postEmployee (): Promise<HttpResponse> {
    const employee = this.request.body
    const createdEmployee = await employeesService.createEmployee(employee)
    return Ok(createdEmployee)
  }
}

export default EmployeesController
