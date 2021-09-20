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
    throw new Error('failed_create_employee')
  }
}

export const updateEmployee = async ({ id, employee }: { id: string, employee: Employee}): Promise<void> => {
  try {
    const employeeUpdate = {
      id,
      ...employee
    }
    await employeeRepository.update(employeeUpdate)
  } catch (error) {
    throw new Error('failed_update_employee')
  }
}

export const deleteEmployee = async (id: string): Promise<void> => {
  try {
    const employeeDelete = {
      id,
      archived: true
    }
    await employeeRepository.delete(employeeDelete)
  } catch (error) {
    throw new Error('failed_delete_employee')
  }
}

export const searchEmployee = async (id: string): Promise<Employee> => {
  try {
    const employee = await employeeRepository.search(id)
    return employee
  } catch (error) {
    throw new Error('failed_search_employee')
  }
}
