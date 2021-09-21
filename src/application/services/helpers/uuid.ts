import { v4 as uuidv4 } from 'uuid'

const uuid = {
  generate: (): string => uuidv4()
}

export { uuid }
