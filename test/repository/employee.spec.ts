const putFn = jest.fn().mockImplementation(() => ({ promise: jest.fn().mockReturnValue(Promise.resolve({})) }))
const getFn = jest.fn().mockImplementation(() => ({ promise: jest.fn().mockReturnValue(Promise.resolve({
  Item: {
    id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
    name: 'Renato Kenji Aguena',
    age: 26,
    role: 'developer',
    archived: false,
    createdAt: '2021-09-20T18:02:00'
  }
})) }))
class DocumentClient {
  put = putFn
  get = getFn
}
const DynamoDB = {
  DocumentClient
}
jest.mock('aws-sdk', () => {
  return { DynamoDB }
})

import employeeRepository from './../../src/repository/employee'

describe('Employees Repository', () => {

  test('given a valid employee should update as expected', async () => {    
    const employee = {
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      createdAt: '2021-09-19T02:29:00',
      archived: false,
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer'
    }
    
    const createdEmployee = await employeeRepository.create(employee)
    expect(createdEmployee).toEqual({})
  })

  test('given a valid employee should update as expected', async () => {    
    const employee = {
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      name: 'Renato K. Aguena',
      age: 27,
      role: 'Desenvolvedor'
    }
    
    const updatedEmployee = await employeeRepository.update(employee)
    expect(updatedEmployee).toEqual({})
  })

  test('given a valid id should delete as expected', async () => {    
    const employee = {
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      archived: true
    }
    
    const deletedEmployee = await employeeRepository.delete(employee)
    expect(deletedEmployee).toEqual({})
  })

  test('given a valid id should search as expected', async () => {
    const foundEmployee = await employeeRepository.search('452fc281-b0c6-55ad-8493-07d7f44ced21')
    expect(foundEmployee).toEqual({
      id: '452fc281-b0c6-55ad-8493-07d7f44ced21',
      name: 'Renato Kenji Aguena',
      age: 26,
      role: 'developer',
      archived: false,
      createdAt: '2021-09-20T18:02:00'
    })
  })
})
