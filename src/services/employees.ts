import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

import employeeRepository from './../repository/employee'
import { Employee } from './interfaces/employees'

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  try {
    employee = {
      id: uuidv4(),
      createdAt: moment.utc().format('YYYY-MM-DDTHH:mm:ss'),
      archived: false,
      ...employee
    }
    await employeeRepository.create(employee)
    return employee
  } catch (error) {
    console.log('createEmployee error', error)
    throw new Error('failed_create_employee')
  }
}
