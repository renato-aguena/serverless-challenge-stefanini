export interface HttpResponse {
  statusCode: number
  body?: string
}

export interface HttpRequest {
  body?: any
  path?: any
}

export interface HttpServerlessRequest {
  body?: any
  pathParameters?: any
}
