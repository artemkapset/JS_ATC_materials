const departmentQueries = {
  selectDepartmentByName(name) {
    return `SELECT * FROM department WHERE DeptName='${name}'`
  },
}

export default departmentQueries
