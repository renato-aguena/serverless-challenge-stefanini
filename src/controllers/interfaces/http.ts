export interface HttpResponse {
  statusCode: number
  body?: string
}

export interface HttpRequest {
  body?: any
  pathParameters?: any
}
