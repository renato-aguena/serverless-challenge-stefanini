import { DynamoDB } from 'aws-sdk'

import config from './../config'
import { Employee } from './interfaces/employees'

const docClient = new DynamoDB.DocumentClient({ region: config.AWS.REGION })

export default {
  create: (employee: Employee): Promise<any> => {
    return docClient.put({
      TableName: 'employees',
      Item: employee
    }).promise()
  }
  // search: (id) => {

  // },
  // delete: (id) => {

  // },
  // update: (employee) => {

  // }
}
