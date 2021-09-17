const putFn = jest.fn().mockImplementation(() => ({ promise: jest.fn().mockReturnValue(Promise.resolve({})) }))
class DocumentClient {
  put = putFn
}
const DynamoDB = {
  DocumentClient
}
jest.mock('aws-sdk', () => {
  return { DynamoDB }
})

import employeeRepository from './../../src/repository/employee'

describe('Employees Repository', () => {

  test('given a valid employee should create as expected', async () => {    
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
})
