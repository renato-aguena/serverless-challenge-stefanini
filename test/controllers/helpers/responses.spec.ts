import { Ok } from './../../../src/controllers/helpers/responses'

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
})
