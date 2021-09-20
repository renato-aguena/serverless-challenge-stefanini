import EmployeesController from './../../src/controllers/employees.controller'
import { employeesService } from './../../src/services'

describe('Employees Controller', () => {
  describe('post employee', () => {
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

  describe('put employee', () => {
    test('given a valid employee should update as expected', async () => {
      const input = {
        body: {
          name: 'Renato K. Aguena',
          age: 27,
          role: 'Desenvolvedor'
        },
        pathParameters: { id: '452fc281-b0c6-55ad-8493-07d7f44ced21' }
      }
      jest.spyOn(employeesService, 'updateEmployee').mockReturnValue(Promise.resolve())
      const employeeController = new EmployeesController(input)
  
      const result = await employeeController.putEmployee()
      expect(result.statusCode).toBe(204)
    })
  })
})
