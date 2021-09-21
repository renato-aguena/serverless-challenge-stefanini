import { employeesService } from './../../src/application/services'
import employeeRepository from './../../src/repository/employee/employee'

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
    try {
      await employeesService.createEmployee(employee)
    } catch (error) {
      expect(error.message).toBe('failed_create_employee')
    }
  })

  test('given a valid employee should update as expected', async () => {
    const employee = {
      name: 'Renato K. Aguena',
      age: 27,
      role: 'Desenvolvedor'
    }
    jest.spyOn(employeeRepository, 'update').mockReturnValue(Promise.resolve({}))
    const updateEmployeeCall = jest.spyOn(employeesService, 'updateEmployee')
    await employeesService.updateEmployee({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      employee
    })
    expect(updateEmployeeCall).toHaveBeenCalledWith({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      employee
    })
  })

  test('given a valid employee to update but disconect of database should throw error as expected', async () => {
    const employee = {
      name: 'Renato K. Aguena',
      age: 27,
      role: 'Desenvolvedor'
    }
    jest.spyOn(employeeRepository, 'update').mockImplementation(() => { throw new Error('failed_to_connect_to_database') })

    try {
      await employeesService.updateEmployee({
        id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
        employee
      })
    } catch (error) {
      expect(error.message).toBe('failed_update_employee')
    }

    // expect(employeesService.updateEmployee({
    //   id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
    //   employee
    // })).rejects.toMatch('failed_update_employee')
  })

  test('given a valid id should delete as expected', async () => {
    jest.spyOn(employeeRepository, 'delete').mockReturnValue(Promise.resolve({}))
    const deleteEmployeeCall = jest.spyOn(employeesService, 'deleteEmployee')
    await employeesService.deleteEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')
    expect(deleteEmployeeCall).toHaveBeenCalledWith('452fc281-b0c6-55ad-8493-07d7f44ced21')
  })

  test('given a valid employee to delete but disconect of database should throw error as expected', async () => {
    jest.spyOn(employeeRepository, 'delete').mockImplementation(() => { throw new Error('failed_to_connect_to_database') })

    try {
      await employeesService.deleteEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')
    } catch (error) {
      expect(error.message).toBe('failed_delete_employee')
    }

    // expect(employeesService.deleteEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')).rejects.toMatch('failed_delete_employee')
  })

  test('given a valid id should search as expected', async () => {
    jest.spyOn(employeeRepository, 'searchOne').mockReturnValue(Promise.resolve({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer',
      archived: false,
      createdAt: '2021-09-20T18:02:00'
    }))
    const employee = await employeesService.searchEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')
    expect(employee).toEqual({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer',
      archived: false,
      createdAt: '2021-09-20T18:02:00'
    })
  })

  test('given a valid employee to search but disconect of database should throw error as expected', async () => {
    jest.spyOn(employeeRepository, 'searchOne').mockImplementation(() => { throw new Error('failed_to_connect_to_database') })

    try {
      await employeesService.searchEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')
    } catch (error) {
      expect(error.message).toBe('failed_search_employee')
    }
    // expect(employeesService.searchEmployee('452fc281-b0c6-55ad-8493-07d7f44ced21')).rejects.toMatch('failed_search_employee')
  })
})
