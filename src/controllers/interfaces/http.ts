export interface HttpResponse {
  statusCode: number
  body: string | null
}

export interface HttpRequest {
  body?: any
  pathParameters?: any
}
