## Instalação

`npm install`

## Testes

`npm run test`

## Lint

`npm run lint`

## Publicar em dev

`npm run delpoy:dev`

## Rodar local (necessário publicar uma vez pelo menos)

`npm run start:dev`

## Endpoints

### POST /employees

#### Body

```JSON
{
  "name": "Renato Kenji Aguena",
  "age": 26,
  "role": "developer"
}
```

### Response

```JSON
  {
    "statusCode": 200,
    "body": {
      "id": "447f9dd3-0586-542e-a098-fe8ce15e772a",
      "name": "Renato Kenji Aguena",
      "age": 26,
      "role": "developer",
      "createdAt": "2021-09-22T17:26:00",
      "archived": false
    }
  }
```

### PUT /employees/{id}

#### Body
```JSON
{
  "name": "Renato K. Aguena",
  "age": 27,
  "role": "Desenvolvedor"
}
```

### Response

```JSON
  {
    "statusCode": 204
  }
```

### DELETE /employees/{id}

### Response

```JSON
  {
    "statusCode": 204
  }
```

### GET /employees/{id}

### Response

```JSON
  {
    "statusCode": 200,
    "body": {
      "id": "447f9dd3-0586-542e-a098-fe8ce15e772a",
      "name": "Renato Kenji Aguena",
      "age": 26,
      "role": "developer",
      "createdAt": "2021-09-22T17:26:00",
      "archived": false
    }
  }
```
