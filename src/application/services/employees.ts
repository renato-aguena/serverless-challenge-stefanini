import employeeRepository from './../../repository/employee/employee'
import { Employee } from './interfaces/employees'
import { uuid, date } from './helpers'

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  try {
    employee = {
      id: uuid.generate(),
      createdAt: date.dateUtcString(),
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
    await employeeRepository.update(id, employee)
  } catch (error) {
    throw new Error('failed_update_employee')
  }
}

export const deleteEmployee = (id: string): Promise<void> => {
  try {
    return employeeRepository.delete(id)
  } catch (error) {
    throw new Error('failed_delete_employee')
  }
}

export const searchEmployee = async (id: string): Promise<Employee> => {
  try {
    const employee = await employeeRepository.searchOne(id)
    return employee
  } catch (error) {
    throw new Error('failed_search_employee')
  }
}
