const employeeQueries = {
  selectemployeeByID(id) {
    return `SELECT * FROM employee WHERE EmplID=${id}`
  },
  insertEmployee({ name, age, dept }) {
    return `INSERT INTO employee (EmplName, EmplAge, EmplDept) VALUES ('${name}', '${age}', '${dept}')`
  },
  updateDepartmentByID({ dept, id }) {
    return `UPDATE employee SET EmplDept = '${dept}' WHERE EmplID = ${id}`
  },
}

export default employeeQueries
