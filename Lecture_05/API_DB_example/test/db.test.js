import { strict as assert } from 'assert'
import db_client from '../database/db_client.js'
import allQueries from '../database/queries/allQueries.js'

describe('DB tests', () => {
  it('Department test', async () => {
    const expectedDept = {
      DeptName: 'IT',
      DeptID: 4,
      DeptZone: 'West',
    }
    const [actualDept] = await db_client.executeQuery(allQueries.departmentQueries.selectDepartmentByName(expectedDept.DeptName))
    assert.deepEqual(actualDept, expectedDept)
  })

  it('Employee test', async () => {
    const newEmployee = {
      name: 'Nick',
      age: 35,
      dept: 'Finance',
    }
    await db_client.executeQuery(allQueries.employeeQueries.insertEmployee(newEmployee))
    const update = {
      dept: 'IT',
      id: 5,
    }
    await db_client.executeQuery(allQueries.employeeQueries.updateDepartmentByID(update))
    const [updatedEmpl] = await db_client.executeQuery(allQueries.employeeQueries.selectemployeeByID(update.id))
    assert(updatedEmpl.EmplDept, update.dept)
  })
})
