import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"53px"}}>   {/* this line because to create dedicated place for msg to be displayed */}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}
        {/* above code precent in curly braces since it is present inside css div    */}
        </div>}
        </div>
    )
}
