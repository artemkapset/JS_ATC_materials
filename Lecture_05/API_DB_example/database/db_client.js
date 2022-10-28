import mysql from 'mysql2/promise'
import connectionConfig from './connectionConfig.js'

const dbClient = {
  async executeQuery(query) {
    try {
      const connection = await mysql.createConnection(connectionConfig)
      const [result] = await connection.execute(query)
      await connection.end()
      return result
    } catch (error) {
      // error log may be added here
      // ...
      throw new Error(error.message)
    }
  },
}

export default dbClient
