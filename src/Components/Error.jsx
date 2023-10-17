import React from "react"
import {connect} from "react-redux"

import classes from "../ComponantsCSS/Error.module.css"

const Error = ({errors}) => {

    console.log(errors)
    return (
        <div className={`${classes.Background}`}>
            <div className={`${classes.Error}`}>
               {errors.errorAboutInputfiled}
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps)(Error)