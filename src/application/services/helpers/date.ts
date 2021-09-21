import moment from 'moment'

const date = {
  dateUtcString: (): string => moment.utc().format('YYYY-MM-DDTHH:mm:ss')
}

export { date }
