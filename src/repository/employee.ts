import { DynamoDB } from 'aws-sdk'

import config from './../config'
import { CreateEmployee, UpdateEmployee, DeleteEmployee } from './interfaces/employees'

const docClient = new DynamoDB.DocumentClient({ region: config.AWS.REGION })

export default {
  create: (employee: CreateEmployee): Promise<any> => {
    return docClient.put({
      TableName: 'employees',
      Item: employee
    }).promise()
  },
  update: (employee: UpdateEmployee): Promise<any> => {
    return docClient.put({
      TableName: 'employees',
      Item: employee
    }).promise()
  },
  delete: (employee: DeleteEmployee): Promise<any> => {
    return docClient.put({
      TableName: 'employees',
      Item: employee
    }).promise()
  }
  // search: (id) => {

  // },
}
