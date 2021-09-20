import { HttpRequest, HttpResponse } from './interfaces/http'
import { employeesService } from './../services'
import { Ok, NoContent } from './helpers/responses'

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

  async putEmployee (): Promise<HttpResponse> {
    const employee = this.request.body
    const employeeId = this.request.pathParameters.id
    await employeesService.updateEmployee({
      id: employeeId,
      employee
    })
    return NoContent()
  }
}

export default EmployeesController
