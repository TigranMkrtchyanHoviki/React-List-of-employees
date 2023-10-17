export const UP_SALARY = "UP_SALARY"
export const DOWN_SALARY = "DOWN_SALARY"
export const DELETE = "DELETE"
export const DOUBLE_SALARY = '"DOUBLE_SALARY'
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const ADD_SALARY_WITH_PROCENT = "ADD_SALARY_WITH_PROCENT"


export const makeUpSalary = (id) => {
   return {
            type: UP_SALARY,
            payloud: id
   }
}

export const makeDownSalary = (id) => {
    return {
             type: DOWN_SALARY,
             payloud: id
    }
 }

 export const makeDelete = (id) => {
    return {
             type: DELETE,
             payloud: id
    }
 }

 export const makeDouble = (id) => {
    return {
             type: DOUBLE_SALARY,
             payloud: id
    }
 }

 export const makeNewEmployee = (newEmployee) => {
     return {
             type: ADD_EMPLOYEE,
             payloud: newEmployee
     }
 }

 export const makeAddSalaryWithProcent = () => {
   return {
      type: ADD_SALARY_WITH_PROCENT
   }
 }