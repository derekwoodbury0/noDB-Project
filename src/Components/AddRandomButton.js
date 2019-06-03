import React from 'react'

function AddRandomButton(props) {
    return <button id="add-random"
            onClick={props.addRandomBook}
        >
            {props.buttonText}
        </button>
}

export default AddRandomButton