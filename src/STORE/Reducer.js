import initialState from "./State"
import {UP_SALARY, DOWN_SALARY, DELETE, DOUBLE_SALARY, ADD_EMPLOYEE, ADD_SALARY_WITH_PROCENT} from "./Action"


function reducer (state = initialState, action) {
    switch(action.type){
        case UP_SALARY:
            return {
                employees: state.employees.map(employee => {
                    if(action.payloud === employee.id) {
                        return {
                            ...employee,
                            salary: employee.salary + 50000
                        }
                    }else {
                        return employee
                    }
                })
            
            }

            case DOWN_SALARY:
                return {
                    employees: state.employees.map(employee => {
                        if(action.payloud === employee.id && employee.salary > 0) {
                            if(employee.salary < 50000) {
                                return {
                                    ...employee,
                                    salary: 0
                                }
                            }else {
                                return {
                                ...employee,
                                salary: employee.salary - 50000
                                }
                            }
                            
                        }else {
                            return employee
                        }
                    })
                }

                case DELETE:
                  return {
                    employees: state.employees.filter(employee => employee.id !== action.payloud)
                  }
                  case DOUBLE_SALARY:
                    return {
                        employees: state.employees.map(employee => {
                            if(action.payloud === employee.id) {
                                return {
                                    ...employee,
                                    salary: employee.salary * 2
                                }
                            }else {
                                return employee
                            }
                        })
                    }

                    case ADD_EMPLOYEE:
                        return {
                            employees: [...state.employees, action.payloud]
                        }

                    case ADD_SALARY_WITH_PROCENT:
                        return {
                            employees: [...state.employees.map(employee => {
                                return {
                                    ...employee,
                                    salary: employee.salary + ( employee.salary * 30 )/100
                                }
                            })]
                        }
            default:
                return state
    }
}

export default reducer
