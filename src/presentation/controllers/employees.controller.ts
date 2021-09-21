import { HttpRequest, HttpResponse } from './../../infrastructure/interfaces/http'
import { Ok, NoContent } from './../../infrastructure/helpers/responses'
import { employeesService } from './../../application/services'

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
    const employeeId = this.request.path.id
    await employeesService.updateEmployee({
      id: employeeId,
      employee
    })
    return NoContent()
  }

  async deleteEmployee (): Promise<HttpResponse> {
    const employeeId = this.request.path.id
    await employeesService.deleteEmployee(employeeId)
    return NoContent()
  }

  async getEmployee (): Promise<HttpResponse> {
    const employeeId = this.request.path.id
    const employee = await employeesService.searchEmployee(employeeId)
    return Ok(employee)
  }
}

export default EmployeesController
