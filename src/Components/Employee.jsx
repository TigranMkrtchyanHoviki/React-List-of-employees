import React from "react"
import {makeUpSalary, makeDownSalary, makeDelete, makeDouble} from "../STORE/Action"

import list from "../ComponantsCSS/Employee.module.css"

import {connect} from "react-redux"

const Employee = ({employee, UpSalary, DownSalary, Delete, DoubleSalary}) => {

      return (
        <div className={`${list.Employee}`}>
            <span className={`${list.Name}`}>{employee.name}</span>
            <span className={`${list.LastName}`}>{employee.lastName}</span>
            <span className={`${list.Salary}`}>{employee.salary}</span>
            <button className={`${list.button}`} onClick={() => UpSalary(employee.id)}>UP</button>
            <button className={`${list.button}`} onClick={() => DownSalary(employee.id)}>DOWN</button>
            <button className={`${list.button}`} onClick={() => Delete(employee.id)}>DELET</button>
            <button className={`${list.button}`} onClick={() => DoubleSalary(employee.id)}>DOUBLE</button>
        </div>
      )
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpSalary: (id) => dispatch(makeUpSalary(id)),
        DownSalary: (id) => dispatch(makeDownSalary(id)),
        Delete: (id) => dispatch(makeDelete(id)),
        DoubleSalary: (id) => dispatch(makeDouble(id)),
    }
}

export default connect(null, mapDispatchToProps)(Employee)