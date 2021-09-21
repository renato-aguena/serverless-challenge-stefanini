import { InternalServerError, NoContent, Ok } from './../../../src/infrastructure/helpers/responses'

describe('Responses Controller Helpers', () => {
  test('given a valid body should return Ok as expected', async () => {
    const body = {
      success: true
    }
    const result = Ok(body)

    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual(JSON.stringify(body))
  })

  test('given a null body should return Ok as expected', async () => {
    const result = Ok()

    expect(result.statusCode).toBe(200)
    expect(result.body).toBeNull()
  })

  test('given a null body should return NoContent as expected', async () => {
    const result = NoContent()

    expect(result.statusCode).toBe(204)
    expect(result.body).toBeUndefined()
  })

  test('given a valid body should return InternalServerError as expected', async () => {
    const result = InternalServerError('server_error')

    expect(result.statusCode).toBe(500)
    expect(result.body).toEqual('server_error')
  })
})
