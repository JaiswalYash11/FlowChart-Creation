import React from 'react'

function Window(props) {

    const drop = e => {
        // e.preventDefault()
        const shape_id = e.dataTransfer.getData('shape_id')
        const shape = document.getElementById(shape_id)
        shape.style.display = 'block'
        shape.id = 'new_shape_id'
        e.target.appendChild(shape)
    }

    const dragOver = e => {
        e.preventDefault()
    }
    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Window