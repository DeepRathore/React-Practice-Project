import React, { useState } from 'react'

export default function Alert(props) {

  return (
    props.showAlert && <div>
      <div className={`alert alert-${props.class} alert-dismissible fade show`} role="alert">
        <strong>{props.type}</strong>: {props.msg}
        <button type="button" className="btn-close" onClick={props.onClose} aria-label="Close"></button>
      </div>
    </div>
  )
}
