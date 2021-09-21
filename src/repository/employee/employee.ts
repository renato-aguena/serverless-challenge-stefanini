import { DynamoDB } from 'aws-sdk'

import config from './../../commons/config'
import { CreateEmployee, UpdateEmployee } from './interfaces/employees'
import { Repository } from './../base'

const docClient = new DynamoDB.DocumentClient({ region: config.AWS.REGION })

class EmployeeRepository implements Repository {
  create (employee: CreateEmployee): Promise<any> {
    return docClient.put({
      TableName: config.AWS.DYNAMO.TABLES.EMPLOYEES,
      Item: employee
    }).promise()
  }

  update (id: string, employee: UpdateEmployee): Promise<any> {
    return docClient.update({
      TableName: config.AWS.DYNAMO.TABLES.EMPLOYEES,
      Key: { id },
      UpdateExpression: 'set #name = :name, #age = :age, #role = :role',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#age': 'age',
        '#role': 'role'
      },
      ExpressionAttributeValues: {
        ':name': employee.name,
        ':age': employee.age,
        ':role': employee.role
      }
    }).promise()
  }

  delete (id: string): Promise<any> {
    return docClient.update({
      TableName: config.AWS.DYNAMO.TABLES.EMPLOYEES,
      Key: { id },
      UpdateExpression: 'set #archived = :archived',
      ExpressionAttributeNames: { '#archived': 'archived' },
      ExpressionAttributeValues: {
        ':archived': true
      }
    }).promise()
  }

  async searchOne (id): Promise<any> {
    const { Item } = await docClient.get({
      TableName: config.AWS.DYNAMO.TABLES.EMPLOYEES,
      Key: {
        id
      }
    }).promise()

    return Item
  }
}
export default new EmployeeRepository()
