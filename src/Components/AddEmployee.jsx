import React, { useState } from "react"
import {connect} from "react-redux"
import Error from "./Error"
import {makeNewEmployee} from "../STORE/Action"

import classes from "../ComponantsCSS/AddEmployee.module.css"

const AddEmployee = ({employees, Add}) => {
     
     const [name, setName] = useState("")
     const [lastName, setLastName] = useState("")
     const [salary, setSalary] = useState(0)
     const [isError, setIsError] = useState(false)


    return (

        <div className={`${classes.Container}`}>
            <div className={`${classes.Name}`}>
                <div>Name</div>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className={`${classes.LastName}`}>
                <div>LastName</div>
                <input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div className={`${classes.Salary}`}>
                <div>Salary</div>
                <input value={salary} type="number" 
                   onChange={(e) => setSalary(+e.target.value)} 
                   onFocus={() => setSalary("")}>
                </input>
            </div>
            <div className={`${classes.div_button}`}>
                <button onClick={ () => 
                    {  

                      setName("")
                      setLastName("")
                      setSalary(0)

                      if(name === "" || lastName === "" || salary === 0 || salary === "" ) {
                        setIsError(!isError)
                        setTimeout(() => {
                            setIsError(false)
                        }, 3000)
                      }else {
                      
                        Add({
                            id: Math.max(...employees.map(employee => employee.id)) + 1,
                            name: name,
                            lastName: lastName,
                            salary: salary,
                            })
                
                      }
                   }
                    

                }>Add</button>
            </div>
            
                 {isError && <Error />}
            
            </div>
    )
}

let mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Add: (newEmployee) => dispatch(makeNewEmployee(newEmployee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)