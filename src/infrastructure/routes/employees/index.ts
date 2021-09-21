import { HttpRequest, HttpResponse } from './../../interfaces/http'
import execute from './../../base'
import EmployeesController from './../../../presentation/controllers/employees.controller'

export const postEmployee = async (request: HttpRequest): Promise<HttpResponse> => await execute(request, EmployeesController, 'postEmployee')
export const putEmployee = async (request: HttpRequest): Promise<HttpResponse> => await execute(request, EmployeesController, 'putEmployee')
export const deleteEmployee = async (request: HttpRequest): Promise<HttpResponse> => await execute(request, EmployeesController, 'deleteEmployee')
export const getEmployee = async (request: HttpRequest): Promise<HttpResponse> => await execute(request, EmployeesController, 'getEmployee')
