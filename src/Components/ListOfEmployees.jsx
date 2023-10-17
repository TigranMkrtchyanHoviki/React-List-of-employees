import React from "react"
import Employee from "./Employee"
import {makeAddSalaryWithProcent} from "../STORE/Action"

import classes from "../ComponantsCSS/ListOfEmloyees.module.css"

import {connect} from "react-redux"

let ListOfEmployees = ({employees, AddSalary_WithProcent}) => {

    return (
        <div className={`${classes.List_Container}`}>
            <div className={`${classes.Add_sellery_with_procent}`}>
                <button onClick={() => AddSalary_WithProcent()}>Add Salary 30%</button>
            </div>
            {employees.map(employee => {
                return (
                    <Employee key={employee.id} employee={employee}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
        employees: state.employees
     }
}

const mapDispatchToprops = (dispatch) => {
     return {
        AddSalary_WithProcent: () => dispatch(makeAddSalaryWithProcent())
     }
}

export default connect(mapStateToProps, mapDispatchToprops)(ListOfEmployees)