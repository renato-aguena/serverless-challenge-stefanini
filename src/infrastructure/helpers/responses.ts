import { HttpResponse } from './../interfaces/http'

export const Ok = (body?: any): HttpResponse => ({
  statusCode: 200,
  body: body ? JSON.stringify(body) : null
})

export const NoContent = (): HttpResponse => ({
  statusCode: 204
})

export const InternalServerError = (body?): HttpResponse => ({
  statusCode: 500,
  body
})
