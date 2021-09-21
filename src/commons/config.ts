export default {
  AWS: {
    REGION: process.env.REGION,
    DYNAMO: {
      TABLES: {
        EMPLOYEES: process.env.TABLE_EMPLOYEES
      }
    }
  }
}
