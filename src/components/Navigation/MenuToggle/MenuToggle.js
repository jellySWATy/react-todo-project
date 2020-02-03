import React from 'react'
import "./MenuToggle.sass"

function MenuToggle({isOpen, onToggle}) {
    const cls = [
        "MenuToggle fa",
        isOpen ? "fa-times open" : "fa-bars"
    ]

    return (
        <i className={cls.join(" ")} onClick={onToggle} />
    )
}

export default MenuToggle