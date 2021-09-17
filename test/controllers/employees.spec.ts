import EmployeesController from './../../src/controllers/employees.controller'
import { employeesService } from './../../src/services'

describe('Employees Controller', () => {
  test('given a valid employee should create as expected', async () => {
    const input = {
      body: {
        name: 'Renato Kenji Aguena',
        age: 26,
        role: 'developer'
      }
    }
    jest.spyOn(employeesService, 'createEmployee').mockReturnValue(Promise.resolve({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      createdAt: '2021-09-18T02:38:00',
      archived: false,
      ...input.body
    }))
    const employeeController = new EmployeesController(input)

    const result = await employeeController.postEmployee()
    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body)).toEqual({
      id: expect.any(String),
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer',
      createdAt: expect.any(String),
      archived: false
    })
  })
})
