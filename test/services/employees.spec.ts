import { employeesService } from './../../src/services'
import employeeRepository from './../../src/repository/employee'

describe('Employees Service', () => {
  test('given a valid employee should create as expected', async () => {
    const employee = {
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer'
    }
    jest.spyOn(employeeRepository, 'create').mockReturnValue(Promise.resolve({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      createdAt: '2021-09-18T02:38:00',
      archived: false,
      ...employee
    }))

    const createdEmployee = await employeesService.createEmployee(employee)
    expect(createdEmployee).toEqual({
      id: expect.any(String),
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer',
      createdAt: expect.any(String),
      archived: false
    })
  })

  test('given a valid employee but disconect of database should throw error as expected', async () => {
    const employee = {
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer'
    }
    jest.spyOn(employeeRepository, 'create').mockImplementation(() => { throw new Error('failed_to_connect_to_database') })

    expect(employeesService.createEmployee(employee)).rejects.toMatch('failed_create_employee')
  })
})
